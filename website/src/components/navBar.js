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
        <nav className="navbar is-white" role="navigation" aria-label="main navigation">
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
                    <a className="navbar-item subtitle is-5" onClick={() => navigate('/website')}>Home</a>
                    <a className="navbar-item subtitle is-5" onClick={() => navigate('/wesbite/experience')}>Experience</a>
                    <a className="navbar-item subtitle is-5" onClick={() => navigate('/website/projects')}>Projects</a>
                    <a className="navbar-item subtitle is-5" href='https://github.com/mikawin'>Github</a>
                    <a className="navbar-item subtitle is-5"></a>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;
