import { useEffect, useState } from "react";
import closeIcon from "./images/icon-close.svg";
import menuIcon from "./images/icon-menu.svg";
import { useMediaQuery } from "react-responsive";

export function Menu() {
    const [menuVisibility, setMenuVisibility] = useState(false);
    const isLgScreen = useMediaQuery({ query: '(min-width: 1028px)' });
    useEffect(() => {
        document.body.style.overflowY = (menuVisibility && !isLgScreen) ? "hidden" : "auto";
    });
    return (
        <div>
            <button className="lg:hidden" onClick={() => setMenuVisibility(true)}>
                <img
                    src={menuIcon}
                    alt="Open navigation menu" />
            </button>
            <NavBar onExit={() => setMenuVisibility(false)} menuVisibility={menuVisibility && !isLgScreen}></NavBar>
        </div>
    );
}
function NavBar(props) {
    return (
        <>
            <nav
                className={`overflow-y-auto py-24 px-6 w-64 h-full gap-6 flex flex-col bg-white transition-all fixed z-20 top-0 ${props.menuVisibility ? "left-0" : "-left-full invisible"}
                lg:static lg:visible lg:flex-row lg:w-auto lg:p-0 lg:transition-none lg:text-secondary-400 lg:items-center lg:overflow-y-hidden`}>
                <button className="lg:hidden absolute top-6 left-6"
                    onClick={props.onExit}>
                    <img
                        src={closeIcon}
                        alt="Close navigation menu" />
                </button>
                <NavElement href="/Collection">Collection</NavElement>
                <NavElement href="/Men">Men</NavElement>
                <NavElement href="/Women">Women</NavElement>
                <NavElement href="/About">About</NavElement>
                <NavElement href="/Contact">Contact</NavElement>
            </nav>
            {props.menuVisibility && <div
                tabIndex={0}
                className="fixed inset-0 z-10 bg-black/75"
                onFocus={props.onExit}>
            </div>}
        </>
    );
}
function NavElement(props) {
    return (
        <a className="font-bold text-xl text-secondary-90" href={props.href}>{props.children}</a>
    );
}
