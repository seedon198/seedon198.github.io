# Site Archive (2024–2025)

This markdown preserves key details and copy from the previous site to reference while rebuilding for Seasides 2026 (Feb 19–21, 2026).

## Event Context (Old)
- Seasides Conference at International Center Goa
- Dates referenced: 20–22 Feb 2025
- Special event: "Badge Quest 2025" (CTF + scavenger hunt)

## Top-Level Pages and Highlights

### index.html
- Title: "Hardware - 101"
- Nav: Tools (Embedded, Satellite, Web Application), Team, Schedule, Swag, Blog, Discord
- Hero title: HARDWARE HACKING VILLAGE
- Date text: Seasides Conference, International Center Goa | 20 - 22 Feb 2025
- Countdown timer elements to day/hour/minute/second
- Event highlight: Badge Quest 2025
  - Date: 20–22 FEB 2025, Time: 11:00 IST, Location: Hardware Hacking Village
  - CTA (external): hexguard.net
- Villages grid (cards): Flipper Zero, Badge, HAM, Digital Forensics, WiFi, ICS, Drone, Lock Picking, Soldering
- Buttons: Join Us (Google Form), Sponsor Us (PDF `static/media/pdf/SeasidesSponsorship_2025.pdf`)
- Welcome modal (auto-shown once per session) repeating Badge Quest info
- Music player widget (shared across pages)

### team.html
- Title: Team - Hardware Hacking Village
- About grid: Mission, Community, Vision
- Team grid populated via `static/js/team.js`

### schedule.html
- Title: Schedule - Hardware Hacking Village
- Copy: Notifications and hour-by-hour itinerary
- Day columns:
  - Day 1 - 20 Feb 2025
  - Day 2 - 21 Feb 2025
  - Day 3 - 22 Feb 2025
- Village floor plan section (map placeholder)

### swag.html
- Title: Swag - Hardware Hacking Village
- Copy: Exclusive stickers and collectibles via challenges
- Grid populated via `static/js/swag.js`

### blog.html
- Title: Blog - Hardware Hacking Village
- Copy: Cybersecurity and technology insights, search, categories, pagination
- Uses Marked/Prism/Markdown-it/DOMPurify for rendering

## Tools Pages
- Embedded: `tools/hw/serial_terminal.html`, `tools/hw/baud_fuzz.html`, `tools/hw/flipper_flash.html`
- Satellite: `tools/hw/tiny_gs.html`
- Web: `tools/web/cfp_explorer.html`

## Assets to Keep
- Favicon: `favicon.ico`
- Domain config: `CNAME`
- GitHub Pages config: `_config.yml`
- People images: `static/media/mugshots/` (team avatars)

## PDFs (Old)
- `static/media/pdf/SeasidesSponsorship_2025.pdf`
- `static/media/pdf/Lockpicking_Flipbook.pdf`

## Blog Markdown Inventory (Old)
Located under `static/md/` (topics include village content and reference material):
- `advanced_lockpicking.md`
- `ai.md`
- `flip.md`
- `flipper-zero.md`
- `HACKRF.md`
- `ham.md`
- `Momentum-Firmware.md`
- `psy.md`
- `scada.md`
- `secwifi.md`
- `social.md`
- `thickclient.md`
- `wifi.md`

## Media Inventory (Old, representative)
- `static/media/img/`: category thumbnails (advanced-lockpicking, ai, flip, flipper, ham, news, psy, scada, secwifi, social, thick-client, wifi)
- `static/media/blogs/`: screenshots and illustrations for posts (ai, flip, FLIPPER ZERO, hamradio, Momentum Firmware, psychology, social, wifisec)
- `static/media/stickers/`: sticker images for swag
- `static/media/playlist/`: mp3 tracks used by the music player
- `static/media/icons/`: browser icons
- `static/media/discord.svg`: social icon

## Shared JS/CSS (Old)
- CSS: `static/css/styles.css` plus page-specific CSS (`team.css`, `swag.css`, `schedule.css`, `blog.css`, etc.)
- JS: `static/js/scripts.js`, `musicPlayer.js` and page-specific scripts (`team.js`, `swag.js`, `schedule.js`, `map.js`)

## Notes for 2026 Rebuild
- New event dates: Feb 19–21, 2026
- New brand and copy required; keep only team mugshots and favicon for now
- One-page design; we will reintroduce content sections as needed (schedule, team, sponsors, location, contact)


