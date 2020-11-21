import { Typography, Box } from '@material-ui/core'
import React, { Component } from 'react'
import classes from './TaxInfo.module.css'

export default class TaxInfo extends Component {
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

    render() {
        return (
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
            </div>
        )
    }
}
