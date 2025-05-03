import NextLink from "next/link";

export function Logo(): JSX.Element {
    return (
        <NextLink href="">
            <div className="flex flex-shrink-0 items-center cursor-pointer">
                <h1 className="text-3xl font-bold dark:text-white text-black">
                    MJV
                </h1>
                <span className="text-3xl font-bold text-indigo-600">.</span>
            </div>
        </NextLink>
    );
}
