import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './aboutMe.css';

function AboutMe() {
    return (
        <div>
            <Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
                <CardContent>
                    <div className='text-container'>
                        <div className='intro'>
                            Hello, my name is
                        </div>
                        <div className='my-name'>
                            Mikayla Win
                        </div>
                        <div className='about-me'>
                            I recently graduated from the University of California, Santa Cruz, where I majored in both Business
                            Management Economics and Computer Science. My time at UCSC was marked by a blend of academic rigor and
                            rich extracurricular involvement. As a dedicated member of the Women’s Soccer Team, I learned the value
                            of teamwork, discipline, and balancing multiple commitments, which significantly shaped my approach to
                            problem-solving and leadership. Simultaneously, my role in Alpha Kappa Psi - Chi Gamma Chapter allowed me
                            to develop strong professional skills and build a network of peers and mentors.
                            <br />
                            <br />
                            Throughout my studies, I was particularly captivated by the power of data and the stories it can
                            reveal when analyzed thoughtfully. Courses in both business and computer science provided me with a
                            robust foundation in data analysis, programming, and economic theory, reinforcing my appreciation for
                            how data-driven insights can inform decision-making and strategy. My involvement in various projects
                            and academic work deepened this interest, leading me to pursue a career as an analyst.
                            <br />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default AboutMe;