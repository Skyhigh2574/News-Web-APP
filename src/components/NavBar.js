import {React, useState} from 'react';
import { Link } from "react-router-dom";




const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () =>{
    setIsOpen(!isOpen);
  }
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-collapse-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">NewsApp</Link>
                <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarSupportedContent" aria-expanded={isOpen} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show': ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
