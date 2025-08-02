/**
 * Custom React Hook for Contact Form Management
 * 
 * This hook provides comprehensive form state management, validation,
 * and Supabase integration for the contact form component.
 */

import { useState, useCallback } from 'react';
import { supabase, ContactMessage, ContactSubmissionResult } from '../lib/supabase';

/**
 * Form validation errors interface
 */
interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  company_name?: string;
  project_details?: string;
}

/**
 * Form state interface
 */
interface FormState {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company_name: string;
  service_interest: string;
  budget: string;
  project_details: string;
}

/**
 * Initial form state
 */
const initialFormState: FormState = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  company_name: '',
  service_interest: '',
  budget: '',
  project_details: '',
};

/**
 * Email validation regex pattern
 */
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

/**
 * Phone validation regex pattern (flexible international format)
 */
const PHONE_REGEX = /^[\+]?[1-9][\d]{0,15}$/;

/**
 * Custom hook for contact form management
 */
export const useContactForm = () => {
  // Form state management
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  /**
   * Input sanitization function
   * Removes potentially harmful characters and trims whitespace
   */
  const sanitizeInput = useCallback((input: string): string => {
    return input
      .trim()
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
      .replace(/[<>]/g, ''); // Remove angle brackets
  }, []);

  /**
   * Comprehensive form validation function
   * Returns true if form is valid, false otherwise
   */
  const validateForm = useCallback((data: FormState): boolean => {
    const newErrors: FormErrors = {};

    // Required field validations
    if (!data.first_name.trim()) {
      newErrors.first_name = 'First name is required';
    } else if (data.first_name.trim().length < 2) {
      newErrors.first_name = 'First name must be at least 2 characters';
    }

    if (!data.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
    } else if (data.last_name.trim().length < 2) {
      newErrors.last_name = 'Last name must be at least 2 characters';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!EMAIL_REGEX.test(data.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!data.company_name.trim()) {
      newErrors.company_name = 'Company name is required';
    } else if (data.company_name.trim().length < 2) {
      newErrors.company_name = 'Company name must be at least 2 characters';
    }

    if (!data.project_details.trim()) {
      newErrors.project_details = 'Project details are required';
    } else if (data.project_details.trim().length < 10) {
      newErrors.project_details = 'Project details must be at least 10 characters';
    }

    // Optional field validations
    if (data.phone.trim() && !PHONE_REGEX.test(data.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, []);

  /**
   * Handle input changes with real-time validation
   */
  const handleInputChange = useCallback((
    field: keyof FormState,
    value: string
  ) => {
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [field]: sanitizedValue
    }));

    // Clear field-specific error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }

    // Clear submit status when user makes changes
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  }, [sanitizeInput, errors, submitStatus.type]);

  /**
   * Submit form data to Supabase
   */
  const submitForm = useCallback(async (): Promise<ContactSubmissionResult> => {
    try {
      // Validate form before submission
      if (!validateForm(formData)) {
        return {
          success: false,
          message: 'Please correct the errors above and try again.',
        };
      }

      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: '' });

      // Prepare data for database insertion
      const contactData: Omit<ContactMessage, 'id' | 'created_at'> = {
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim() || null,
        company_name: formData.company_name.trim(),
        service_interest: formData.service_interest.trim() || null,
        budget: formData.budget.trim() || null,
        project_details: formData.project_details.trim(),
      };

      // Insert data into Supabase
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([contactData])
        .select()
        .single();

      if (error) {
        console.error('Supabase insertion error:', error);
        
        // Handle specific database errors
        if (error.code === '23505') { // Unique constraint violation
          return {
            success: false,
            message: 'A message with this email has already been submitted recently.',
            error: error.message,
          };
        }
        
        return {
          success: false,
          message: 'Failed to submit your message. Please try again later.',
          error: error.message,
        };
      }

      // Success - reset form and show success message
      setFormData(initialFormState);
      setErrors({});
      
      return {
        success: true,
        message: 'Thank you! Your message has been submitted successfully. We\'ll get back to you within 24 hours.',
        data: data as ContactMessage,
      };

    } catch (error) {
      console.error('Form submission error:', error);
      return {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  /**
   * Handle form submission with user feedback
   */
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await submitForm();
    
    setSubmitStatus({
      type: result.success ? 'success' : 'error',
      message: result.message,
    });

    // Auto-clear success message after 5 seconds
    if (result.success) {
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    }
  }, [submitForm]);

  /**
   * Reset form to initial state
   */
  const resetForm = useCallback(() => {
    setFormData(initialFormState);
    setErrors({});
    setSubmitStatus({ type: null, message: '' });
  }, []);

  return {
    // Form state
    formData,
    errors,
    isSubmitting,
    submitStatus,
    
    // Form actions
    handleInputChange,
    handleSubmit,
    resetForm,
    validateForm: () => validateForm(formData),
  };
};