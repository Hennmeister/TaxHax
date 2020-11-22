import React, { Component } from 'react'
import classes from './TopicBlock.module.css'
import Question from './Question/Question'
import Answer from './Answer/Answer'

export default class TopicBlock extends Component {
    state = {
        showAnswer: false,
        answer: "",
        explanation: "",
        link: {}
    }
    showAnswer = (resp) => {
        this.setState({answer: resp.answer, explanation: resp.explanation, link: resp.link, showAnswer: true})
    }

    render() {
        let answer = this.state.showAnswer ? <Answer answer={this.state.answer} explanation={this.state.explanation} link={this.state.link} useList={this.props.useList} imgLayout={this.props.imgPos} image={this.props.image}></Answer> : null
        let { layout, question, responses, topic } = this.props
        return (
            <div className={classes.Block}>
                <Question q={question} responses={responses} topic={topic} responseHandler={(resp) => this.showAnswer(resp)}></Question>
                {answer}
            </div>
        )
    }
}
