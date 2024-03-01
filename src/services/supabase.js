import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ziavilwrrjpptjxbafdf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppYXZpbHdycmpwcHRqeGJhZmRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNTk1OTAsImV4cCI6MjAxNTczNTU5MH0.qdEaE-64D5Q0PesF1XbrcPZQFnGy_l3Y6ZXw6wtQegk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
