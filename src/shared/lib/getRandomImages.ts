import type { AboutMeImage } from "@/features/about/data/about.images";

// Fisher-Yates algorithm to shuffle images and get random images
export function getRandomImages(
    images: AboutMeImage[],
    count: number,
    prevImages: AboutMeImage[] = []
): AboutMeImage[] {
    const prevAlts = new Set(prevImages.map((img) => img.alt));
    const availableImages = images.filter((img) => !prevAlts.has(img.alt));
    const result: AboutMeImage[] = [];

    for (let i = availableImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableImages[i], availableImages[j]] = [
            availableImages[j],
            availableImages[i]
        ];
    }

    result.push(...availableImages.slice(0, count));
    if (result.length < count) {
        result.push(
            ...images
                .filter((img) => !result.some((r) => r.alt === img.alt))
                .slice(0, count - result.length)
        );
    }

    return result;
}
