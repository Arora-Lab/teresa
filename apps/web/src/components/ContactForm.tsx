"use client";

import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { Button } from './Button';

interface ContactFormProps {
  tForm: {
    sendUsMessage: string;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    submit: string;
    submitting: string;
    success: string;
    successDesc: string;
    error: string;
  };
}

export default function ContactForm({ tForm }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [turnstileToken, setTurnstileToken] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!turnstileToken) {
      alert("Please complete the captcha.");
      return;
    }
    
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      email: formData.get('email'),
      message: formData.get('message'),
      website: formData.get('website'), // honeypot
      turnstileToken
    };

    try {
      const res = await fetch('http://localhost:5144/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-[10px] bg-accent-soft p-6 mt-6 border border-primary/20">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-primary-medium" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-primary-dark">{tForm.success}</h3>
            <div className="mt-2 text-text-body font-medium">
              <p>{tForm.successDesc}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
      {/* Honeypot field */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" name="website" id="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="first-name" className="block text-[15px] font-bold text-primary-dark">{tForm.firstName}</label>
        <div className="mt-2">
          <input required type="text" name="first-name" id="first-name" autoComplete="given-name" className="py-3 px-4 block w-full text-text-body focus:ring-primary focus:border-primary border-border-card rounded-[8px] border shadow-sm outline-none transition-colors" />
        </div>
      </div>
      <div>
        <label htmlFor="last-name" className="block text-[15px] font-bold text-primary-dark">{tForm.lastName}</label>
        <div className="mt-2">
          <input required type="text" name="last-name" id="last-name" autoComplete="family-name" className="py-3 px-4 block w-full text-text-body focus:ring-primary focus:border-primary border-border-card rounded-[8px] border shadow-sm outline-none transition-colors" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="email" className="block text-[15px] font-bold text-primary-dark">{tForm.email}</label>
        <div className="mt-2">
          <input required id="email" name="email" type="email" autoComplete="email" className="py-3 px-4 block w-full text-text-body focus:ring-primary focus:border-primary border-border-card rounded-[8px] border shadow-sm outline-none transition-colors" />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-[15px] font-bold text-primary-dark">{tForm.message}</label>
        <div className="mt-2">
          <textarea required id="message" name="message" rows={4} className="py-3 px-4 block w-full text-text-body focus:ring-primary focus:border-primary border border-border-card rounded-[8px] shadow-sm outline-none transition-colors"></textarea>
        </div>
      </div>
      
      <div className="sm:col-span-2 mt-2">
        <Turnstile 
          siteKey="1x00000000000000000000AA" 
          onSuccess={(token) => setTurnstileToken(token)} 
        />
      </div>

      {status === 'error' && (
        <div className="sm:col-span-2 text-error text-[15px] font-medium mt-2 bg-error/10 p-3 rounded-lg">
          {tForm.error}
        </div>
      )}

      <div className="sm:col-span-2 mt-4">
        <Button 
          disabled={status === 'submitting'} 
          type="submit" 
          variant="primary"
          className="w-full sm:w-auto"
        >
          {status === 'submitting' ? tForm.submitting : tForm.submit}
        </Button>
      </div>
    </form>
  );
}
