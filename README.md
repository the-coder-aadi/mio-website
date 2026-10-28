# Modern Institute of Computers – Premium Website
React + Vite + Tailwind CSS. 100% frontend: no backend, DB or paid APIs.

## Run
```
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview
```
## Edit content
Everything lives in **src/data.js** (contact details, courses, MERN page, instructors, projects, video testimonials (paste YouTube IDs), Google reviews, FAQs, jobs, chatbot rules). Anything marked `DUMMY` is placeholder.
Pages are in **src/App.jsx** (small, commented components). Colours/fonts: `tailwind.config.js`, `src/index.css`.

## Notes
- Forms use WhatsApp, email drafts (mailto) and copy-to-clipboard. Browsers cannot auto-attach a resume to a mailto draft — the applicant attaches it manually.
- Uses hash routing (`#/mern`), so it works on any static host (Netlify, Vercel, cPanel, GitHub Pages).
- Dark/light mode toggle in the navbar. Add a `public/favicon` and real photos as needed.
