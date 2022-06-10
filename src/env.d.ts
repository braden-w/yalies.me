interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_GOOGLE_MAP_KEY: string;
  readonly VITE_GOOGLE_MAP_KEY_SERVER: string;
  readonly VITE_MAPBOX_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
