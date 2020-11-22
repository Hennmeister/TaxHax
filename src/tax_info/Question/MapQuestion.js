import React, { Component } from 'react'
import classes from './Question.module.css'

import { Box, Button, ButtonGroup } from '@material-ui/core'
import Canada from '../../Map/Canada'
import mapAnswers from '../mapAnswers/mapAnswers'

export default class MapQuestion extends Component {
    state = {
        InAnimation: false,
        province: null,
        show: true,
    }

    clickHandler = (resp) => {
        this.setState({ InAnimation: true, show: false }, () =>
            setTimeout(() => {
                this.props.responseHandler(resp)
            }, 750)
        )
    }

    mapHandler = (event) => {
        this.setState({ province: event.target.id, show: true })
    }

    render() {
        let boxClasses = [classes.QuestionBox]
        if (this.state.InAnimation) {
            boxClasses.push(classes.SlideTransition)
        }

        return (
            <Box className={boxClasses.join(' ')}>
                <h4>Please choose your province/territory: </h4>
                <div style={{ position: 'absolute', top: '250px' }}>
                    {this.state.show && this.state.province}
                </div>
                <Canada onClick={this.mapHandler} width="100%" />
                <Button
                    color="primary"
                    onClick={() =>
                        this.clickHandler(mapAnswers[this.state.province])
                    }
                    disabled={!this.state.province}
                    style={{
                        width: '20em',
                        height: '5em',
                        fontSize: 'inherit',
                    }}
                >
                    Confirm my province/territory
                </Button>
            </Box>
        )
    }
}
