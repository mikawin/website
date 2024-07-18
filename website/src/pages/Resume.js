import 'bulma/css/bulma.min.css';
import NavBar from '../components/navBar';
import { isMobile } from 'react-device-detect';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './Resume.css';

function Resume() {
    return (
        <div>
            <NavBar />
            {isMobile ? (
                <div>
                    <div className='mobile-name'>
                        Mikayla Win
                    </div>
                    <div className='mobile-contact-info'>
                        mikayla.win@comcast.net <br />
                        (925) 858-3475<br />
                        <a className="button is-light mobile-button-formatting" href='https://drive.google.com/file/d/1rngZfOP1SU2DFDQJCgjHSrmFSWXq-sy2/view?usp=sharing'>Download PDF</a>
                    </div>
                    <Stack>
                        <Paper elevation={0} sx={{ backgroundColor: '#f3faff' }}>
                            <div className='mobile-paper-formatting'>
                                <div className='mobile-job-title'>
                                    Data Migration Intern
                                </div>
                                <div className='mobile-company'>
                                    Fertile Groundworks
                                </div>
                                <div className='date'>
                                    March 2023 - September 2023
                                </div>
                                <div className='job-description'>
                                    Coordinated and conducted the santiation and migration of over 12,000 data transactions
                                    to Little Green Light, a non-profit CRM software created to aid donor management. Trained 15
                                    members and interns on how to maintain the database and wrote standard operating procedurs to
                                    assist new hires. Developed automated database entries by creating forms that map constituent data
                                    and volunteer transactions from over 20 submissions per day. Overall, migrated the company's
                                    regular practices to a more secure and safe process to mitigate data loss or data breaches.
                                </div>
                            </div>
                        </Paper>

                        <Paper elevation={0}>
                            <div className='mobile-paper-formatting'>
                                <div className='mobile-job-title'>
                                    Economics Peer Advisor
                                </div>
                                <div className='mobile-company'>
                                    University of California, Santa Cruz
                                </div>
                                <div className='date'>
                                    March 2022 - June 2022; January 2023 - March 2023
                                </div>
                                <div className='job-description'>
                                    Mentored over 40 students per quarter by planning and constructing their four-year academic
                                    plans, addressing inquiries about major requirements, and assessing students' progress
                                    to ascertain the most optimal path to graduate on time. Co-authored a quarterly newsletter
                                    published by the University of California, Santa Cruz Economics department. Communicated with the
                                    department staff to streamline the major declaration and graduation process for undergraduates.
                                </div>
                            </div>
                        </Paper>

                        <Paper elevation={0} sx={{ backgroundColor: '#f3faff' }}>
                            <div className='mobile-paper-formatting'>
                                <div className='mobile-job-title'>
                                    Venue Manager
                                </div>
                                <div className='mobile-company'>
                                    San Ramon FC & Mustang Soccer League
                                </div>
                                <div className='date'>
                                    June 2019 - August 2019
                                </div>
                                <div className='job-description'>
                                    Handled over 50 customer inquiries involving oversseeing amentities such as concessions, handling
                                    complaints or problems quickly and efficeintly, and providing clear information about
                                    events including schedules and locations. Maintained the venue by ensuring that each field
                                    had the equipment necessary such that the tournament ran smoothly and remained on schedule.
                                    Supervised parent volunteers to make sure they were helping accordingly and benefiting the overall
                                    flow of the event.
                                </div>
                            </div>
                        </Paper>

                        <Paper>
                            <Card className='column' elevation={0}>
                                <CardContent>
                                    <div className='card-title'>
                                        Programming Languages
                                    </div>
                                    <div className='columns programming-text'>
                                        <div className='card-text column'>
                                            C/C++<br />
                                            HTML/CSS<br />
                                            JavaScript<br />
                                            Python<br />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Paper>

                        <Paper>
                            <Card elevation={0} sx={{ backgroundColor: '#f3faff' }} >
                                <CardContent>
                                    <div className='tech-card-title'>
                                        Technologies
                                    </div>
                                    <div className='columns is-mobile  tech-text-space'>
                                        <div className='column is-three-fifths'>
                                            Figma<br />
                                            LaTex<br />
                                            Linux<br />
                                            Microsoft Office Suite<br />
                                        </div>
                                        <div className='column'>
                                            Node.js<br />
                                            Py4Web<br />
                                            React.js<br />
                                            Vue.js<br />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Paper>

                        <Paper>
                            <Card elevation={0}>
                                <CardContent>
                                    <div className='vis-tools-card-title'>
                                        Data Visualization Tools
                                    </div>
                                    <div className='vis-tools-text-space'>
                                        Microsoft Excel<br />
                                        Microsoft Power BI<br />
                                        Python<br />
                                        Stata/BE<br />
                                    </div>
                                </CardContent>
                            </Card>
                        </Paper>

                    </Stack>
                </div>
            ) : (
                <div>
                    <div className='columns'>
                        <div className='column'> </div>
                        <div className='column is-two-thirds'>
                            <div className='columns'>
                                <div className='column is-four-fifths'>
                                    <div className='name'>
                                        Mikayla Win<br />
                                    </div>
                                    <div className='contact-info'>
                                        mikayla.win@comcast.net<br />
                                        (925) 858-3475
                                    </div>
                                </div>
                                <div className='column'>
                                    <div className=' button-formatting'>
                                        <a className="button is-light is-medium" href='https://drive.google.com/file/d/1rngZfOP1SU2DFDQJCgjHSrmFSWXq-sy2/view?usp=sharing'>Download PDF</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column'> </div>
                    </div>

                    <Stack className='bottom-spacing'>
                        <Paper elevation={0} sx={{ backgroundColor: '#f3faff' }}>
                            <div className='columns'>
                                <div className='column'></div>
                                <div className='column is-two-thirds'>
                                    <div className='job-title'>
                                        Data Migration Intern
                                    </div>
                                    <div className='company'>
                                        Fertile Groundworks
                                    </div>
                                    <div className='date'>
                                        March 2023 - September 2023
                                    </div>
                                    <div className='job-description'>
                                        Coordinated and conducted the santiation and migration of over 12,000 data transactions
                                        to Little Green Light, a non-profit CRM software created to aid donor management. Trained 15
                                        members and interns on how to maintain the database and wrote standard operating procedurs to
                                        assist new hires. Developed automated database entries by creating forms that map constituent data
                                        and volunteer transactions from over 20 submissions per day. Overall, migrated the company's
                                        regular practices to a more secure and safe process to mitigate data loss or data breaches.
                                    </div>
                                </div>
                                <div className='column'></div>
                            </div>
                        </Paper>

                        <Paper elevation={0}>
                            <div className='columns'>
                                <div className='column'></div>
                                <div className='column is-two-thirds'>
                                    <div className='job-title'>
                                        Economics Peer Advisor
                                    </div>
                                    <div className='company'>
                                        University of California, Santa Cruz
                                    </div>
                                    <div className='date'>
                                        March 2022 - June 2022; January 2023 - March 2023
                                    </div>
                                    <div className='job-description'>
                                        Mentored over 40 students per quarter by planning and constructing their four-year academic
                                        plans, addressing inquiries about major requirements, and assessing students' progress
                                        to ascertain the most optimal path to graduate on time. Co-authored a quarterly newsletter
                                        published by the University of California, Santa Cruz Economics department. Communicated with the
                                        department staff to streamline the major declaration and graduation process for undergraduates.
                                    </div>
                                </div>
                                <div className='column'></div>
                            </div>
                        </Paper>

                        <Paper elevation={0} sx={{ backgroundColor: '#f3faff' }}>
                            <div className='columns'>
                                <div className='column'></div>
                                <div className='column is-two-thirds'>
                                    <div className='job-title'>
                                        Venue Manager
                                    </div>
                                    <div className='company'>
                                        San Ramon FC & Mustang Soccer League
                                    </div>
                                    <div className='date'>
                                        June 2019 - August 2019
                                    </div>
                                    <div className='job-description'>
                                        Handled over 50 customer inquiries involving oversseeing amentities such as concessions, handling
                                        complaints or problems quickly and efficeintly, and providing clear information about
                                        events including schedules and locations. Maintained the venue by ensuring that each field
                                        had the equipment necessary such that the tournament ran smoothly and remained on schedule.
                                        Supervised parent volunteers to make sure they were helping accordingly and benefiting the overall
                                        flow of the event.
                                    </div>
                                </div>
                                <div className='column'></div>
                            </div>
                        </Paper>

                        <Paper elevation={0} className='card-spacing'>
                            <div className='columns'>
                                <div className='column'></div>
                                <Card className='column' elevation={0} sx={{ backgroundColor: '#f3faff' }}>
                                    <CardContent>
                                        <div className='card-title'>
                                            Programming Languages
                                        </div>
                                        <div className='columns programming-text'>
                                            <div className='card-text column'>
                                                C/C++<br />
                                                HTML/CSS<br />
                                                JavaScript<br />
                                                Python<br />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className='column spacing' elevation={0} sx={{ backgroundColor: '#f3faff' }} >
                                    <CardContent>
                                        <div className='card-title'>
                                            Technologies
                                        </div>
                                        <div className='columns '>
                                            <div className='card-text column is-three-fifths text-space'>
                                                Figma<br />
                                                LaTex<br />
                                                Linux<br />
                                                Microsoft Office Suite<br />
                                            </div>
                                            <div className='card-text column text-space'>
                                                Node.js<br />
                                                Py4Web<br />
                                                React.js<br />
                                                Vue.js<br />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className='column spacing' elevation={0} sx={{ backgroundColor: '#f3faff' }}>
                                    <CardContent>
                                        <div className='card-title'>
                                            Data Visualization Tools
                                        </div>
                                        <div className='card-text text-space'>
                                            Microsoft Excel<br />
                                            Microsoft Power BI<br />
                                            Python<br />
                                            Stata/BE<br />
                                        </div>
                                    </CardContent>
                                </Card>
                                <div className='column'></div>
                            </div>
                        </Paper>
                    </Stack>
                </div>
            )
            }

        </div >

    );
}

export default Resume;
