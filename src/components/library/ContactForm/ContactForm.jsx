'use client';

import React, { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import InputField from '../InputField';
import Alert from '../Alert';

export default function ContactForm({
  onSubmit,
  title = 'Send us a message',
  subtitle = 'We typically respond within 24 business hours.',
  className = '',
}) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      setError('Please provide a valid work email address.');
      return;
    }

    setLoading(true);
    try {
      await onSubmit?.(formData);
      // Simulate submission delay
      await new Promise((r) => setTimeout(r, 800));
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setError('Failed to submit message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900 max-w-lg mx-auto space-y-4 ${className}`}
    >
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
        {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>}
      </div>

      {submitted && (
        <Alert variant="success" dismissible onDismiss={() => setSubmitted(false)} title="Message sent successfully!">
          Thank you for reaching out. An engineer will follow up shortly.
        </Alert>
      )}

      {error && (
        <Alert variant="danger" dismissible onDismiss={() => setError('')} title="Submission error">
          {error}
        </Alert>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Full name"
          name="name"
          placeholder="Jane Doe"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          label="Work email"
          name="email"
          type="email"
          placeholder="jane@company.com"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <InputField
        label="Subject"
        name="subject"
        placeholder="Project inquiry or architectural review"
        value={formData.subject}
        onChange={handleChange}
      />

      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="contact-message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
          Message <span className="text-rose-500 font-semibold">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your technical goals, timeline, and requirements..."
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm transition-colors outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
      </div>

      <PrimaryButton type="submit" loading={loading} className="w-full justify-center">
        {loading ? 'Sending message...' : 'Send Message'}
      </PrimaryButton>
    </form>
  );
}

