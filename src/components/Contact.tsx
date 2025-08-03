/**
 * Enhanced Contact Form Component with Supabase Integration
 * 
 * This component provides a comprehensive contact form with real-time validation,
 * Supabase database integration, and excellent user experience features.
 */

import React from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { NeonBackground } from './NeonBackground';
import { useContactForm } from '../hooks/useContactForm';

/**
 * Service options for the dropdown
 */
const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service' },
  { value: 'lead-generation', label: 'AI Lead Generation' },
  { value: 'chatbots', label: 'Intelligent Chatbots' },
  { value: 'scheduling', label: 'Smart Scheduling' },
  { value: 'web-development', label: 'AI Web Development' },
  { value: 'consulting', label: 'AI Strategy Consulting' },
  { value: 'email-automation', label: 'Email Automation' },
  { value: 'social-media', label: 'Social Media AI' },
  { value: 'full-suite', label: 'Complete AI Suite' },
];

/**
 * Budget options for the dropdown
 */
const BUDGET_OPTIONS = [
  { value: '', label: 'Select budget range' },
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-15k', label: '$5,000 - $15,000' },
  { value: '15k-50k', label: '$15,000 - $50,000' },
  { value: '50k-plus', label: '$50,000+' },
];

/**
 * Contact information data
 */
const CONTACT_INFO = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    content: "hello@neurionai.com",
    description: "Get in touch for general inquiries"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Speak with our AI specialists"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    content: "San Francisco, CA",
    description: "Schedule an in-person consultation"
  }
];

/**
 * Input field component with validation styling
 */
interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  disabled = false,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-green-300 mb-2 font-mono">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={`
        w-full px-4 py-3 bg-black/60 border rounded-lg 
        focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 
        transition-all text-green-300 font-mono hover:border-cyan-400/80
        disabled:opacity-50 disabled:cursor-not-allowed
        ${error 
          ? 'border-red-400 focus:ring-red-400 focus:border-red-400' 
          : 'border-cyan-400/60'
        }
      `}
      placeholder={placeholder}
      aria-describedby={error ? `${id}-error` : undefined}
      aria-invalid={error ? 'true' : 'false'}
    />
    {error && (
      <p id={`${id}-error`} className="mt-1 text-sm text-red-400 font-mono flex items-center">
        <AlertCircle className="w-4 h-4 mr-1" />
        {error}
      </p>
    )}
  </div>
);

/**
 * Select field component with validation styling
 */
interface SelectFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  options,
  error,
  required = false,
  disabled = false,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-green-300 mb-2 font-mono">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <select
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={`
        w-full px-4 py-3 bg-black/60 border rounded-lg 
        focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 
        transition-all text-green-300 font-mono hover:border-cyan-400/80
        disabled:opacity-50 disabled:cursor-not-allowed
        ${error 
          ? 'border-red-400 focus:ring-red-400 focus:border-red-400' 
          : 'border-cyan-400/60'
        }
      `}
      aria-describedby={error ? `${id}-error` : undefined}
      aria-invalid={error ? 'true' : 'false'}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && (
      <p id={`${id}-error`} className="mt-1 text-sm text-red-400 font-mono flex items-center">
        <AlertCircle className="w-4 h-4 mr-1" />
        {error}
      </p>
    )}
  </div>
);

/**
 * Textarea field component with validation styling
 */
interface TextareaFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  rows = 4,
  disabled = false,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-green-300 mb-2 font-mono">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <textarea
      id={id}
      name={name}
      required={required}
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={`
        w-full px-4 py-3 bg-black/60 border rounded-lg 
        focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 
        transition-all text-green-300 font-mono hover:border-cyan-400/80
        disabled:opacity-50 disabled:cursor-not-allowed resize-vertical
        ${error 
          ? 'border-red-400 focus:ring-red-400 focus:border-red-400' 
          : 'border-cyan-400/60'
        }
      `}
      placeholder={placeholder}
      aria-describedby={error ? `${id}-error` : undefined}
      aria-invalid={error ? 'true' : 'false'}
    />
    <div className="flex justify-between items-center mt-1">
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-400 font-mono flex items-center">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </p>
      ) : (
        <div></div>
      )}
      <span className="text-xs text-cyan-300 font-mono">
        {value.length} characters
      </span>
    </div>
  </div>
);

/**
 * Main Contact Form Component
 */
export const Contact: React.FC = () => {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
    resetForm,
  } = useContactForm();

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <NeonBackground variant="contact" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-semibold text-sm tracking-wide uppercase mb-4 font-mono">
            <TypewriterText text=">>> INITIALIZE CONTACT" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }}>
            <TypewriterText text="TRANSFORM YOUR BUSINESS TODAY" />
          </h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono" style={{ textShadow: '0 0 15px rgba(0, 200, 50, 0.7)' }}>
            <TypewriterText 
              text="Ready to achieve 300% ROI with AI automation? Schedule a consultation with our experts and discover how Neurion AI can revolutionize your operations."
              speed={40}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/40 shadow-xl shadow-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.4)' }}>
                START YOUR AI JOURNEY
              </h3>
              
              {/* Submit Status Messages */}
              {submitStatus.type && (
                <div className={`
                  mb-6 p-4 rounded-lg border font-mono flex items-center
                  ${submitStatus.type === 'success' 
                    ? 'bg-green-400/20 border-green-400 text-green-400' 
                    : 'bg-red-400/20 border-red-400 text-red-400'
                  }
                `}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    id="firstName"
                    name="first_name"
                    type="text"
                    label="FIRST NAME"
                    value={formData.first_name}
                    onChange={(value) => handleInputChange('first_name', value)}
                    error={errors.first_name}
                    required
                    placeholder="John"
                    disabled={isSubmitting}
                  />
                  <InputField
                    id="lastName"
                    name="last_name"
                    type="text"
                    label="LAST NAME"
                    value={formData.last_name}
                    onChange={(value) => handleInputChange('last_name', value)}
                    error={errors.last_name}
                    required
                    placeholder="Doe"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    id="email"
                    name="email"
                    type="email"
                    label="EMAIL ADDRESS"
                    value={formData.email}
                    onChange={(value) => handleInputChange('email', value)}
                    error={errors.email}
                    required
                    placeholder="john@company.com"
                    disabled={isSubmitting}
                  />
                  <InputField
                    id="phone"
                    name="phone"
                    type="tel"
                    label="PHONE NUMBER"
                    value={formData.phone}
                    onChange={(value) => handleInputChange('phone', value)}
                    error={errors.phone}
                    placeholder="+1 (555) 123-4567"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Company and Service Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    id="company"
                    name="company_name"
                    type="text"
                    label="COMPANY NAME"
                    value={formData.company_name}
                    onChange={(value) => handleInputChange('company_name', value)}
                    error={errors.company_name}
                    required
                    placeholder="Your Company"
                    disabled={isSubmitting}
                  />
                  <SelectField
                    id="service"
                    name="service_interest"
                    label="SERVICE INTEREST"
                    value={formData.service_interest}
                    onChange={(value) => handleInputChange('service_interest', value)}
                    options={SERVICE_OPTIONS}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Budget Field */}
                <SelectField
                  id="budget"
                  name="budget"
                  label="PROJECT BUDGET"
                  value={formData.budget}
                  onChange={(value) => handleInputChange('budget', value)}
                  options={BUDGET_OPTIONS}
                  disabled={isSubmitting}
                />

                {/* Project Details */}
                <TextareaField
                  id="message"
                  name="project_details"
                  label="PROJECT DETAILS"
                  value={formData.project_details}
                  onChange={(value) => handleInputChange('project_details', value)}
                  error={errors.project_details}
                  required
                  rows={4}
                  placeholder="Tell us about your business challenges and automation goals..."
                  disabled={isSubmitting}
                />

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-cyan-400 to-green-400 text-black px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-mono border border-cyan-400 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  className="flex-1 bg-gradient-to-r from-cyan-400 to-green-400 text-black px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-mono border border-cyan-400 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        SENDING MESSAGE...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                    className="px-6 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold hover:bg-cyan-400/20 transition-all duration-300 font-mono hover:scale-105"
                      </>
                    )}
                  </button>
                  
                  {submitStatus.type === 'success' && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-bold hover:bg-cyan-400/20 transition-all duration-300 font-mono"
                    >
                      SEND ANOTHER
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};