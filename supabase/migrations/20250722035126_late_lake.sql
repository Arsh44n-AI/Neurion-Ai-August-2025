/*
  # Contact Messages Table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key, auto-generated)
      - `created_at` (timestamptz, auto-generated)
      - `first_name` (text, required)
      - `last_name` (text, required)
      - `email` (text, required, valid email format)
      - `phone` (text, optional)
      - `company_name` (text, required)
      - `service_interest` (text, optional)
      - `budget` (text, optional)
      - `project_details` (text, required, minimum 10 characters)

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for public insert access (contact form submissions)
    - Add policy for authenticated admin read access

  3. Indexes
    - Index on created_at for efficient sorting
    - Index on email for duplicate checking
*/

-- Create the contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  first_name text NOT NULL CHECK (length(trim(first_name)) > 0),
  last_name text NOT NULL CHECK (length(trim(last_name)) > 0),
  email text NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone text CHECK (phone IS NULL OR length(trim(phone)) >= 10),
  company_name text NOT NULL CHECK (length(trim(company_name)) > 0),
  service_interest text,
  budget text,
  project_details text NOT NULL CHECK (length(trim(project_details)) >= 10)
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert access (anyone can submit contact forms)
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy for authenticated admin read access
CREATE POLICY "Authenticated users can read contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at 
  ON contact_messages(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_messages_email 
  ON contact_messages(email);

CREATE INDEX IF NOT EXISTS idx_contact_messages_company 
  ON contact_messages(company_name);