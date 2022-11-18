import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(true)

    
    return (
        <header>
            <nav className="navigation">
                <div className="ham" onClick={() => setIsMenuOpen(prevState => !prevState)}>
                    <div className="strip"></div>
                </div>
                <ul className="ul_links " style={{display: `${!isMenuOpen ? "none" : "flex"}`}}>
                    <li className="links"><Link to="/" className="links">Home</Link></li>
                    <li className="links"><Link to="/workes" className="links">Workes</Link></li>
                </ul>
            </nav>
        </header>
    )
}