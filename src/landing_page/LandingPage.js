import React, { Component } from 'react'
import classes from './LandingPage.module.css'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Particles from 'react-tsparticles'
import './Particles.css'
import logo from './logo.png'

import { Box } from '@material-ui/core'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Particles
                    id="tsparticles"
                    options={{
                        background: {
                            color: {
                                value: '#014421',
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
                <div className={classes.PageWrapper}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <ButtonGroup>
                        <Box mr={5}>
                            <Button
                                variant="contained"
                                color="white"
                                href="/tax-info"
                            >
                                Learn About Taxes
                            </Button>
                        </Box>
                        <Box>
                            <Button
                                variant="contained"
                                color="white"
                                href="/tax-quiz"
                            >
                                Take the Tax Quiz!
                            </Button>
                        </Box>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}
