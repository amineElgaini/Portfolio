import React, { useEffect, useRef } from "react";

type NavbarProps = { navOpen: boolean };

function Navbar({ navOpen }: NavbarProps) {
    const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
    const activeBox = useRef<HTMLDivElement | null>(null);

    const initActiveBox = () => {
        if (lastActiveLink.current && activeBox.current) {
            activeBox.current.style.top =
                lastActiveLink.current.offsetTop + "px";
            activeBox.current.style.left =
                lastActiveLink.current.offsetLeft + "px";
            activeBox.current.style.width =
                lastActiveLink.current.offsetWidth + "px";
            activeBox.current.style.height =
                lastActiveLink.current.offsetHeight + "px";
        }
    };

    useEffect(initActiveBox, []);
    window.addEventListener("resize", initActiveBox);

    const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (lastActiveLink.current) {
            lastActiveLink.current.classList.remove("active");
        }
        event.currentTarget.classList.add("active");
        lastActiveLink.current = event.currentTarget;

        if (activeBox.current) {
            activeBox.current.style.top = event.currentTarget.offsetTop + "px";
            activeBox.current.style.left =
                event.currentTarget.offsetLeft + "px";
            activeBox.current.style.width =
                event.currentTarget.offsetWidth + "px";
            activeBox.current.style.height =
                event.currentTarget.offsetHeight + "px";
        }
    };

    const navItems = [
        {
            label: "Home",
            link: "#home",
            className: "nav-link active",
            ref: lastActiveLink,
        },
        {
            label: "About",
            link: "#about",
            className: "nav-link",
        },
        {
            label: "Work",
            link: "#work",
            className: "nav-link",
        },
        {
            label: "Reviews",
            link: "#reviews",
            className: "nav-link",
        },
        {
            label: "Contact",
            link: "#contact",
            className: "nav-link md:hidden",
        },
    ];

    return (
        <nav className={"navbar " + (navOpen ? "active" : "")}>
            {navItems.map(({ label, link, className, ref }, key) => (
                <a
                    href={link}
                    key={key}
                    ref={ref}
                    className={className}
                    onClick={activeCurrentLink}
                >
                    {label}
                </a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
}

export default Navbar;
