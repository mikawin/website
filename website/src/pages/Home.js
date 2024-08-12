import React from 'react';
import { isMobile } from 'react-device-detect';
import './Home.css';
import 'bulma/css/bulma.min.css';
import NavBar from '../components/navBar';
import me_image from './me.jpg';
import grad_image from './grad_2.jpg';

function Home() {

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
                <div>
                    <div className="columns">
                        <div className='column is-two-thirds'>
                            <div className='intro'>
                                Hello! My name is
                            </div>
                            <div className='my-name'>
                                Mikayla Win
                            </div>
                        </div>
                        <div className='column'></div>
                        <div className='circular-image bottom'>
                            <img src={me_image} alt="me" width="100%" />
                        </div>
                        <div className='grad-image'>
                            <img src={grad_image} alt="me" width="100%" />
                        </div>
                    </div>
                    <div className='subtitle-container about-me-font'>
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
                        <br />
                        Now, I am eager to leverage my skills and experiences in a role that allows me to explore and communicate
                        the narratives hidden within data. I am excited about the opportunity to contribute to a team where I can
                        continue to grow professionally while applying my analytical skills to real-world challenges.
                    </div>
                </div>
            )}
        </main>
    );
}

export default Home;
