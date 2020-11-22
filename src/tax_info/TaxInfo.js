import { Typography, Box } from '@material-ui/core'
import React, { Component } from 'react'
import classes from './TaxInfo.module.css'
import TopicBlock from './TopicBlock'
import Particles from 'react-tsparticles'
import '../landing_page/Particles.css'
import Question from './Question/Question'
import Answer from './Answer/Answer'
import Canada from '../Map/Canada'

import questions from './questions/questions'
import MapQuestion from './Question/MapQuestion'
import MapTopicBlock from './MapTopicBlock'

export default class TaxInfo extends Component {
    state = {
        province: null,
    }

    mapHandler = (event) => {
        this.setState({ province: event.target.id })
    }

    renderQuestions = () => {
        let qs = []
        for (let idx in questions) {
            const q = questions[idx]
            const element = (
                <TopicBlock
                    key={idx}
                    question={q.question}
                    responses={q.responses}
                    image={q.image}
                    topic={q.topic}
                    link={q.link}
                ></TopicBlock>
            )
            qs.push(element)
        }
        const canmap = (
            <MapTopicBlock
                question="Are You Older Than 18?"
                responses={[
                    {
                        option: 'Yes',
                        answer: 'Then You Have To Do Taxes!',
                        explanation: 'Any Canadian Citizen over 18 blah blah',
                        link: {
                            title: 'Epic Resource',
                            url: 'playtrivia.games',
                        },
                    },
                    {
                        option: 'No',
                        answer: 'THEN DONT WORRY',
                        explanation:
                            'Canadian Citizens under 18 dont pay taxes $ Canadian Citizens under 18 dont pay taxes $ Canadian Citizens under 18 dont pay taxes',
                        link: {
                            title: 'Epic Resource',
                            url: 'playtrivia.games',
                        },
                    },
                ]}
                image="q1_img.png"
                topic="Personal Info"
                useList={true}
                imgPos="left"
            />
        )
        qs.splice(2, 0, canmap)
        return qs
    }

    render() {
        return (
            <div className={classes.wrapper}>
                <Particles
                    style={{ position: 'fixed' }}
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
                <h1
                    style={{
                        position: 'fixed',
                        right: '5px',
                        top: '-20px',
                        color: 'white',
                        textDecorationLine: 'underline',
                    }}
                >
                    TaxHax
                </h1>

                <div
                    style={{
                        position: 'relative',
                    }}
                >
                    {/* <Question q={question} responses={responses} topic={topic} responseHandler={(resp) => this.showAnswer(resp)}></Question> */}
                </div>
                {this.renderQuestions()}
            </div>
        )
    }
}
