# Ecommerece

E-commerce product catalog with a React/Vite frontend and an Express API.

## Run locally

Start the API:

```sh
cd backend
npm install
node app.js
```

Start the frontend in a second terminal:

```sh
cd frontend
npm install
npm run dev
```

The API serves products at `http://localhost:3000/api/products`.

## Deploy the frontend to Vercel

Import this repository into Vercel and set the project **Root Directory** to
`frontend`. Vercel detects Vite automatically; use `npm run build` as the build
command and `dist` as the output directory. The deployed frontend uses the
Render API at `https://ecommerece-1-0z99.onrender.com` by default. To use a
different API, set `VITE_API_URL` in the Vercel project's environment variables.
