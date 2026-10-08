/**
 * Appends an entry count to a tab label when one is provided.
 *
 * @param label - Translated tab label
 * @param count - Number of entries in the tab, omitted for tabs that do not count
 * @returns The label on its own, or the label followed by the count in brackets
 */
export const formatTabLabel = (label: string, count?: number): string => {
    return count === undefined ? label : `${label} (${count})`;
};
