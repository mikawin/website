import React from 'react';
import { isMobile } from 'react-device-detect';
import './Home.css';
import 'bulma/css/bulma.min.css';
import NavBar from '../components/navBar';
import me_image from './me.jpg';
import grad_image from './grad_2.jpg';

function Home() {
    return (
        <div>
            <NavBar />
            {isMobile ? (
                <div className="mobile-view">
                    <div className='mobile-contact-me-container'>
                        <div className='mobile-contact-me-font'>Contact Me</div>
                        <div className='mobile-info-font'>mikayla.win@comcast.net</div>
                        <div className='mobile-info-font'>925-858-3475</div>
                    </div>
                    <div className='mobile-intro'>
                        Hello! My name is Mikayla Win
                    </div>
                    <div className='mobile-subtitle-container mobile-about-me-font'>
                        I recently graduated from the University of California, Santa Cruz, where
                        I majored in both Business Management Economics and Computer Science. During my time
                        at UCSC, I was a part of the school's Women's Soccer Team and Alpha Kappa Psi - Chi Gamma Chapter.
                        From the courses I took to the memories I made, I learned so much about myself. I grew
                        fond of the power of data and the stories it tells when you dig deeper. After
                        realizing my excitement, I am currently working to find a job as an analyst.
                    </div>

                    <div className='mobile-circular-image  bottom'>
                        <img src={me_image} alt="me" width="100%" />
                    </div>
                    <div className='mobile-grad-image'>
                        <img src={grad_image} alt="me" width="100%" />
                    </div>
                </div>
            ) : (
                <div className="columns">
                    <div className='column is-two-thirds'>
                        <div className='intro'>
                            Hello! My name is Mikayla Win
                        </div>
                        <div className='subtitle-container about-me-font'>
                            I recently graduated from the University of California, Santa Cruz, where
                            I majored in both Business Management Economics and Computer Science. During my time
                            at UCSC, I was a part of the school's Women's Soccer Team and Alpha Kappa Psi - Chi Gamma Chapter.
                            From the courses I took to the memories I made, I learned so much about myself. I grew
                            fond of the power of data and the stories it tells when you dig deeper. After
                            realizing my excitement, I am currently working to find a job as an analyst.
                        </div>
                    </div>
                    <div className='column'></div>
                    <div className='column'>
                        <div className='contact-me-font'>Contact Me</div>
                        <div className='info-font'>mikayla.win@comcast.net</div>
                        <div className='info-font'>925-858-3475</div>
                    </div>
                    <div className='circular-image bottom'>
                        <img src={me_image} alt="me" width="100%" />
                    </div>
                    <div className='grad-image'>
                        <img src={grad_image} alt="me" width="100%" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
