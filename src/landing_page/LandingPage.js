import React, { Component } from 'react'
import classes from './LandingPage.module.css'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Particles from 'react-tsparticles'
import './Particles.css'

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
                                value: '#0d47a1',
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
                                type: '$',
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
                    <h1 className={classes.Title}>TaxHax</h1>
                    <ButtonGroup>
                        <Box mr={10}>
                            <Button
                                variant="contained"
                                color="primary"
                                href="/tax-info"
                            >
                                Learn About Taxes
                            </Button>
                        </Box>
                        <Box>
                            <Button
                                variant="contained"
                                color="primary"
                                href="/tax-quiz"
                            >
                                What Do I Do!?
                            </Button>
                        </Box>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}
