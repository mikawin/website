import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './currentWork.css';

function CurrentWork() {
    return (
        <div>
            <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
                <CardContent>
                    <div className='text-container'>
                        <div className='whats-new'>
                            What's New ?
                        </div>
                        <div className='current-text'>
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
                            <br />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default CurrentWork;