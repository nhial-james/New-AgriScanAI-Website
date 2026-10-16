import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// All stylesheets load up front, in this exact order, as one CSS file
// (build.cssCodeSplit=false). EventDetail.css contains Tailwind's global
// preflight reset that every page has always relied on, so route code-splitting
// must not move it into the event-page chunks.
import './index.css'
import './Home.css'
import './About.css'
import './PilotProgram.css'
import './Solutions.css'
import './Events.css'
import './Contact.css'
import './LegalPages.css'
import './EventDetail.css'
import App from './App.jsx'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are prerendered (scripts/prerender.mjs), so hydrate them;
// the dev server serves an empty #root, so render from scratch there.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
