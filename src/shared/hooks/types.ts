import type { RefObject } from "react";

/**
 * @interface IUseScrollRevealType
 * @property {boolean} isVisible - Whether the element is currently in the viewport
 * @property {RefObject<HTMLDivElement | null>} ref - Attach to the target element
 */
export interface IUseScrollRevealType {
    isVisible: boolean;
    ref: RefObject<HTMLDivElement | null>;
}
