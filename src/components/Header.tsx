import React from "react";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex-justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]"></div>
            <h1>
                <a href="/" className="logo">
                    <img
                        src="./images/boy.png"
                        width={40}
                        height={40}
                        alt="Amine Elgaini"
                    />
                </a>
            </h1>

            <div className="relative md:justify-self-center">
                <button className="menu-btn md:hidden" onClick={null}>
                    <span className="material-symbols-rounded">menu</span>
                </button>
            </div>

            
        </header>
    );
}

export default Header;
