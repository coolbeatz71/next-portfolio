import { Fragment, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Drawer from "../popup/drawer/Drawer";

export default function HamburgerMenuButton(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Fragment>
            <button
                type="button"
                className="relative text-2xl size-10 md:size-12 inline-flex items-center justify-center rounded-lg p-2 dark:text-slate-300 text-slate-700 bg-slate-100 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none"
                aria-controls="mobile-menu"
                onClick={toggleDrawer}
            >
                <MdOutlineMenu />
            </button>

            <Drawer
                title=""
                isOpen={isOpen}
                position="left"
                onToggle={toggleDrawer}
                className="w-[80%]"
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet ducimus quod unde eligendi voluptatibus, at tenetur!
                Magni ab repellendus tempora est necessitatibus veniam vitae
                corrupti ipsa non ipsum. Expedita, quidem.
            </Drawer>
        </Fragment>
    );
}
