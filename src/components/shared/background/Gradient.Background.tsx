export default function BackgroundGradient(): JSX.Element {
    return (
        <div className="fixed z-0 top-[50%] inset-0 grid grid-cols-2 opacity-10">
            <div className="blur-[106px] h-56 bg-pink-500" />
            <div className="blur-[106px] h-56 bg-sky-500" />
        </div>
    );
}
