import { Typography, Box } from '@material-ui/core'
import React, { Component } from 'react'
import classes from './TaxInfo.module.css'
<<<<<<< HEAD
import TopicBlock from './TopicBlock'
import Particles from 'react-tsparticles'
import '../landing_page/Particles.css'
import Question from './Question/Question'
import Answer from './Answer/Answer'

export default class TaxInfo extends Component {
=======
import Canada from '../Map/Canada'

export default class TaxInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            province: null,
        }
    }

    mapHandler = (event) => {
        this.setState({ province: event.target.id })
    }

    displayTaxInfo1() {
        return (
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        )
    }
    displayTaxInfo2() {
        return (
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        )
    }
    displayTaxInfo3() {
        return (
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        )
    }
>>>>>>> 096393ab0082c2ff36dfb37fe13a21e23c952b51

    ageResponseHandler = (resp) => {

    }
    render() {
        return (
<<<<<<< HEAD
            <div className={classes.wrapper}>
                     <Particles
                     style={{position: "fixed"}}
                    id="tsparticles"
                    options={{
                        background: {
                            color: {
                                value: '#acfaac',
                            },
                        },
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: 'canvas',
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: 'push',
                                },
                                onHover: {
                                    enable: true,
                                    mode: 'repulse',
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: '#ffffff',
                            },
                            links: {
                                color: '#ffffff',
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: 'none',
                                enable: true,
                                outMode: 'bounce',
                                random: false,
                                speed: 6,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: 'image',
                                image: [
                                    {
                                        src:
                                            'https://www.pngkit.com/png/full/32-320453_white-dollar-sign-png.png',
                                        width: 100000,
                                        height: 120000,
                                    },
                                    {
                                        src:
                                            'https://www.pngkit.com/png/full/32-320453_white-dollar-sign-png.png',
                                        width: 1000000,
                                        height: 2000000,
                                    },
                                    {
                                        src:
                                            'https://www.pngkit.com/png/full/32-320453_white-dollar-sign-png.png',
                                        width: 100000000,
                                        height: 200000000,
                                    },
                                ],
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <h1 style={{position: "fixed", margin: "0 5px", color:"white", textDecorationLine: "underline"}}>Tax Info</h1>
                <TopicBlock
                    question="Are You Older Than 18?" 
                    responses={ [
                        {option: "Yes", answer: "Then You Have To Do Taxes!", explanation: "Any Canadian Citizen over 18 blah blah"},
                        {option: "No", answer: "THEN DONT WORRY", explanation: "Canadian Citizens under 18 dont pay taxes $ Canadian Citizens under 18 dont pay taxes $ Canadian Citizens under 18 dont pay taxes"}]}
                    image="q1_img.png"
                    topic="Personal Info"
                    useList={true}
                    imgPos="left"
                    link={{title:"Epic Resource", url:"playtrivia.games"}}>
                 </TopicBlock>
                 <TopicBlock
                    question="Do You Have All The Slips You Need?" 
                    responses={ [{option: "Yes", answer: "", explanation: ""}, {option: "No", answer: "", explanation: ""}]}
                    image=""
                    topic="Forms">
                 </TopicBlock>
                 <TopicBlock
                    question="Have You Filed Taxes Online Before?"
                    responses={ [{option: "Yes", answer: "", explanation: ""}, {option: "No", answer: "", explanation: ""}]}
                    image=""
                    topic="Filing">
                 </TopicBlock>
=======
            <div>
                <h1>Tax Info</h1>
                <h2 className={classes.InfoBlock}>Some question?</h2>
                <Box>
                    <Box>{this.displayTaxInfo1()}</Box>
                </Box>
                <h2 className={classes.InfoBlock}>Some question?</h2>
                <Box>
                    <Box>{this.displayTaxInfo2()}</Box>
                </Box>
                <h2 className={classes.InfoBlock}>Some question?</h2>
                <Box>
                    <Box>{this.displayTaxInfo3()}</Box>
                </Box>
                <h1>Currently selected province: {this.state.province}</h1>
                <Canada onClick={this.mapHandler} height="50%" />
>>>>>>> 096393ab0082c2ff36dfb37fe13a21e23c952b51
            </div>
        )
    }
}
