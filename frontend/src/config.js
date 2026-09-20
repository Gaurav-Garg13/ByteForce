// Configurable backend API base URL for development and production (Vercel/Netlify/Render)
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
