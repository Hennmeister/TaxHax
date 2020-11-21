import React, { Component } from 'react'
import classes from './LandingPage.module.css'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

import { Box } from '@material-ui/core'

export default class LandingPage extends Component {
    render() {
        return (
            <div className={classes.PageWrapper}>
                <h1 className={classes.Title}>Taxes? Huh?</h1>
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
        )
    }
}
