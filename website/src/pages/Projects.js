import 'bulma/css/bulma.min.css';
import './Projects.css';
import * as React from 'react';
import NavBar from '../components/navBar';
import { isMobile } from 'react-device-detect';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Projects() {
    const [expanded, setExpanded] = React.useState({
        p1: false,
        p4: false,
        p2: false,
        p5: false,
        p3: false,
        p6: false,
    });

    const handleExpandClick = (project) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [project]: !prevExpanded[project],
        }));
    };

    return (
        <div>
            <NavBar />
            {isMobile ? (
                <div>
                    <Stack spacing={2} className='sides'>
                        <Paper>
                            <Card variant="outlined">
                                <CardContent>
                                    <div className='mobile-name-size'>OnTime</div>
                                    {!expanded.p1 &&
                                        <div>
                                            An indoor and outdoor navigation web app specific to the
                                            University of California, Santa Cruz campus.
                                        </div>}
                                </CardContent>
                                <CardActions>
                                    <ExpandMore
                                        expand={expanded.p1}
                                        onClick={() => handleExpandClick('p1')}
                                        aria-expanded={expanded.p1}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded.p1} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <div>Description</div>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Paper>
                        <Paper>
                            <Card variant="outlined">
                                <CardContent>
                                    <div className='mobile-name-size'>Multi-Threaded HTTP Server</div>
                                    {!expanded.p3 &&
                                        <div>
                                            A multi-threaded HTTP server with input sanitization, an audit log for atomic and
                                            coherent GET and PUT requests, and more.
                                        </div>}
                                </CardContent>
                                <CardActions>
                                    <ExpandMore
                                        expand={expanded.p3}
                                        onClick={() => handleExpandClick('p3')}
                                        aria-expanded={expanded.p3}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded.p3} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <div>Description</div>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Paper>
                        <Paper>
                            <Card variant="outlined">
                                <CardContent>
                                    <div className='mobile-name-size'>Bird Watching App</div>
                                    {!expanded.p2 &&
                                        <div>
                                            A web app that displays bird density heat maps, statistics
                                            for specific regions, and data inputted per user.
                                        </div>}
                                </CardContent>
                                <CardActions>
                                    <ExpandMore
                                        expand={expanded.p2}
                                        onClick={() => handleExpandClick('p2')}
                                        aria-expanded={expanded.p2}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded.p2} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <div>Description</div>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Paper>

                        <Paper>
                            <Card variant="outlined">
                                <CardContent>
                                    <div className='mobile-name-size'>Pocket Closet</div>
                                    {!expanded.p5 &&
                                        <div>
                                            A prototype created while simulating the Lean Startup methodology
                                            and based on the results of doing market research.
                                        </div>}
                                </CardContent>
                                <CardActions>
                                    <ExpandMore
                                        expand={expanded.p5}
                                        onClick={() => handleExpandClick('p5')}
                                        aria-expanded={expanded.p5}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded.p5} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <div>Description</div>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Paper>
                        <Paper>
                            <Card variant="outlined">
                                <CardContent>
                                    <div className='mobile-name-size'>RSA Encryption</div>
                                    {!expanded.p4 &&
                                        <div>
                                            Three programs that encrypt and decrypt files using public
                                            and private keys, and generate keys.
                                        </div>}
                                </CardContent>
                                <CardActions>
                                    <ExpandMore
                                        expand={expanded.p4}
                                        onClick={() => handleExpandClick('p4')}
                                        aria-expanded={expanded.p4}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded.p4} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <div>Description</div>
                                    </CardContent>
                                </Collapse>
                            </Card>

                        </Paper>

                        <Paper>
                            <Card variant="outlined">
                                <CardContent>
                                    <div className='mobile-name-size'>Research Papers</div>
                                    {!expanded.p6 &&
                                        <div>
                                            Two research papers examining and proving causality using microeconomic
                                            techniques like regression discontinuity, 2SLS, etc.
                                        </div>}
                                </CardContent>
                                <CardActions>
                                    <ExpandMore
                                        expand={expanded.p6}
                                        onClick={() => handleExpandClick('p6')}
                                        aria-expanded={expanded.p6}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>
                                <Collapse in={expanded.p6} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <div>Description</div>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Paper>
                    </Stack>

                </div>
            ) : (

                <div className='columns centering'>
                    <div className='column'></div>
                    <div className='column is-one-quarter'>
                        <Stack spacing={12}>
                            <Paper>
                                <Card variant="outlined">
                                    <CardContent>
                                        <div className='name-size'>OnTime</div>
                                        {!expanded.p1 &&
                                            <div>
                                                An indoor and outdoor navigation web app specific to the
                                                University of California, Santa Cruz campus.
                                            </div>}
                                    </CardContent>
                                    <CardActions>
                                        <ExpandMore
                                            expand={expanded.p1}
                                            onClick={() => handleExpandClick('p1')}
                                            aria-expanded={expanded.p1}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded.p1} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <div>Description</div>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Paper>

                            <Paper>
                                <Card variant="outlined">
                                    <CardContent>
                                        <div className='name-size'>Multi-Threaded HTTP Server</div>
                                        {!expanded.p3 &&
                                            <div>
                                                A multi-threaded HTTP server with input sanitization, an audit log for atomic and
                                                coherent GET and PUT requests, and more.
                                            </div>}
                                    </CardContent>
                                    <CardActions>
                                        <ExpandMore
                                            expand={expanded.p3}
                                            onClick={() => handleExpandClick('p3')}
                                            aria-expanded={expanded.p3}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded.p3} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <div>Description</div>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Paper>
                        </Stack>
                    </div>
                    <div className='column is-one-quarter'>
                        <Stack spacing={12}>
                            <Paper>
                                <Card variant="outlined">
                                    <CardContent>
                                        <div className='name-size'>Bird Watching App</div>
                                        {!expanded.p2 &&
                                            <div>
                                                A web app that displays bird density heat maps, statistics
                                                for specific regions, and data inputted per user.
                                            </div>}
                                    </CardContent>
                                    <CardActions>
                                        <ExpandMore
                                            expand={expanded.p2}
                                            onClick={() => handleExpandClick('p2')}
                                            aria-expanded={expanded.p2}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded.p2} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <div>Description</div>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Paper>

                            <Paper>
                                <Card variant="outlined">
                                    <CardContent>
                                        <div className='name-size'>Pocket Closet</div>
                                        {!expanded.p5 &&
                                            <div>
                                                A prototype created while simulating the Lean Startup methodology
                                                and based on the results of doing market research.
                                            </div>}
                                    </CardContent>
                                    <CardActions>
                                        <ExpandMore
                                            expand={expanded.p5}
                                            onClick={() => handleExpandClick('p5')}
                                            aria-expanded={expanded.p5}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded.p5} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <div>Description</div>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Paper>
                        </Stack>
                    </div>
                    <div className='column is-one-quarter'>
                        <Stack spacing={12}>
                            <Paper>
                                <Card variant="outlined">
                                    <CardContent>
                                        <div className='name-size'>RSA Encryption</div>
                                        {!expanded.p4 &&
                                            <div>
                                                Three programs that encrypt and decrypt files using public
                                                and private keys, and generate keys.
                                            </div>}
                                    </CardContent>
                                    <CardActions>
                                        <ExpandMore
                                            expand={expanded.p4}
                                            onClick={() => handleExpandClick('p4')}
                                            aria-expanded={expanded.p4}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded.p4} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <div>Description</div>
                                        </CardContent>
                                    </Collapse>
                                </Card>

                            </Paper>

                            <Paper>
                                <Card variant="outlined">
                                    <CardContent>
                                        <div className='name-size'>Research Papers</div>
                                        {!expanded.p6 &&
                                            <div>
                                                Two research papers examining and proving causality using microeconomic
                                                techniques like regression discontinuity, 2SLS, etc.
                                            </div>}
                                    </CardContent>
                                    <CardActions>
                                        <ExpandMore
                                            expand={expanded.p6}
                                            onClick={() => handleExpandClick('p6')}
                                            aria-expanded={expanded.p6}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded.p6} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <div>Description</div>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Paper>
                        </Stack>
                    </div>
                    <div className='column'></div>

                </div>
            )}
        </div>
    );
}

export default Projects;
