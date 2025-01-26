
// fetchBaseQuery options
export const baseQueryOptions = {
  baseUrl: import.meta.env.VITE_BASE_URL,
  headers: { Authorization: `Bearer ${import.meta.env.VITE_BEAR_TOKEN}` },
};
