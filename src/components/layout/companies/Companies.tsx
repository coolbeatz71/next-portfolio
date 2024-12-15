import CompaniesGrid from "./Companies.Grid";

export const companyLogoList = [
    {
        title: "Andela",
        icon: "bg-logo_andela_light dark:bg-logo_andela_dark"
    },
    {
        title: "EzyAgric",
        icon: "bg-logo_ezyagric"
    },
    {
        title: "Exuus",
        icon: "bg-logo_exuus_light dark:bg-logo_exuus_dark"
    },
    {
        title: "Alfatier",
        icon: "bg-logo_alfatier_light dark:bg-logo_alfatier_dark"
    },
    {
        title: "Code of Africa",
        icon: "bg-logo_codeofafrica_light dark:bg-logo_codeofafrica_dark"
    },
    {
        title: "Reconstruction",
        icon: "bg-logo_reconstruction_light dark:bg-logo_reconstruction_dark"
    },
    {
        title: "The Room",
        icon: "bg-logo_theroom_light dark:bg-logo_theroom_dark"
    },
    {
        title: "Bestseller",
        icon: "bg-logo_bestseller_light dark:bg-logo_bestseller_dark"
    }
];
export default function Companies(): JSX.Element {
    return (
        <div className="mx-auto max-w-7xl max-h-7xl">
            <div className="grid grid-cols-1 xl:grid-cols-[2fr,3fr] items-center py-10">
                <div>
                    <h2 className="mb-4 text-2xl font-bold tracking-tight !leading-tight md:text-2xl xl:text-4xl text-slate-700 dark:text-slate-300">
                        Collaborated with amazing organizations worldwide
                    </h2>
                    <p className="text-lg text-gray-500 !leading-8">
                        Over the last 7 years, from startups to large
                        organizations, across a wide range of industries and
                        domains.
                    </p>
                </div>

                <div className="hidden xl:flex relative max-w-3xl z-10">
                    <CompaniesGrid items={companyLogoList} className="w-full" />
                </div>
            </div>
        </div>
    );
}
