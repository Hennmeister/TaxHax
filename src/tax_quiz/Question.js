import React, { Component } from 'react'
import classes from './Question.module.css'

import { Box, Button } from '@material-ui/core'

export default class Question extends Component {
    render() {
        const responseButtons =
            this.props.responseType === 'yn' ? (
                <Box>
                    <Button>Yes</Button>
                    <Button>No</Button>
                </Box>
            ) : (
                <Button>Don't recognize this type</Button>
            )

        return (
            <Box>
                <h1 className={classes.Question}>{this.props.q}</h1>
                <h2>Secondary header</h2>
                {responseButtons}
            </Box>
        )
    }
}
