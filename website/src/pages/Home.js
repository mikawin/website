import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';


import './Home.css';
import 'bulma/css/bulma.min.css';
import NavBar from '../components/navBar'
import me_image from './me.jpg';
import grad_image from './grad_pic.jpg';

function Home() {

    return (
        <div>
            <BrowserView>
                <NavBar />
                <div className='container'>
                    <div className="columns">
                        <div className='column is-two-thirds' >
                            <div className='intro'>
                                Hello ! My name is Mikayla Win
                            </div>
                            <div className='subtitle-container about-me-font'>
                                I recently graduated from the University of California, Santa Cruz, where
                                I majored in both Business Management Economics and Computer Science.  During my time
                                at UCSC, I was a part of the school's Women's Soccer Team and Alpha Kappa Psi - Chi Gamma Chapter.
                                From the courses I took to the memories I made, I learned so much about myself. I grew
                                fond of the power of data and the stories it tells when you dig deeper. After
                                realizing my excitement, I am currently working to find a job as an analyst.

                            </div>
                        </div>
                        <div className='column'>

                        </div>
                        <div className='column'>
                            <div className='subtitle is-3   '>Contact Me</div>
                            <div className='subtitle is-5'>Email</div>
                            <div className='su  btitle is-5'>Phone Number</div>

                        </div>
                    </div>

                    <div className='circular-image bottom'>
                        <img src={me_image} alt="me" width="350px" />
                    </div>
                    <div className='grad-image'>
                        <img src={grad_image} alt="me" width="350px" />
                    </div>
                </div>

            </BrowserView >

            <MobileView>
                <div className='intro'>
                    Hello ! My name is Mikayla Win
                </div>
            </MobileView>
        </div>

    );
}

export default Home;
