import React, { Component } from 'react'
import classes from './Answer.module.css'
import Image from './Image'

export default class Answer extends Component {
    render() {
        let {answer, explanation, image, link, useList, imgLayout, } = this.props
        let exp = <><h2 className={classes.Explanation}>{explanation}</h2>{link ? <a href={"//" + link.url}>{"Read More Here: " + link.title}</a> : null}</>
        if (useList) {
            let expArr = explanation.split('$')
            let listItems = expArr.slice(1).map(str => <li>{str}</li>)  
            exp = <div className={classes.Explanation}> <p>{expArr[0]}</p><ul>{listItems}</ul>{link ? <a href={"//" + link.url}>{"Read More Here: " + link.title}</a> : null}</div>
        }
        let ansBlock = imgLayout === "left" ? <><Image img={image}/>{exp} </> : <>{exp} <Image img={image}/></> 
        return (
            <div>
                <h1 className={classes.title}>{answer}</h1>
                <div className={classes.AnsWrapper}>
                    {ansBlock}
                </div>
            </div>
        )
    }
}
