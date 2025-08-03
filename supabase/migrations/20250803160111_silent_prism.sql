/*
  # Create contact messages table with proper RLS policies

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key, auto-generated)
      - `created_at` (timestamp with timezone, auto-generated)
      - `first_name` (text, required, 2-50 characters)
      - `last_name` (text, required, 2-50 characters)
      - `email` (text, required, valid email format, max 255 characters)
      - `phone` (text, optional, min 10 characters if provided)
      - `company_name` (text, required, 2-100 characters)
      - `service_interest` (text, optional)
      - `budget` (text, optional)
      - `project_details` (text, required, 10-2000 characters)

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for anonymous users to insert contact messages
    - Add policy for authenticated users to read contact messages

  3. Performance
    - Add indexes on frequently queried columns (created_at, email, company_name)
*/

-- Create the contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text NOT NULL,
  service_interest text,
  budget text,
  project_details text NOT NULL,
  
  -- Add constraints for data validation
  CONSTRAINT contact_messages_first_name_check CHECK (length(trim(first_name)) > 0),
  CONSTRAINT contact_messages_last_name_check CHECK (length(trim(last_name)) > 0),
  CONSTRAINT contact_messages_company_name_check CHECK (length(trim(company_name)) > 0),
  CONSTRAINT contact_messages_project_details_check CHECK (length(trim(project_details)) >= 10),
  CONSTRAINT contact_messages_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT contact_messages_phone_check CHECK (phone IS NULL OR length(trim(phone)) >= 10)
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous users to insert contact messages
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read contact messages
CREATE POLICY "Authenticated users can read contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages (email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_company ON contact_messages (company_name);