export default {
    "*.{jsx,js,json,css,scss,tsx,ts}": "biome check --write",
    "*.{ts,tsx}": [() => "tsc --skipLibCheck --noEmit"]
};
