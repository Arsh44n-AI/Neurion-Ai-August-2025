/**
 * Supabase Client Configuration
 * 
 * This module initializes and exports the Supabase client for database operations.
 * It uses environment variables for secure configuration.
 */

import { createClient } from '@supabase/supabase-js';

// Supabase configuration from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check your .env file and ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.'
  );
}

/**
 * Supabase client instance
 * Configured with URL and anonymous key for public access
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  },
  db: {
    schema: 'public'
  },
  global: {
    headers: {
      'X-Client-Info': 'neurion-ai-contact-form'
    }
  }
});

/**
 * TypeScript interface for contact message data
 * Matches the database schema for type safety
 */
export interface ContactMessage {
  id?: string;
  created_at?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  company_name: string;
  service_interest?: string;
  budget?: string;
  project_details: string;
}

/**
 * Contact form submission result interface
 * Used for handling API responses
 */
export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  data?: ContactMessage;
  error?: string;
}

/**
 * Test Supabase connection
 * @returns Promise<boolean> - True if connection is successful
 */
export const testSupabaseConnection = async (): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('count', { count: 'exact', head: true });
    
    if (error) {
      console.error('Supabase connection test failed:', error);
      return false;
    }
    
    console.log('Supabase connection successful');
    return true;
  } catch (error) {
    console.error('Supabase connection error:', error);
    return false;
  }
};

/**
 * Submit contact form data to Supabase
 * @param contactData - The contact form data to submit
 * @returns Promise<ContactSubmissionResult> - Result of the submission
 */
export const submitContactForm = async (
  contactData: Omit<ContactMessage, 'id' | 'created_at'>
): Promise<ContactSubmissionResult> => {
  try {
    console.log('Submitting contact form data:', contactData);
    
    // Insert data into Supabase
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([contactData])
      .select()
      .single();

    if (error) {
      console.error('Supabase insertion error:', error);
      
      // Handle specific database errors
      if (error.code === '23505') {
        return {
          success: false,
          message: 'A message with this email has already been submitted recently.',
          error: error.message,
        };
      }
      
      if (error.code === '42501') {
        return {
          success: false,
          message: 'Permission denied. Please check your database policies.',
          error: error.message,
        };
      }
      
      return {
        success: false,
        message: 'Failed to submit your message. Please try again later.',
        error: error.message,
      };
    }

    console.log('Contact form submitted successfully:', data);
    
    return {
      success: true,
      message: 'Thank you! Your message has been submitted successfully. We\'ll get back to you within 24 hours.',
      data: data as ContactMessage,
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};