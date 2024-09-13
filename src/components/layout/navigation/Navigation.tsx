import ThemeToggle from "../../shared/theme-toggle/ThemeToggle";

export const Navigation = (): JSX.Element => {
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex sm:h-24 h-20  items-center justify-between">
                    <div className="inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            <svg
                                className="hidden h-12 w-12"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-center sm:items-stretch sm:justify-start w-full">
                        <div className="flex flex-shrink-0 items-center cursor-pointer">
                            <h1 className="sm:text-3xl text-2xl font-bold text-white">
                                MJV
                            </h1>
                            <h1 className="sm:text-3xl text-2xl font-bold text-red-600">
                                .
                            </h1>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex justify-center w-full">
                            <div className="flex space-x-2">
                                <a
                                    href="#"
                                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                    aria-current="page"
                                >
                                    Introduction
                                </a>
                                <a
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    Contributions
                                </a>
                                <a
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    Experience
                                </a>
                                <a
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    Skills
                                </a>
                                <a
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    Articles
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <ThemeToggle />

                        <div className="relative ml-3" />
                    </div>
                </div>
            </div>
        </nav>
    );
};
