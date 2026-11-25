// The spine (cc3po-ops Supabase). The anon key is public by design — it
// ships in page source across the fleet; the stories_intake table's RLS
// policy (anon INSERT only, no SELECT grant) does the protecting.
// Same pattern as academy.cc3po.com's academy.mjs and music's spine.ts.
export const spine = {
  url: 'https://cdrcgmdvepxwsbqaifxv.supabase.co',
  anonKey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkcmNnbWR2ZXB4d3NicWFpZnh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MDY4MDksImV4cCI6MjA4OTA4MjgwOX0.pKWLWvsSimTOMkpaXKKrLJESrQEMUayUU1c9ANzr1Dc',
};
