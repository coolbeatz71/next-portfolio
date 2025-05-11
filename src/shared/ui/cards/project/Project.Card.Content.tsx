import type { ProjectByStack } from "@/features/projects/data/projects.tabs";
import { IconArrowUpRight } from "@/shared/config/icons";
import { BadgeSpan } from "@/shared/ui/badge/Badge.Span";
import { LitUpBorderButton } from "@/shared/ui/buttons/LitUpBorder.Button";

export interface ProjectContentProps {
    label: string;
    onClick: () => void;
    project: ProjectByStack;
    translatedDescription: string;
}
export function ProjectCardContent({
    label,
    project,
    onClick,
    translatedDescription
}: ProjectContentProps) {
    return (
        <div className="md:w-1/2 p-4 flex flex-col justify-between">
            <div onClick={onClick} onKeyDown={onClick}>
                <h3 className="cursor-text text-lg font-semibold mb-2 text-slate-700 dark:text-slate-300 transition-colors duration-200">
                    {project.name}
                </h3>
                <p className="cursor-text text-neutral-500 dark:text-neutral-400 mb-4 line-clamp-4 text-[10pt]">
                    {translatedDescription}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                    {project.stack.map((tech) => (
                        <BadgeSpan key={tech} text={tech} />
                    ))}
                </div>
            </div>

            {project.hasLiveLink ? (
                <a
                    target="_blank"
                    href={project.liveLink}
                    rel="noopener noreferrer"
                    className="flex justify-end"
                >
                    <LitUpBorderButton className="w-32 p-[3.5px]">
                        <div className="flex justify-center items-center text-[10pt] font-medium">
                            <IconArrowUpRight className="mr-2 h-3 w-3" />
                            {label}
                        </div>
                    </LitUpBorderButton>
                </a>
            ) : (
                <div className="invisible p-[1.1rem]" />
            )}
        </div>
    );
}
