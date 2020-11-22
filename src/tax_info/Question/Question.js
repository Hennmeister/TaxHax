import React, { Component } from 'react'
import classes from './Question.module.css'

import { Box, Button, ButtonGroup } from '@material-ui/core'

export default class Question extends Component {
    state = {
        InAnimation: false,
    }

    clickHandler = (resp) => {
        this.setState({InAnimation: true}, () => setTimeout(() => {
            this.props.responseHandler(resp)
        }, 750))
    }

    render() {
        let boxClasses = [ classes.QuestionBox ]
        if(this.state.InAnimation) {
            boxClasses.push(classes.SlideTransition)
        }
        const responseButtons = this.props.responses.map(resp => 
            <Button onClick={() => this.clickHandler(resp)} style={{width:"7em", height:"5em", fontSize: "inherit"}}>{resp.option}</Button>
        )

        return (
            <Box className={boxClasses.join(' ')}>
                <h1 className={classes.Question}>{this.props.q}</h1>
                <ButtonGroup size="large" color="primary" aria-label="outlined primary button group">{responseButtons}</ButtonGroup>
                <h2>{this.props.topic}</h2>
                
            </Box>
        )
    }
}
