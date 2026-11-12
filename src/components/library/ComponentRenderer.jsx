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

export default function ComponentRenderer({ componentId, previewMode = 'react', dark = false }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  // If viewing Bootstrap 5 mode, render the Bootstrap 5 visual representation
  if (previewMode === 'bootstrap') {
    return (
      <div className={`p-6 w-full flex justify-center items-center ${dark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-800'}`}>
        <BootstrapPreview componentId={componentId} />
      </div>
    );
  }

  // React + Tailwind mode
  switch (componentId) {
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

