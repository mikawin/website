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
    color: expand ? 'var(--hover-text-color)' : 'var(--text-color)',
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const DescriptionText = styled('div')(({ expanded }) => ({
    color: expanded ? 'var(--hover-text-color)' : 'var(--text-color)',
    transition: 'color 0.3s ease',
}));

function Projects() {
    const [expanded, setExpanded] = React.useState({
        p1: false,
        p2: false,
        p3: false,
        p4: false,
        p5: false,
        p6: false,
    });

    const [permanentExpanded, setPermanentExpanded] = React.useState({
        p1: false,
        p2: false,
        p3: false,
        p4: false,
        p5: false,
        p6: false,
    });

    const handleExpandHover = (project, isHovered) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [project]: isHovered || permanentExpanded[project],
        }));
    };

    const handleExpandClick = (project) => {
        setPermanentExpanded((prevPermanentExpanded) => ({
            ...prevPermanentExpanded,
            [project]: !prevPermanentExpanded[project],
        }));
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [project]: !permanentExpanded[project],
        }));
    };

    return (
        <main className='project-background'>
            <NavBar />
            {isMobile ? (
                <div>
                    <Stack spacing={2} className='sides'>
                        <Paper>
                            <Card variant="outlined" sx={{
                                backgroundColor: expanded.p1 ? 'var(--hover-bg-color)' : 'var(--card-bg-color)',
                                transition: 'background-color 0.3s ease',
                            }}>
                                <CardContent>
                                    <DescriptionText className='mobile-name-size' expanded={expanded.p1}>OnTime</DescriptionText>
                                    {!expanded.p1 &&
                                        <div className='description-text'>
                                            An indoor and outdoor navigation web app specific to the
                                            University of California, Santa Cruz campus.
                                        </div>}
                                    {expanded.p1 &&
                                        <div className='technologies-text'>
                                            Technologies: JavaScript, HTML/CSS, React, Material UI, Firebase, Figma, Python, Node.js, Express.js
                                        </div>
                                    }
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
                                        <DescriptionText className='description-text' expanded={expanded.p1}>
                                            OnTime is a web application created using React.js and Material UI for formatting.
                                            The indoor navigation is performed by querying our database from an Express.js server
                                            to find the best path, using Dijkstra's pathfinding algorithm, based on coordinates
                                            calculated based on the proportions and ratio of respective building floor plans. The
                                            outdoor navigation utilizes the Google Maps API to display the path from the user's
                                            location to their desired location.
                                        </DescriptionText>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Paper>
                        <Paper>
                            <Card variant="outlined" sx={{
                                backgroundColor: expanded.p3 ? 'var(--hover-bg-color)' : 'var(--card-bg-color)',
                                transition: 'background-color 0.3s ease',
                            }}>
                                <CardContent>
                                    <DescriptionText className='mobile-name-size' expanded={expanded.p3}>Multi-Threaded HTTP Server</DescriptionText>
                                    {!expanded.p3 &&
                                        <div className='description-text'>
                                            A multi-threaded HTTP server with input sanitization, an audit log for atomic and
                                            coherent GET and PUT requests, and more.
                                        </div>}
                                    {expanded.p3 &&
                                        <div className='technologies-text'>
                                            Technologies : C, LaTeX, POSIX
                                        </div>
                                    }
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
                                        <DescriptionText expanded={expanded.p3}>
                                            The robust multi-threaded HTTP server in focused on security and efficiency. Key
                                            features includes POSIX regular expressions for input sanitization, efficient
                                            connection management using dispatched threads and a user-defined thread worker pool
                                            with a thread-safe circular queue. Audit log entries ensure atomicity and coherence
                                            for GET and PUT operations.
                                        </DescriptionText>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Paper>
                        <Paper>
                            <Card variant="outlined" sx={{
                                backgroundColor: expanded.p2 ? 'var(--hover-bg-color)' : 'var(--card-bg-color)',
                                transition: 'background-color 0.3s ease',
                            }}>
                                <CardContent>
                                    <DescriptionText className='mobile-name-size' expanded={expanded.p2}>Bird Watching App</DescriptionText>
                                    {!expanded.p2 &&
                                        <div className='description-text'>
                                            A web app that displays bird density heat maps, statistics
                                            for specific regions, and data inputted per user.
                                        </div>}
                                    {expanded.p2 &&
                                        <div className='technologies-text'>
                                            Technologies : JavaScript, HTML/CSS, Vue.js, Bulma CSS, Py4Web
                                        </div>
                                    }
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
                                        <DescriptionText expanded={expanded.p2} className='description-text'>
                                            The Bird Watching web application was created using Vue.js, Bulma CSS for formatting
                                            and Py4Web as the database modeled after the website eBird.org. The app displays
                                            bird densities, a checklist page for users to record personal sightings, a statistics
                                            page for regional bird-watching statistics, and a location page for detailed birding
                                            information. Bird densities are displayed utilizing Leaflet heat maps and can be queried
                                            by drawing polygons along the map. In addition, there are filtering capabilities for
                                            users to view densities based on species.
                                        </DescriptionText>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Paper>

                        <Paper>
                            <Card variant="outlined" sx={{
                                backgroundColor: expanded.p5 ? 'var(--hover-bg-color)' : 'var(--card-bg-color)',
                                transition: 'background-color 0.3s ease',
                            }}>
                                <CardContent>
                                    <DescriptionText className='mobile-name-size' expanded={expanded.p5}>Pocket Closet</DescriptionText>
                                    {!expanded.p5 &&
                                        <div className='description-text'>
                                            A prototype created while simulating the Lean Startup methodology
                                            and based on the results of doing market research.
                                        </div>}
                                    {expanded.p5 &&
                                        <div className='technologies-text'>
                                            Technologies : Microsoft PowerPoint, Figma
                                        </div>
                                    }
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
                                        <DescriptionText expanded={expanded.p5}>
                                            Pocket Closet is a prototype created using Figma. Pocket Closet
                                            is an app that allows users to view their closet digitally, select outfits curated
                                            by an AI model, and buy or sell clothing on the in-app storefront. Along with the
                                            prototype, we created a comprehensive business plan that consists of validating business
                                            hypothesis, analyzing economic factors affecting the business, determining how to profit,
                                            developing a marketing and sales strategy, and developing a Lean Canvas model. This business
                                            plan was then presented and was open to feedback.
                                        </DescriptionText>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Paper>
                        <Paper>
                            <Card variant="outlined" sx={{
                                backgroundColor: expanded.p4 ? 'var(--hover-bg-color)' : 'var(--card-bg-color)',
                                transition: 'background-color 0.3s ease',
                            }}>
                                <CardContent>
                                    <DescriptionText className='mobile-name-size' expanded={expanded.p4}>RSA Encryption</DescriptionText>
                                    {!expanded.p4 &&
                                        <div className='description-text'>
                                            Three programs that encrypt and decrypt files using public
                                            and private keys, and generate keys.
                                        </div>}
                                    {expanded.p4 &&
                                        <div className='technologies-text'>
                                            Technologies : C, LaTeX
                                        </div>
                                    }
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
                                        <DescriptionText expanded={expanded.p4}>
                                            The RSA encryption project implemented the RSA cryptosystem for secure
                                            communication. It begins with key generation, where a public key and a
                                            private key are created using large prime numbers.
                                            Encryption converts plaintext into ciphertext using the public
                                            key, while decryption reverses this process using the private key. The
                                            implementation focuses on modular arithmetic and ensuring efficiency with
                                            large numbers.
                                        </DescriptionText>
                                    </CardContent>
                                </Collapse>
                            </Card>

                        </Paper>

                        <Paper>
                            <Card variant="outlined"
                                sx={{
                                    backgroundColor: expanded.p6 ? 'var(--hover-bg-color)' : 'var(--card-bg-color)',
                                    transition: 'background-color 0.3s ease',
                                }}>
                                <CardContent>
                                    <DescriptionText expanded={expanded.p6} className='mobile-name-size'>Research Papers</DescriptionText>
                                    {!expanded.p6 &&
                                        <div div className='description-text'>
                                            Two research papers examining and proving causality using microeconomic
                                            techniques like regression discontinuity, 2SLS, etc.
                                        </div>}
                                </CardContent>
                                <CardActions style={{ justifyContent: 'flex-end' }}>
                                    {!expanded.p6 ? (
                                        <div>
                                            <a size="small" className="button-color" href='https://drive.google.com/file/d/1XK7yovrTipIRox5dSI4kNJNMapN6PZLq/view?usp=sharing'>Paper 1  </a>
                                            <a size="small" className="button-color" href='https://drive.google.com/file/d/16Vxo-QvR-wG5OcZ1LNOqw_TbxGhTflmS/view?usp=sharing'>Paper 2</a>
                                        </div>
                                    )
                                        : (
                                            <div>
                                                <a size="small" className="expanded-button-color" href='https://drive.google.com/file/d/1XK7yovrTipIRox5dSI4kNJNMapN6PZLq/view?usp=sharing'>Paper 1  </a>
                                                <a size="small" className="expanded-button-color" href='https://drive.google.com/file/d/16Vxo-QvR-wG5OcZ1LNOqw_TbxGhTflmS/view?usp=sharing'>Paper 2</a>
                                            </div>
                                        )
                                    }
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
                                        <DescriptionText expanded={expanded.p6} >
                                            Paper 1 compares two research designs: randomized control trial and
                                            non-experimental research design. This paper displays how the results
                                            of non-experimental research design should be received skeptically.
                                        </DescriptionText>
                                        <DescriptionText expanded={expanded.p6}>
                                            Paper 2 examines the effect of the Minimum Legal Drinking Age (MLDA) on the
                                            proportion of th epopulation that drinks on the reduction of various crimes.
                                            To display the causality of the MLDA, the paper discusses the results of
                                            a regression discontinuity model.
                                        </DescriptionText>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Paper>
                    </Stack>

                </div>
            ) : (
                <div>
                    <div className='columns centering'>
                        <div className='column'></div>
                        <div className='column is-one-quarter'>
                            <Stack spacing={12}>
                                <Paper>
                                    <div>
                                        <Card
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: expanded.p1 ? 'var(--hover-bg-color)' : 'var(--card-bg-color)',
                                                transition: 'background-color 0.3s ease',
                                            }}
                                        >
                                            <CardContent>
                                                <DescriptionText className='name-size' expanded={expanded.p1}>OnTime</DescriptionText>
                                                {!expanded.p1 &&
                                                    <div className='description-text'>
                                                        An indoor and outdoor navigation web app specific to the
                                                        University of California, Santa Cruz campus.
                                                    </div>}
                                                {expanded.p1 &&
                                                    <div className='technologies-text'>
                                                        Technologies : JavaScript, HTML/CSS, React, Material UI, Firebase, Figma, Python, Node.js, Express.js
                                                    </div>
                                                }
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
                                                    <DescriptionText className='description-text' expanded={expanded.p1}>
                                                        OnTime is a web application created using React.js and Material UI for formatting.
                                                        The indoor navigation is performed by querying our database from an Express.js server
                                                        to find the best path, using Dijkstra's pathfinding algorithm, based on coordinates
                                                        calculated based on the proportions and ratio of respective building floor plans. The
                                                        outdoor navigation utilizes the Google Maps API to display the path from the user's
                                                        location to their desired location.
                                                    </DescriptionText>
                                                </CardContent>
                                            </Collapse>
                                        </Card>
                                    </div>
                                </Paper>
                                <Paper>
                                    <div>
                                        <Card
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: expanded.p3 ? 'var(--hover-bg-color)' : 'var(--card-bg-color)',
                                                transition: 'background-color 0.3s ease',
                                            }}
                                        >
                                            <CardContent>
                                                <DescriptionText className='name-size' expanded={expanded.p3}>Multi-Threaded HTTP Server</DescriptionText>
                                                {!expanded.p3 &&
                                                    <div className='description-text'>
                                                        A multi-threaded HTTP server with input sanitization, an audit log for atomic and
                                                        coherent GET and PUT requests, and more.
                                                    </div>}
                                                {expanded.p3 &&
                                                    <div className='technologies-text'>
                                                        Technologies : C, LaTeX, POSIX
                                                    </div>
                                                }
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
                                                    <DescriptionText className='description-text' expanded={expanded.p3}>
                                                        The robust multi-threaded HTTP server in focused on security and efficiency. Key
                                                        features includes POSIX regular expressions for input sanitization, efficient
                                                        connection management using dispatched threads and a user-defined thread worker pool
                                                        with a thread-safe circular queue. Audit log entries ensure atomicity and coherence
                                                        for GET and PUT operations.
                                                    </DescriptionText>
                                                </CardContent>
                                            </Collapse>
                                        </Card>
                                    </div>
                                </Paper>
                            </Stack>
                        </div>
                        <div className='column is-one-quarter'>
                            <Stack spacing={12}>
                                <Paper>
                                    <div>
                                        <Card
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: expanded.p2 ? 'var(--hover-bg-color)' : 'var(--card-bg-color)',
                                                transition: 'background-color 0.3s ease',
                                            }}
                                        >
                                            <CardContent>
                                                <DescriptionText className='name-size' expanded={expanded.p2}>Bird Watching App</DescriptionText>
                                                {!expanded.p2 &&
                                                    <div className='description-text'>
                                                        A web app that displays bird density heat maps, statistics
                                                        for specific regions, and data inputted per user.
                                                    </div>}
                                                {expanded.p2 &&
                                                    <div className='technologies-text'>
                                                        Technologies : JavaScript, HTML/CSS, Vue.js, Bulma CSS, Py4Web
                                                    </div>
                                                }
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
                                                    <DescriptionText className='description-text' expanded={expanded.p2}>
                                                        The Bird Watching web application was created using Vue.js, Bulma CSS for formatting
                                                        and Py4Web as the database modeled after the website eBird.org. The app displays
                                                        bird densities, a checklist page for users to record personal sightings, a statistics
                                                        page for regional bird-watching statistics, and a location page for detailed birding
                                                        information. Bird densities are displayed utilizing Leaflet heat maps and can be queried
                                                        by drawing polygons along the map. In addition, there are filtering capabilities for
                                                        users to view densities based on species.

                                                    </DescriptionText>
                                                </CardContent>
                                            </Collapse>
                                        </Card>
                                    </div>
                                </Paper>

                                <Paper>
                                    <div>
                                        <Card
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: expanded.p5 ? 'var(--hover-bg-color)' : 'var(--card-bg-color)',
                                                transition: 'background-color 0.3s ease',
                                            }}
                                        >
                                            <CardContent>
                                                <DescriptionText className='name-size' expanded={expanded.p5}>Pocket Closet</DescriptionText>
                                                {!expanded.p5 &&
                                                    <div className='description-text'>
                                                        A prototype created while simulating the Lean Startup methodology
                                                        and based on the results of doing market research.
                                                    </div>}
                                                {expanded.p5 &&
                                                    <div className='technologies-text'>
                                                        Technologies : Microsoft PowerPoint, Figma
                                                    </div>
                                                }
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
                                                    <DescriptionText className='description-text' expanded={expanded.p5}>
                                                        Pocket Closet is a prototype created using Figma. Pocket Closet
                                                        is an app that allows users to view their closet digitally, select outfits curated
                                                        by an AI model, and buy or sell clothing on the in-app storefront. Along with the
                                                        prototype, we created a comprehensive business plan that consists of validating business
                                                        hypothesis, analyzing economic factors affecting the business, determining how to profit,
                                                        developing a marketing and sales strategy, and developing a Lean Canvas model. This business
                                                        plan was then presented and was open to feedback.
                                                    </DescriptionText>
                                                </CardContent>
                                            </Collapse>
                                        </Card>
                                    </div>
                                </Paper>
                            </Stack>
                        </div>
                        <div className='column is-one-quarter'>
                            <Stack spacing={12}>
                                <Paper>
                                    <div>
                                        <Card
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: expanded.p4 ? 'var(--hover-bg-color)' : 'var(--card-bg-color)',
                                                transition: 'background-color 0.3s ease',
                                            }}
                                        >
                                            <CardContent>
                                                <DescriptionText className='name-size' expanded={expanded.p4}> RSA Encryption</DescriptionText>
                                                {!expanded.p4 &&
                                                    <div className='description-text'>
                                                        Three programs that encrypt and decrypt files using public
                                                        and private keys, and generate keys.
                                                    </div>}
                                                {expanded.p4 &&
                                                    <div className='technologies-text'>
                                                        Technologies : C, LaTeX
                                                    </div>
                                                }
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
                                                    <DescriptionText className='description-text' expanded={expanded.p4}>
                                                        The RSA encryption project implemented the RSA cryptosystem for secure
                                                        communication. It begins with key generation, where a public key and a
                                                        private key are created using large prime numbers.
                                                        Encryption converts plaintext into ciphertext using the public
                                                        key, while decryption reverses this process using the private key. The
                                                        implementation focuses on modular arithmetic and ensuring efficiency with
                                                        large numbers.
                                                    </DescriptionText>
                                                </CardContent>
                                            </Collapse>
                                        </Card>
                                    </div>
                                </Paper>

                                <Paper>
                                    <div>
                                        <Card
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: expanded.p6 ? 'var(--hover-bg-color)' : 'var(--card-bg-color)',
                                                transition: 'background-color 0.3s ease',
                                            }}

                                        >
                                            <CardContent>
                                                <DescriptionText className='name-size' expanded={expanded.p6}>Research Papers</DescriptionText>
                                                {!expanded.p6 &&
                                                    <div className='description-text'>
                                                        Two research papers examining and proving causality using microeconomic
                                                        techniques like regression discontinuity, 2SLS, etc.
                                                    </div>}
                                            </CardContent>
                                            <CardActions style={{ justifyContent: 'flex-end' }}>
                                                {!expanded.p6 ? (
                                                    <div>
                                                        <a size="small" className="button-color" href='https://drive.google.com/file/d/1XK7yovrTipIRox5dSI4kNJNMapN6PZLq/view?usp=sharing'>Paper 1  </a>
                                                        <a size="small" className="button-color" href='https://drive.google.com/file/d/16Vxo-QvR-wG5OcZ1LNOqw_TbxGhTflmS/view?usp=sharing'>Paper 2</a>
                                                    </div>
                                                )
                                                    : (
                                                        <div>
                                                            <a size="small" className="expanded-button-color" href='https://drive.google.com/file/d/1XK7yovrTipIRox5dSI4kNJNMapN6PZLq/view?usp=sharing'>Paper 1  </a>
                                                            <a size="small" className="expanded-button-color" href='https://drive.google.com/file/d/16Vxo-QvR-wG5OcZ1LNOqw_TbxGhTflmS/view?usp=sharing'>Paper 2</a>
                                                        </div>
                                                    )
                                                }

                                                <ExpandMore
                                                    expand={expanded.p6}
                                                    onClick={() => handleExpandClick('p6')}
                                                    aria-expanded={expanded.p6}
                                                    aria-label="show more"
                                                    className="dropdown"
                                                >
                                                    <ExpandMoreIcon />
                                                </ExpandMore>
                                            </CardActions>
                                            <Collapse in={expanded.p6} timeout="auto" unmountOnExit>
                                                <CardContent>
                                                    <DescriptionText className='description-text' expanded={expanded.p6}>
                                                        Paper 1 compares two research designs: randomized control trial and
                                                        non-experimental research design. This paper displays how the results
                                                        of non-experimental research design should be received skeptically. <br /><br />
                                                        Paper 2 examines the effect of the Minimum Legal Drinking Age (MLDA) on the
                                                        proportion of th epopulation that drinks on the reduction of various crimes.
                                                        To display the causality of the MLDA, the paper discusses the results of
                                                        a regression discontinuity model.
                                                    </DescriptionText>
                                                </CardContent>
                                            </Collapse>
                                        </Card>
                                    </div>
                                </Paper>
                            </Stack>
                        </div>
                        <div className='column'></div>
                    </div>
                </div>
            )
            }
        </main >
    );
}

export default Projects;
