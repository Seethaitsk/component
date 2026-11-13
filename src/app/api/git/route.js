import { NextResponse } from 'next/server';
import { execSync } from 'node:child_process';

function getGitInfo() {
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    const hash = execSync('git log -1 --format="%h"').toString().trim();
    const author = execSync('git log -1 --format="%an"').toString().trim();
    const message = execSync('git log -1 --format="%s"').toString().trim();
    const date = execSync('git log -1 --format="%cr"').toString().trim();

    let remote = null;
    try {
      remote = execSync('git remote get-url origin 2>/dev/null').toString().trim();
    } catch {
      remote = null;
    }

    return {
      branch,
      hash,
      author,
      message,
      date,
      remote,
      isConfigured: Boolean(remote),
    };
  } catch (err) {
    return {
      error: err.message,
      branch: 'unknown',
      hash: '----',
      isConfigured: false,
    };
  }
}

export async function GET() {
  const info = getGitInfo();
  return NextResponse.json(info);
}

export async function POST(request) {
  try {
    const info = getGitInfo();

    if (!info.isConfigured) {
      return NextResponse.json({
        success: false,
        configured: false,
        message: 'No remote Git repository configured yet. Run: git remote add origin <your-repo-url>',
        info,
      });
    }

    // Pull latest changes from remote
    const pullOutput = execSync(`git pull origin ${info.branch || 'main'}`).toString().trim();
    const updatedInfo = getGitInfo();

    return NextResponse.json({
      success: true,
      configured: true,
      output: pullOutput,
      message: 'Successfully pulled latest changes from remote Git repository!',
      info: updatedInfo,
    });
  } catch (err) {
    console.error('Git pull error:', err);
    return NextResponse.json(
      {
        success: false,
        error: err.message || 'Failed to pull from remote Git repository',
      },
      { status: 500 }
    );
  }
}

