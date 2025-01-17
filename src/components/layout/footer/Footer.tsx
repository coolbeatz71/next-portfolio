import Spotlight from "@/components/shared/spotlight/Spotlight";

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-slate-100 dark:bg-slate-700">
            <div className="mx-auto max-w-7xl">
                <Spotlight />
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center py-10">
                    <div className="flex flex-col items-start xl:px-0 px-8">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptate ducimus itaque laborum quas incidunt
                        consequuntur saepe velit corrupti, omnis commodi vitae
                        molestias ea blanditiis perferendis delectus sint
                        eligendi expedita placeat?
                    </div>
                    <div className="flex justify-center relative">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptate ducimus itaque laborum quas incidunt
                        consequuntur saepe velit corrupti, omnis commodi vitae
                        molestias ea blanditiis perferendis delectus sint
                        eligendi expedita placeat?
                    </div>
                </div>
            </div>
            <div className="text-center font-semibold text-sm bg-white dark:bg-slate-900 w-full py-4">
                Design with Tailwind CSS and Love
            </div>
        </footer>
    );
}
