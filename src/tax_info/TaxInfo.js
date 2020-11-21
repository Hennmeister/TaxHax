import { Typography, Box } from '@material-ui/core'
import React, { Component } from 'react'

export default class TaxInfo extends Component {
    displayFederalTaxInfo() {
        return <Typography>Federal taxes are ...</Typography>
    }

    render() {
        return (
            <div>
                <h1>Tax Info</h1>
                <Box flexDirection="row">
                    <Box>{this.displayFederalTaxInfo()}</Box>
                    <Box>{this.displayFederalTaxInfo()}</Box>
                </Box>
            </div>
        )
    }
}
