/// <reference types="vite/client" />

// Support for imagetools query parameters
declare module "*.png?format=webp" {
  const src: string;
  export default src;
}

declare module "*.png?format=webp&w=364" {
  const src: string;
  export default src;
}

declare module "*.jpg?format=webp" {
  const src: string;
  export default src;
}

declare module "*.jpg?format=webp&w=*" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string | { src: string; width?: number; height?: number };
  export default src;
}

declare module "*.jpg" {
  const src: string | { src: string; width?: number; height?: number };
  export default src;
}

declare module "*.jpeg" {
  const src: string | { src: string; width?: number; height?: number };
  export default src;
}

declare module "*.webp" {
  const src: string | { src: string; width?: number; height?: number };
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
