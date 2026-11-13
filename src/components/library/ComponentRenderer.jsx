'use client';

import React, { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import InputField from './InputField';
import Navbar from './Navbar';
import Card from './Card';
import Modal from './Modal';
import Alert from './Alert';
import DataTable from './DataTable';
import ImageGallery from './ImageGallery';
import ContactForm from './ContactForm';
import Footer from './Footer';
import OddsCard from './OddsCard';
import Badge from './Badge';
import Avatar from './Avatar';

export default function ComponentRenderer({
  componentId,
  previewMode = 'react',
  isThumbnail = false,
  dark = false,
  dynamicProps = null,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  // Dynamic Playground Mode: when custom props are actively being manipulated
  if (dynamicProps && Object.keys(dynamicProps).length > 0 && !isThumbnail && previewMode === 'react') {
    switch (componentId) {
      case 'primary-button':
        return (
          <div className="flex items-center justify-center p-8">
            <PrimaryButton {...dynamicProps}>
              {dynamicProps.children || 'Button Action'}
            </PrimaryButton>
          </div>
        );
      case 'badge':
        return (
          <div className="flex items-center justify-center p-8">
            <Badge {...dynamicProps}>
              {dynamicProps.children || 'Active Badge'}
            </Badge>
          </div>
        );
      case 'avatar':
        return (
          <div className="flex items-center justify-center p-8">
            <Avatar {...dynamicProps}>
              {dynamicProps.children}
            </Avatar>
          </div>
        );
      case 'input-field':
        return (
          <div className="w-full max-w-sm mx-auto p-6">
            <InputField {...dynamicProps} />
          </div>
        );
      case 'alert':
        return (
          <div className="w-full max-w-md mx-auto p-6">
            <Alert {...dynamicProps}>
              {dynamicProps.children || 'This is an alert message.'}
            </Alert>
          </div>
        );
      case 'card':
        return (
          <div className="w-full max-w-sm mx-auto p-6">
            <Card {...dynamicProps}>
              {dynamicProps.children || 'Accelerate multi-region database replication with zero downtime.'}
            </Card>
          </div>
        );
      case 'navbar':
        return (
          <div className="w-full shadow-sm rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <Navbar {...dynamicProps} />
          </div>
        );
      case 'footer':
        return (
          <div className="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <Footer {...dynamicProps} />
          </div>
        );
      default:
        break;
    }
  }

  // Compact, non-nested thumbnail previews for cards
  if (isThumbnail) {
    switch (componentId) {
      case 'avatar':
        return (
          <div className="flex items-center justify-center p-2">
            <Avatar>Avatar</Avatar>
          </div>
        );

      case 'badge':
        return <Badge>Badge</Badge>;

      case 'primary-button':
        return (
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <PrimaryButton variant="primary" size="sm">Get Started</PrimaryButton>
            <PrimaryButton variant="outline" size="sm">Learn More</PrimaryButton>
          </div>
        );

      case 'input-field':
        return (
          <div className="w-full max-w-[260px] space-y-1 text-left">
            <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 block">Work email *</span>
            <div className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-400 dark:border-slate-700 dark:bg-slate-900 shadow-xs">
              you@company.com
            </div>
          </div>
        );

      case 'navbar':
        return (
          <div className="w-full max-w-[280px] rounded-lg border border-slate-200 bg-white p-2.5 shadow-xs dark:border-slate-800 dark:bg-slate-900 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
              <span className="h-5 w-5 rounded bg-indigo-600 text-white font-bold text-[10px] grid place-items-center">DP</span>
              <span className="text-xs">DevPortal</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-500">
              <span>Products</span>
              <span>Docs</span>
            </div>
            <span className="rounded-md bg-indigo-600 px-2 py-0.5 text-[10px] font-semibold text-white">Action</span>
          </div>
        );

      case 'card':
        return (
          <div className="w-full max-w-[240px] rounded-xl border border-slate-200 bg-white p-3 shadow-xs dark:border-slate-800 dark:bg-slate-900 text-left space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 dark:text-white">Cloud Migration</span>
              <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 dark:bg-indigo-950 px-1.5 py-0.2 rounded-full">Pro</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight">Automated cluster setup with 99.9% uptime.</p>
          </div>
        );

      case 'modal':
        return (
          <div className="w-full max-w-[240px] rounded-xl border border-slate-200 bg-white p-3 shadow-md dark:border-slate-800 dark:bg-slate-900 text-left space-y-1.5">
            <div className="flex items-center justify-between border-b pb-1 border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-800 dark:text-white">Modal Dialog</span>
              <span className="text-slate-400 text-[10px]">✕</span>
            </div>
            <p className="text-[10px] text-slate-500">Accessible focus-trapped overlay window.</p>
            <div className="flex justify-end gap-1 pt-1">
              <span className="rounded px-2 py-0.5 text-[9px] bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">Cancel</span>
              <span className="rounded px-2 py-0.5 text-[9px] bg-indigo-600 text-white font-semibold">Confirm</span>
            </div>
          </div>
        );

      case 'alert':
        return (
          <div className="w-full max-w-[260px] rounded-xl border border-emerald-200 bg-emerald-50 p-2 text-xs text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200 flex items-center gap-2">
            <span className="text-emerald-600 font-bold text-sm">✓</span>
            <span className="font-medium text-[11px]">System live across all edge regions.</span>
          </div>
        );

      case 'data-table':
        return (
          <div className="w-full max-w-[260px] rounded-lg border border-slate-200 bg-white overflow-hidden text-[10px] shadow-xs dark:border-slate-800 dark:bg-slate-900 text-left">
            <div className="flex bg-slate-50 dark:bg-slate-800 p-1.5 font-bold text-slate-500 border-b border-slate-200 dark:border-slate-700">
              <span className="w-1/3">ID</span>
              <span className="w-2/3">Name</span>
            </div>
            <div className="flex p-1.5 border-b border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300">
              <span className="w-1/3">USR-01</span>
              <span className="w-2/3">Sophia Hayes</span>
            </div>
            <div className="flex p-1.5 text-slate-700 dark:text-slate-300">
              <span className="w-1/3">USR-02</span>
              <span className="w-2/3">Liam Vance</span>
            </div>
          </div>
        );

      case 'image-gallery':
        return (
          <div className="w-full max-w-[240px] rounded-xl overflow-hidden border border-slate-200 shadow-xs relative aspect-video bg-slate-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
              alt="Coast preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/60 p-1 text-white text-[9px] font-semibold">
              Coastal Sunset
            </div>
          </div>
        );

      case 'contact-form':
        return (
          <div className="w-full max-w-[240px] rounded-xl border border-slate-200 bg-white p-2.5 space-y-1.5 text-left shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <span className="text-xs font-bold text-slate-800 dark:text-white block">Contact Us</span>
            <div className="h-6 w-full rounded border border-slate-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 px-2 flex items-center text-[9px] text-slate-400">
              you@company.com
            </div>
            <span className="block w-full py-1 text-[9px] font-semibold bg-indigo-600 text-white rounded text-center">
              Send Message
            </span>
          </div>
        );

      case 'footer':
        return (
          <div className="w-full max-w-[280px] rounded-lg border border-slate-200 bg-white p-2.5 shadow-xs dark:border-slate-800 dark:bg-slate-900 text-left flex justify-between items-center text-[10px] text-slate-500">
            <div className="flex items-center gap-1 font-bold text-slate-800 dark:text-white">
              <span className="h-4 w-4 rounded bg-indigo-600 text-white text-[8px] grid place-items-center">DP</span>
              <span>DevPortal</span>
            </div>
            <div className="flex gap-2 text-[9px]">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Docs</span>
            </div>
          </div>
        );

      case 'odds-card':
        return (
          <div className="w-full max-w-[240px] rounded-xl border border-slate-200 bg-white p-2 shadow-xs dark:border-slate-800 dark:bg-slate-900 text-left space-y-1">
            <div className="flex justify-between text-[9px]">
              <span className="text-slate-400">Champions League</span>
              <span className="text-rose-600 font-bold">● LIVE</span>
            </div>
            <span className="text-[11px] font-bold text-slate-800 dark:text-white block">Man City vs Real Madrid</span>
            <div className="grid grid-cols-3 gap-1 text-[9px] text-center font-bold">
              <span className="p-0.5 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950">1.85</span>
              <span className="p-0.5 rounded bg-slate-100 dark:bg-slate-800">3.60</span>
              <span className="p-0.5 rounded bg-slate-100 dark:bg-slate-800">4.20</span>
            </div>
          </div>
        );

      default:
        return <div className="text-xs text-slate-400">Preview</div>;
    }
  }

  // If viewing Bootstrap 5 mode, render the Bootstrap 5 visual representation
  if (previewMode === 'bootstrap') {
    return (
      <div className={`p-6 w-full flex justify-center items-center ${dark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-800'}`}>
        <BootstrapPreview componentId={componentId} />
      </div>
    );
  }

  // Full Interactive React + Tailwind Mode (used on Component Detail Page)
  switch (componentId) {
    case 'avatar':
      return (
        <div className="flex items-center justify-center p-6">
          <Avatar>Interactive Avatar</Avatar>
        </div>
      );

    case 'badge':
      return (
        <div className="flex items-center justify-center p-6">
          <Badge>Active Badge</Badge>
        </div>
      );

    case 'primary-button':
      return (
        <div className="flex flex-wrap items-center justify-center gap-3 p-6">
          <PrimaryButton variant="primary">Get Started</PrimaryButton>
          <PrimaryButton variant="outline">Learn More</PrimaryButton>
          <PrimaryButton variant="secondary">Secondary</PrimaryButton>
          <PrimaryButton variant="danger">Delete</PrimaryButton>
          <PrimaryButton
            loading={btnLoading}
            onClick={() => {
              setBtnLoading(true);
              setTimeout(() => setBtnLoading(false), 2000);
            }}
          >
            {btnLoading ? 'Saving...' : 'Click for Loading'}
          </PrimaryButton>
        </div>
      );

    case 'input-field':
      return (
        <div className="w-full max-w-sm space-y-4 p-4 mx-auto">
          <InputField
            label="Work email"
            type="email"
            placeholder="developer@syscorp.com"
            helperText="We will send calendar invites directly."
            required
          />
          <InputField
            label="Domain validation"
            placeholder="your-domain"
            defaultValue="invalid-format"
            error="Please provide a valid company domain."
          />
        </div>
      );

    case 'navbar':
      return (
        <div className="w-full shadow-sm rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <Navbar brandName="SysCorp" ctaText="Get a Demo" />
        </div>
      );

    case 'card':
      return (
        <div className="w-full max-w-sm mx-auto p-4">
          <Card
            title="Cloud Server Migration"
            subtitle="DevOps & Reliability"
            badge="Enterprise"
            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
            footer={
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">99.9% SLA</span>
                <PrimaryButton size="sm">Explore</PrimaryButton>
              </div>
            }
          >
            Accelerate multi-region database replication with zero downtime and automated failover.
          </Card>
        </div>
      );

    case 'modal':
      return (
        <div className="p-8 text-center space-y-4">
          <PrimaryButton onClick={() => setModalOpen(true)}>Open Modal Preview</PrimaryButton>
          <p className="text-xs text-slate-500">Press Escape or click outside to dismiss the modal.</p>
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Request Platform Demo"
            description="Our architecture team will schedule a live 30-minute walkthrough."
            footer={
              <>
                <PrimaryButton variant="outline" size="sm" onClick={() => setModalOpen(false)}>
                  Cancel
                </PrimaryButton>
                <PrimaryButton size="sm" onClick={() => setModalOpen(false)}>
                  Submit
                </PrimaryButton>
              </>
            }
          >
            <div className="space-y-3">
              <InputField label="Corporate email" placeholder="jane@company.com" required />
              <InputField label="Team size" placeholder="e.g. 10 - 50 engineers" />
            </div>
          </Modal>
        </div>
      );

    case 'alert':
      return (
        <div className="w-full max-w-md mx-auto space-y-3 p-4">
          <Alert variant="success" title="Deployment Complete" dismissible>
            Version 2.4.0 is now live across all edge regions.
          </Alert>
          <Alert variant="info" title="System Maintenance">
            Database indexing scheduled for Sunday at 02:00 UTC.
          </Alert>
          <Alert variant="warning" title="API Quota Warning">
            You have used 85% of your monthly request allocation.
          </Alert>
          <Alert variant="danger" title="Connection Error" dismissible>
            Unable to connect to downstream telemetry microservice.
          </Alert>
        </div>
      );

    case 'data-table':
      return (
        <div className="w-full p-4">
          <DataTable />
        </div>
      );

    case 'image-gallery':
      return (
        <div className="w-full p-4">
          <ImageGallery />
        </div>
      );

    case 'contact-form':
      return (
        <div className="w-full p-4">
          <ContactForm />
        </div>
      );

    case 'footer':
      return (
        <div className="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <Footer brandName="SysCorp" tagline="Reusable UI components engineered for production teams." />
        </div>
      );

    case 'odds-card':
      return (
        <div className="w-full p-4">
          <OddsCard />
        </div>
      );

    default:
      return <div className="p-6 text-sm text-slate-400">Preview not available.</div>;
  }
}

// Bootstrap 5 Preview Renderer with Bootstrap styling classes
function BootstrapPreview({ componentId }) {
  switch (componentId) {
    case 'primary-button':
      return (
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-pill shadow-sm border-0 cursor-pointer">
            Primary Button
          </button>
          <button className="px-4 py-2 font-semibold text-blue-600 bg-transparent hover:bg-blue-50 border border-blue-600 rounded-pill cursor-pointer">
            Outline Button
          </button>
          <button className="px-4 py-2 font-semibold text-white bg-blue-600 opacity-65 rounded-pill border-0 cursor-not-allowed">
            <span className="inline-block w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Loading...
          </button>
        </div>
      );

    case 'input-field':
      return (
        <div className="w-full max-w-sm space-y-2 text-left">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Work Email *</label>
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
          <span className="text-xs text-slate-400">Bootstrap Form Control style with floating label support.</span>
        </div>
      );

    case 'card':
      return (
        <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-left">
          <div className="flex justify-between items-center mb-2">
            <h5 className="font-bold text-base text-slate-900">Bootstrap 5 Card</h5>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">New</span>
          </div>
          <p className="text-sm text-slate-600 mb-4">Clean card container using standard Bootstrap utility classes.</p>
          <button className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md border-0">
            Action Button
          </button>
        </div>
      );

    case 'alert':
      return (
        <div className="w-full max-w-md space-y-2 text-left">
          <div className="p-3 text-sm rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-900">
            <strong>Well done!</strong> Bootstrap alert-success component rendered.
          </div>
          <div className="p-3 text-sm rounded-lg border border-rose-300 bg-rose-50 text-rose-900">
            <strong>Heads up!</strong> Bootstrap alert-danger feedback banner.
          </div>
        </div>
      );

    default:
      return (
        <div className="text-sm text-slate-500 text-center">
          Bootstrap 5 template snippet available in code tabs.
        </div>
      );
  }
}
