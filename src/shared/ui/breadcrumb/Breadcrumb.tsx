import { IconArrowRight } from "@/shared/config/icons";
import type { BreadcrumbProps } from "./types";

/**
 * Breadcrumb navigation component.
 *
 * @component
 *
 * @description
 * Renders an ordered list of breadcrumb labels separated by arrow icons.
 *
 * @param {BreadcrumbProps} props - Component props
 * @param {string[]} props.labels - Ordered list of breadcrumb label strings
 *
 * @returns The breadcrumb navigation element
 */
export function Breadcrumb({ labels }: BreadcrumbProps) {
    return (
        <div className="flex pb-6" aria-label="breadcrumb">
            <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse">
                {labels.map((label, i) => (
                    <li key={label}>
                        <div className="flex items-center">
                            {i > 0 && (
                                <IconArrowRight className="rtl:rotate-180 text-xl text-slate-300 dark:text-slate-600 mr-1" />
                            )}
                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                {label}
                            </span>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}
