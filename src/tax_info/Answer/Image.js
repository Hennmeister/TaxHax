import React, { Component } from 'react'
import classes from './Answer.module.css'
export default class Image extends Component {
    render() {
        console.log("../assets/" + this.props.img)
        return (
            <div className={classes.Image}>
                <img src={process.env.PUBLIC_URL + "/assets/q1_img.png"} alt="Finance Image"/>
            </div>
        )
    }
}
