import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Local dev middleware for /api endpoints
function apiDevServerPlugin() {
  return {
    name: 'api-dev-server',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url === '/api/contact' || url === '/api/download') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              req.body = body ? JSON.parse(body) : {};
            } catch {
              req.body = {};
            }

            res.json = (data) => {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
            };
            res.status = (code) => {
              res.statusCode = code;
              return res;
            };

            try {
              if (url === '/api/contact') {
                const { default: handler } = await import('./api/contact.js');
                await handler(req, res);
              } else if (url === '/api/download') {
                const { default: handler } = await import('./api/download.js');
                await handler(req, res);
              }
            } catch (err) {
              console.error('Local API dev handler error:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Expose env vars to process.env during local dev
  Object.assign(process.env, env);

  return {
    plugins: [react(), apiDevServerPlugin()],
    assetsInclude: ['**/*.pdf'],
  };
})

