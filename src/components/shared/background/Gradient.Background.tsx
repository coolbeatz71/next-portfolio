export default function BackgroundGradient(): JSX.Element {
    return (
        <div className="fixed z-0 top-[50%] inset-0 grid grid-cols-2 opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-rose-500 to-pink-300" />
            <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-500 to-sky-300" />
        </div>
    );
}
