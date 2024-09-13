export default {
  "*.{jsx,js,json,css,scss,md,tsx,ts}": "biome check --apply",
  "*.{ts,tsx}": [() => "tsc --skipLibCheck --noEmit"],
};
