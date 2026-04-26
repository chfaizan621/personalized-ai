# Personalized AI

React + Vite starter for a job-search assistant that can compare CVs, match roles, and prepare tailored application materials with OpenAI-backed services.

## What is here

- A React landing page that frames the product direction.
- A reusable OpenAI service wrapper in `src/lib/openai.ts`.
- A clean environment example in `.env.example`.

## Getting started

```bash
npm install
npm run dev
```

## Build checks

```bash
npm run lint
npm run build
```

## OpenAI integration note

The frontend is prepared to call a backend API at `VITE_API_BASE_URL`. Keep model keys on the server and proxy requests through your own API before connecting the UI to OpenAI.

## Next steps

1. Add CV upload and profile forms.
2. Build the backend route that talks to OpenAI.
3. Add job scraping or job board API integration.
4. Connect authentication and user storage.
