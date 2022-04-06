import React from "react";

function Header() {
    return (
        <header className="header">
            <div className="toolbar">
                <span><a href="/">Conecta Dev</a></span>
                <div>
                    <button>Novo post</button>
                    <span>img1</span>
                    <span>img2</span>
                </div>
            </div>
        </header>
    )
}

export default Header