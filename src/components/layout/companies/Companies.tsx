import CompaniesGrid from "./Companies.Grid";

export const companyLogoList = [
    {
        title: "Alfatier",
        icon: "bg-logo_alfatier"
    },
    {
        title: "Andela",
        icon: "bg-logo_andela"
    },
    {
        title: "Code of Africa",
        icon: "bg-logo_codeofafrica"
    },
    {
        title: "Exuus",
        icon: "bg-logo_exuus"
    },
    {
        title: "EzyAgric",
        icon: "bg-logo_ezyagric"
    },
    {
        title: "Reconstruction",
        icon: "bg-logo_reconstruction"
    },
    {
        title: "Bestseller",
        icon: "bg-logo_bestseller"
    }
];
export default function Companies(): JSX.Element {
    return (
        <div className="mx-auto max-w-7xl max-h-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 items-center py-12">
                <p className="max-w-xl mb-4 text-1xl tracking-tight !leading-loose md:text-2xl xl:text-2xl text-white dark:text-black">
                    I've collaborated with over 8 companies worldwide, from
                    startups to large organizations, across a wide range of
                    industries and domains.
                </p>

                <div className="hidden xl:flex relative max-w-xl">
                    <CompaniesGrid items={companyLogoList} className="w-full" />
                </div>
            </div>
        </div>
    );
}
