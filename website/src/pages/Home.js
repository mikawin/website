import 'bulma/css/bulma.min.css';
import './Home.css';
import me_image from './me.png';

function Home() {
    return (
        <div>
            <nav className="navbar is-white" role="navigation" aria-label="main navigation">
                <div className="navbar-start">
                    <a className="navbar-item subtitle is-5"></a>
                    <a className="navbar-item subtitle is-5">Home</a>
                    <a className="navbar-item subtitle is-5" href="#">Experience</a>
                    <a className="navbar-item subtitle is-5" href="#">Projects</a>
                    <a className="navbar-item subtitle is-5" href="#">Github</a>
                    <a className="navbar-item subtitle is-5"></a>
                </div>
            </nav >
            <div className='container bottom'>
                <div className="header">
                    <div className="hero-body">
                        <p className="intro">Hello! My name is</p>
                        <p className="name  has-text-weight-bold">Mikayla Win</p>
                    </div>

                    <div className="content">
                        <p >
                            I am a recent graduate from the University of California,    Santa Cruz majoring in
                            Business Management Economics and Computer Science.
                        </p>
                    </div>
                </div>
                <div className='scaled-image'>
                    <img src={me_image} alt="me" />
                </div>
            </div>
        </div >

    );
}

export default Home;
