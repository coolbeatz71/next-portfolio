import { Timeline } from "@/components/shared/timeline/Timeline";

export default function Experiences(): JSX.Element {
    const experienceTimeline = [
        {
            title: "Senior Frontend Engineer",
            subtitle: "BESTSELLER A/S - Denmark - Nov 2023 - Present",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Built and launched Aceternity UI and Aceternity UI Pro
                        from scratch
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Cupiditate, voluptatum officiis. Nesciunt porro
                        voluptatum alias animi vitae, neque error veritatis
                        quis, quia impedit, temporibus facilis consectetur
                        voluptates hic tenetur voluptatem.
                    </div>
                </div>
            )
        },
        {
            title: "ServiceNow Developer",
            subtitle: "BESTSELLER A/S - Denmark - Nov 2022 - Dec 2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I usually run out of copy, but when I see content this
                        big, I try to integrate lorem ipsum.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum is for people who are too lazy to write
                        copy. But we are not. Here are some more example of
                        beautiful designs I built.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nobis, recusandae odio. Commodi recusandae odit
                        vel, accusamus ipsum, quidem, architecto voluptate rem
                        qui totam fugit itaque repellendus numquam tempore
                        deleniti quam?
                    </div>
                </div>
            )
        },
        {
            title: "Senior Software Engineer",
            subtitle: "CODE OF AFRICA LTD - Rwanda - June 2021 - Aug 2022",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Deployed 5 new components on Aceternity today
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Card grid component
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Startup template Aceternity
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Random file upload lol
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Himesh Reshammiya Music CD
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Salman Bhai Fan Club registrations open
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime ab harum commodi quos, sunt a qui rerum
                        consectetur quisquam eveniet distinctio culpa
                        necessitatibus dolore nobis aspernatur eligendi possimus
                        velit repellat!
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="mx-auto max-w-7xl max-h-7xl">
            <Timeline data={experienceTimeline} />
        </div>
    );
}
