import React, { Component } from 'react'
import classes from './LandingPage.module.css'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

export default class LandingPage extends Component {
    render() {
        return (
            <div className={classes.PageWrapper}>
                <h1 className={classes.Title}>Taxes? Huh?</h1>
                <ButtonGroup >
                    <Button variant="contained" color="primary">Learn About Taxes</Button>
                    <Button variant="contained" color="primary">What Do I Do!?</Button>
                </ButtonGroup>
            </div>
        )
    }
}
