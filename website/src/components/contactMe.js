import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contactMe.css';

function ContactMe() {
    return (
        <div>
            <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
                <CardContent>
                    <div className='text-container'>
                        <div className='contact-me'>
                            Contact Me
                            <div className='icons'>
                                <a
                                    href="https://www.linkedin.com/in/mikayla-win"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedinIn}
                                        style={{ color: 'var(--name-color)', fontSize: '2.5rem' }}
                                    />
                                </a>
                                <a
                                    href="https://github.com/mikawin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        style={{ color: 'var(--name-color)', fontSize: '2.5rem', marginLeft: '1vw' }}
                                    />
                                </a>
                                <a
                                    href="mailto:mikayla.win@comcast.net"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        style={{ color: 'var(--name-color)', fontSize: '2.5rem', marginLeft: '1vw' }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default ContactMe;
