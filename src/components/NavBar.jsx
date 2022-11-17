import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header>
            <nav className="navigation">
                <ul>
                    <li className="links"><Link to="/" className="links">Home</Link></li>
                    <li className="links"><Link to="/workes" className="links">Workes</Link></li>
                </ul>
            </nav>
        </header>
    )
}