'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Sidebar from './Sidebar';

export default function PortalShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // If viewing a standalone website preview, render borderless without portal chrome
  if (pathname.startsWith('/preview')) {
    return <div className="min-h-screen w-full bg-white text-slate-900">{children}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Header onMobileMenuToggle={() => setSidebarOpen(true)} />

      <div className="flex-1 flex w-full">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 pb-16 max-w-7xl">
          {children}
        </main>
      </div>
    </div>
  );
}

