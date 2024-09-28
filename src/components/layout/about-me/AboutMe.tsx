import AboutMeImages from "@/components/layout/about-me/AboutMe.Images";
import SmoothScroll from "@/components/shared/smooth-scroll/SmoothScroll";

export default function AboutMe(): JSX.Element {
    return (
        <div className="mx-auto max-w-7xl max-h-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-[3fr,2fr] items-center py-12">
                <div className="flex flex-col w-full items-center justify-center">
                    <SmoothScroll>
                        <AboutMeImages />
                    </SmoothScroll>
                </div>
                <div className="hidden xl:flex relative max-w-3xl"></div>
            </div>
        </div>
    );
}
