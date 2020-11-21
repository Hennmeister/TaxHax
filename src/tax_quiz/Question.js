import React, { Component } from 'react'
import classes from './Question.module.css'

import { Box, Button } from '@material-ui/core'

export default class Question extends Component {
    state = {
        InAnimation: false,
    }

    clickHandler = () => {
        this.setState({InAnimation: true}, () => setTimeout(() => {
            this.setState({InAnimation: false})
            this.props.responseHandler()
        }, 750))
    }

    render() {
        let boxClasses = [ classes.QuestionBox ]
        if(this.state.InAnimation) {
            boxClasses.push(classes.SlideTransition)
        }

        const responseButtons =
            this.props.responseType === 'yn' ? (
                <Box>
                    <Button onClick={this.clickHandler}>Yes</Button>
                    <Button>No</Button>
                </Box>
            ) : (
                <Button>Don't recognize this type</Button>
            )

        return (
            <Box className={boxClasses.join(' ')}>
                <h1 className={classes.Question}>{this.props.q}</h1>
                <h2>Secondary header</h2>
                {responseButtons}
            </Box>
        )
    }
}
