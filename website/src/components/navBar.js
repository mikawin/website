import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './navBar.css';

function NavBar() {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);

    const toggleBurgerMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a
                    role="button"
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={toggleBurgerMenu}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <a className="navbar-item subtitle is-5"></a>
                    <a className="navbar-item subtitle is-5" onClick={() => navigate('/')}>Home</a>
                    <a className="navbar-item subtitle is-5" onClick={() => navigate('/resume')}>Resume</a>
                    <a className="navbar-item subtitle is-5" onClick={() => navigate('/projects')}>Projects</a>
                    <div className="navbar-item subtitle is-5"></div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
