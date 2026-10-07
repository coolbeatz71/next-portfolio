/**
 * Architecture labels that may appear in a project stack.
 *
 * @description
 * These are hidden on the project card, where the stack column is narrow and a single
 * long label can cost a whole line. The case study modal still shows the full stack.
 */
export const ARCHITECTURE_STACK: ReadonlySet<string> = new Set([
    "Clean Architecture",
    "Modular Monolith",
    "CQRS"
]);

/**
 * Maximum number of stack badges a project card renders before the remainder
 * collapses into a counter.
 */
export const CARD_STACK_LIMIT = 6;
