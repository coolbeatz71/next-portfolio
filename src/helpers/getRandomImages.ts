// Fisher-Yates algorithm to shuffle images and get random images
export function getRandomImages(
    images: { src: string; alt: string }[],
    count: number,
    prevImages: { src: string; alt: string }[] = []
): { src: string; alt: string }[] {
    const prevAlts = new Set(prevImages.map((img) => img.alt));
    const availableImages = images.filter((img) => !prevAlts.has(img.alt));
    const result: { src: string; alt: string }[] = [];

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
