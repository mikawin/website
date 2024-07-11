import 'bulma/css/bulma.min.css';
import NavBar from '../components/navBar';
import { isMobile } from 'react-device-detect';

function Experience() {
    return (
        <div>
            <NavBar />
            {isMobile ? (
                <h1> hi </h1>
            ) : (
                <div>
                </div>
            )}

        </div >

    );
}

export default Experience;
