import Spotlight from "@/components/shared/spotlight/Spotlight";
import FooterContact from "./Footer.Contact";

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-slate-100 dark:bg-slate-700 relative">
            <div className="mx-auto max-w-7xl relative bottom-0">
                <Spotlight />
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center py-24 gap-12">
                    <div className="flex flex-col items-start xl:px-0 px-8">
                        <FooterContact />
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
            <div className="bg-white dark:bg-slate-800 w-full py-4 relative bottom-0">
                <p className="text-sm text-center">
                    <span className="font-semibold">
                        &copy; {new Date().getFullYear()} Mutombo Jean-Vincent.
                    </span>{" "}
                    All Rights Reserved.
                    <span className="font-light">
                        {" "}
                        Designed with Love{" "}
                        <span className="text-pink-500">&hearts;</span> and{" "}
                        <a
                            href="https://tailwindcss.com"
                            className="text-indigo-500 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tailwind CSS
                        </a>
                        .
                    </span>
                </p>
            </div>
        </footer>
    );
}
