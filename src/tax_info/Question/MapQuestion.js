import React, { Component } from 'react'
import classes from './Question.module.css'

import { Box, Button, ButtonGroup } from '@material-ui/core'
import Canada from '../../Map/Canada'
import mapAnswers from '../mapAnswers/mapAnswers'

export default class MapQuestion extends Component {
    state = {
        InAnimation: false,
        province: null,
    }

    clickHandler = (resp) => {
        this.setState({ InAnimation: true }, () =>
            setTimeout(() => {
                this.props.responseHandler(resp)
            }, 750)
        )
    }

    mapHandler = (event) => {
        this.setState({ province: event.target.id })
    }

    render() {
        let boxClasses = [classes.QuestionBox]
        if (this.state.InAnimation) {
            boxClasses.push(classes.SlideTransition)
        }

        return (
            <Box className={boxClasses.join(' ')}>
                <h1 className={classes.Question}>{this.props.q}</h1>
                <h4>Currently selected province: {this.state.province}</h4>
                <Canada onClick={this.mapHandler} />
                <Button
                    onClick={() =>
                        this.clickHandler(mapAnswers[this.state.province])
                    }
                    style={{
                        width: '20em',
                        height: '5em',
                        fontSize: 'inherit',
                    }}
                >
                    That's my province/territory
                </Button>
                <h2>{this.props.topic}</h2>
            </Box>
        )
    }
}
