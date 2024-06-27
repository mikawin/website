import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './navBar.css'


function NavBar() {
    const navigate = useNavigate();
    console.log(navigate);

    return (
        <nav className="navbar is-white" role="navigation" aria-label="main navigation">
            <div className="navbar-start">
                <div className="navbar-item subtitle is-5"></div>
                <a className="navbar-item subtitle is-5" onClick={() => navigate('/')}>Home</a>
                <a className="navbar-item subtitle is-5" onClick={() => navigate('/experience')}>Experience</a>
                <a className="navbar-item subtitle is-5" onClick={() => navigate('/projects')}>Projects</a>
                <a className="navbar-item subtitle is-5" href='https://github.com/mikawin'>Github</a>
                <div className="navbar-item subtitle is-5"></div>
            </div>
        </nav>
    );
}

export default NavBar;