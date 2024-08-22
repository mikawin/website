import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import './Home.css';
import 'bulma/css/bulma.min.css';

import NavBar from '../components/navBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import me_image from './me.jpg';
import grad_image from './grad_2.jpg';
import AboutMe from '../components/aboutMe';
import CurrentWork from '../components/currentWork';
import ContactMe from '../components/contactMe';

function Home() {
    const [selectedButton, setSelectedButton] = useState('one');

    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    return (
        <main className='background'>
            <NavBar />
            {isMobile ? (
                <div className="mobile-view">
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

                    <div className='mobile-circular-image bottom'>
                        <img src={me_image} alt="me" width="100%" />
                    </div>
                    <div className='mobile-grad-image'>
                        <img src={grad_image} alt="me" width="100%" />
                    </div>
                </div>
            ) : (
                <div className='columns'>
                    <div className='column is-two-fifths left-column'>
                        <img className="picture-formatting" src={grad_image} alt="me" width="72.5%" />
                    </div>
                    <div className='column'>
                        <div className='content-container'>
                            {selectedButton === 'one' && <AboutMe />}
                            {selectedButton === 'two' && <CurrentWork />}
                            {selectedButton === 'three' && <ContactMe />}
                        </div>
                        <div className='button-group-formatting'>
                            <ButtonGroup variant="text" aria-label="Basic button group">
                                <Button onClick={() => handleButtonClick('one')}>One</Button>
                                <Button onClick={() => handleButtonClick('two')}>Two</Button>
                                <Button onClick={() => handleButtonClick('three')}>Three</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Home;
