/* Paste your two Supabase values here (Supabase > Project Settings > API Keys).
   The publishable / anon key is meant to be public, so it is fine in this file.
   NEVER paste the "secret" or "service_role" key here.
   Leave both empty and the app still works, but each phone keeps its own data. */
window.VSD_CONFIG = {
  supabaseUrl: 'https://hwpbrrfyerzdhowersnt.supabase.co',   // e.g. 'https://abcdefghijklmnop.supabase.co'
  supabaseKey: 'sb_publishable_n7jRq55oUHuSBzLa_-V4NA_XYw-bQkT',   // starts with 'sb_publishable_' (or a long 'eyJ...' legacy anon key)
  room: 'demo'       // phones on the same room share one demo; add ?room=pilot1 to the link for another
};
