export default {
    '*.{jsx,js,json,css,scss,md,tsx,ts}': 'prettier --write',
    '*.{ts,tsx}': [() => 'tsc --skipLibCheck --noEmit'],
    '*.{js,jsx,ts,tsx}': ['eslint --fix'],
};
