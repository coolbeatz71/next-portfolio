import FlipWords from "../../shared/filp-words/FlipWords";

export default function Hero(): JSX.Element {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 py-24">
                <div className="flex flex-col items-start xl:px-0 px-8">
                    <h1 className="max-w-xl mb-4 text-2xl font-bold tracking-tight !leading-loose md:text-3xl xl:text-3xl text-white dark:text-black">
                        Hi 👋🏽, <br />
                        <span className="xl:text-4xl">I am Jean-Vincent </span>
                        <br />
                        <FlipWords
                            words={[
                                "Software Engineer",
                                "Frontend Engineer",
                                "Mobile Engineer"
                            ]}
                            className="pl-0 text-indigo-500 dark:text-indigo-500 xl:text-5xl"
                        />
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-md lg:text-md dark:text-gray-200">
                        FullStack - PREN/MEAN - PHP/Laravel - Dart/Flutter
                    </p>
                </div>
                <div className="hidden xl:block w-full h-full relative"></div>
            </div>
        </div>
    );
}
