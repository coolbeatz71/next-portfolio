/**
 * English flag icon component.
 *
 * @component
 *
 * @description
 * Renders an inline SVG of the United Kingdom flag (Union Jack),
 * used to represent the English language option in the language switcher.
 *
 * @returns The UK flag SVG element
 */
export const EnglishFlagIcon = () => (
    <svg
        height={40}
        width={60}
        aria-hidden="true"
        viewBox="0 0 60 40"
        xmlns="http://www.w3.org/2000/svg"
    >
        <clipPath id="s">
            <path d="M0,0 v40 h60 v-40 z" />
        </clipPath>
        <clipPath id="t">
            <path d="M30,20 h30 v20 z v20 h-30 z h-30 v-20 z v-20 h30 z" />
        </clipPath>
        <g clipPath="url(#s)">
            <path d="M0,0 v40 h60 v-40 z" fill="#012169" />
            <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,40 M60,0 L0,40" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v40 M0,20 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v40 M0,20 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
    </svg>
);
