export default function BackgroundGradient(): JSX.Element {
    return (
        <div className="fixed z-10 top-[50%] inset-0 grid grid-cols-2 opacity-40 dark:opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-pink-400 dark:from-blue-700" />
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
        </div>
    );
}
