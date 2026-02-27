import { OG_IMAGE, SITE_DESCRIPTION, SITE_URL } from "./seo";

export const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    gender: "Male",
    name: "Mutombo Jean-Vincent",
    alternateName: "Jean-Vincent Mutombo",
    url: SITE_URL,
    image: OG_IMAGE,
    nationality: "D.R Congo",
    jobTitle: "Full-Stack & Mobile Engineer",
    description: SITE_DESCRIPTION,
    sameAs: [
        "https://github.com/coolbeatz71/",
        "https://www.linkedin.com/in/mutombo-jv/",
        "https://medium.com/@sigmacool",
        "https://www.youtube.com/@sigmacoolbeatz",
        "https://www.instagram.com/glodymutomboriy/"
    ]
};
