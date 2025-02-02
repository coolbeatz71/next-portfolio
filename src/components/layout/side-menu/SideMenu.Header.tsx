import Logo from "@/components/shared/logo/Logo";

export default function SideMenuHeader(): JSX.Element {
    return (
        <div className="flex items-center justify-between mb-4 w-[90%]">
            <Logo />
        </div>
    );
}
