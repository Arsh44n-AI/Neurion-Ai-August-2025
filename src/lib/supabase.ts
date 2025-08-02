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
    persistSession: false, // We don't need session persistence for contact forms
  },
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