/**
 * @interface IAboutMeImage
 * @property {string} src - Relative path to the image file
 * @property {string} alt - Alt text describing the image content
 * @property {string} blurData - Base64-encoded WebP blur placeholder for `next/image`
 */
export interface IAboutMeImage {
    src: string;
    alt: string;
    blurData: string;
}
