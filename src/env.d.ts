/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly SITE_URL?: string;
  readonly BASE_PATH?: string;
  // Add any custom environment variables here
}

// Module declarations for image imports
declare module "*.png" {
  const value: string | { src: string };
  export default value;
}

declare module "*.jpg" {
  const value: string | { src: string };
  export default value;
}

declare module "*.jpeg" {
  const value: string | { src: string };
  export default value;
}

declare module "*.webp" {
  const value: string | { src: string };
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

// Declare modules with query parameters for vite-imagetools
declare module "*?format=webp&w=445" {
  const value: string | { src: string };
  export default value;
}

declare module "*?format=webp&w=364" {
  const value: string | { src: string };
  export default value;
}

declare module "*?format=webp&w=768" {
  const value: string | { src: string };
  export default value;
}

declare module "*?format=webp&w=1920" {
  const value: string | { src: string };
  export default value;
}
