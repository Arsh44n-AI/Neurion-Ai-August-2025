@@ .. @@
 ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
 
+-- Drop existing insert policy if it exists
+DROP POLICY IF EXISTS "Users can insert contact messages" ON contact_messages;
+DROP POLICY IF EXISTS "Anyone can submit contact messages" ON contact_messages;
+
 -- Create policy to allow anyone to submit contact messages
 CREATE POLICY "Anyone can submit contact messages"
   ON contact_messages
   FOR INSERT
   TO anon
   WITH CHECK (true);