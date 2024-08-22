import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Home.css';
import 'bulma/css/bulma.min.css';

import NavBar from '../components/navBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

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
                <div>
                    <div className='mobile-picture-formatting'>
                        <img src={grad_image} alt="me" width="80%" />
                    </div>
                    <div className='mobile-text-container'>
                        <div className='mobile-intro'>
                            Hello! My name is
                        </div>
                        <div className='mobile-home-name'>
                            Mikayla Win
                        </div>
                        <div className='mobile-text'>
                            I recently graduated from the University of California, Santa Cruz, where
                            I majored in both Business Management Economics and Computer Science. During my time
                            at UCSC, I was a part of the school's Women's Soccer Team and Alpha Kappa Psi - Chi Gamma Chapter.
                            From the courses I took to the memories I made, I learned so much about myself. I grew
                            fond of the power of data and the stories it tells when you dig deeper. After
                            realizing my excitement, I am currently working to find a job as an analyst.
                            <br />
                        </div>
                        <div className='mobile-whats-new'>
                            What's New ?
                        </div>
                        <div className='mobile-text'>
                            Recently, I have been focused on obtaining the Microsoft Power BI certification. To achieve
                            this goal, I have been working on completing online courses and practice exams to
                            prepare for the certification requirements.
                            With this new technology in my toolkit, I'll be well-equipped to produce high-quality
                            data visualizations efficiently in my next role.
                            <br />
                            <br />
                            In addition to my certification efforts, I have also been dedicating time to creating this
                            personal website. This project serves a dual purpose: it allows me to explore and experiment
                            with new web development technologies while also helping me maintain and refine the skills I’ve
                            already acquired. Through this project, I am continually learning and staying current with the
                            latest trends and techniques in web development.
                            <br />
                        </div>
                        <div className='mobile-icons'>
                            <a
                                href="https://www.linkedin.com/in/mikayla-win"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}
                                    style={{ color: 'var(--name-color)', fontSize: '4.5vh', marginBottom: '1.5vh', marginTop: '2vh' }}
                                />
                            </a>
                            <a
                                href="https://github.com/mikawin"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    style={{ color: 'var(--name-color)', fontSize: '4.5vh', marginLeft: '3vw', marginBottom: '1.5vh', marginTop: '2vh' }}
                                />
                            </a>
                            <a
                                href="mailto:mikayla.win@comcast.net"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    style={{ color: 'var(--name-color)', fontSize: '4.5vh', marginLeft: '3vw', marginBottom: '1.5vh', marginTop: '2vh' }}
                                />
                            </a>
                        </div>

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
                                <Button style={{ fontSize: '1vw' }} onClick={() => handleButtonClick('one')}>{'<'}</Button>
                                <Button style={{ fontSize: '1vw' }} onClick={() => handleButtonClick('two')}>...</Button>
                                <Button style={{ fontSize: '1vw' }} onClick={() => handleButtonClick('three')}>{'>'}</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Home;
