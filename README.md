# Venue Seat Delivery prototype

Installable web app (PWA) with four views: customer, vendor, runner, venue.
Hosted free on GitHub Pages; shared live data in a free Supabase database.

## Roles
| Role | Sees |
|---|---|
| admin | all four views, demo tools, can act as any store or runner |
| manager | venue view (figures, activity, history) |
| vendor | vendor view, locked to their store |
| runner | runner view, locked to their runner number |
| customer | customer ordering view |

Several logins can stay signed in on one phone; tap your name at the top to switch (testing shortcut).

## Files
- `index.html` the app
- `config.js` your Supabase URL + publishable key go here
- `supabase/schema.sql` run once in the Supabase SQL Editor (tables, roles, security)
- `supabase/users.sql` gives each login its role; run after creating the users
- `sw.js`, `manifest.webmanifest`, `icons/` make it installable and work offline
- `vendor/supabase.js` Supabase client library (v2.118.0), kept in the repo so no CDN is needed

## Setup
1. Supabase: run `supabase/schema.sql` in SQL Editor. Create the users (Authentication > Users > Add user, Auto Confirm ticked), then run `supabase/users.sql`. Turn off public sign-ups. Copy the Project URL and publishable key into `config.js`.
2. GitHub: create a public repo, upload everything in this folder (including `.nojekyll`), then Settings > Pages > Deploy from a branch > `main` / `(root)`.
3. Open `https://<username>.github.io/<repo>/` on your phone and add it to the home screen.

## Good to know
- Phones on the same room share one demo. Use `?room=anything` in the link for a separate one.
- "Reset demo data" in the venue view resets the shared room for everyone in it.
- After uploading changes, bump `CACHE` in `sw.js` (vsd-v1 -> vsd-v2) so installed copies refresh.
- Free Supabase projects pause after about a week without use; press "Resume project" in the dashboard.
- Only signed-in users with a role can read or change data. Within the demo, all roles still share one data record, so a technical user could read more than their screen shows; real per-role data rules come with the move to proper tables.
