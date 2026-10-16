// Build-time renderer used by scripts/prerender.mjs (never shipped to browsers).
/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { prerenderToNodeStream } from 'react-dom/static'
import { StaticRouter } from 'react-router'
import App from './App.jsx'

export { routes, NOT_FOUND, renderHeadTags, SITE_URL } from './seo/routes.js'

export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  )
  let html = ''
  for await (const chunk of prelude) html += chunk
  return html
}
