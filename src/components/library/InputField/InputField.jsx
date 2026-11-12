'use client';

import React, { useId } from 'react';

export default function InputField({
  label,
  helperText,
  error,
  startIcon: StartIcon,
  endIcon: EndIcon,
  required = false,
  disabled = false,
  className = '',
  id: explicitId,
  ...props
}) {
  const generatedId = useId();
  const id = explicitId || generatedId;
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;
  const hasError = Boolean(error);

  return (
    <div className={`flex flex-col gap-1.5 w-full text-left ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {label} {required && <span className="text-rose-500 font-semibold">*</span>}
        </label>
      )}

      <div className="relative flex items-center">
        {StartIcon && (
          <div className="absolute left-3.5 pointer-events-none text-slate-400 dark:text-slate-500">
            <StartIcon className="h-4 w-4" aria-hidden="true" />
          </div>
        )}

        <input
          id={id}
          disabled={disabled}
          aria-invalid={hasError ? 'true' : undefined}
          aria-describedby={hasError ? errorId : helperText ? helperId : undefined}
          className={`w-full rounded-lg border px-3.5 py-2 text-sm transition-colors outline-none disabled:bg-slate-50 disabled:text-slate-500 dark:disabled:bg-slate-900 ${
            StartIcon ? 'pl-10' : ''
          } ${EndIcon ? 'pr-10' : ''} ${
            hasError
              ? 'border-rose-500 text-rose-900 placeholder:text-rose-300 focus:border-rose-600 focus:ring-1 focus:ring-rose-600 dark:bg-rose-950/20 dark:text-rose-200'
              : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-indigo-500'
          }`}
          {...props}
        />

        {EndIcon && (
          <div className="absolute right-3.5 pointer-events-none text-slate-400 dark:text-slate-500">
            <EndIcon className="h-4 w-4" aria-hidden="true" />
          </div>
        )}
      </div>

      {hasError ? (
        <p id={errorId} role="alert" className="text-xs text-rose-600 dark:text-rose-400 font-medium">
          {error}
        </p>
      ) : helperText ? (
        <p id={helperId} className="text-xs text-slate-500 dark:text-slate-400">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

