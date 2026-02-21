/**
 * Formats a number into a compact, human-readable string with a trailing `+`.
 *
 * @param value - The numeric value to format
 * @returns A compact string representation of the value, e.g. `"1.5k+"` or `"150+"`
 */
export const formatCount = (value: number): string => {
    return (
        Intl.NumberFormat("en", {
            notation: "compact",
            maximumFractionDigits: 2
        }).format(value) + "+"
    );
};
