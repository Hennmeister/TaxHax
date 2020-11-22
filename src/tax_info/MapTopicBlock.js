import React, { Component } from 'react'
import classes from './TopicBlock.module.css'
import MapQuestion from './Question/MapQuestion'
import Answer from './Answer/Answer'

export default class MapTopicBlock extends Component {
    state = {
        showAnswer: false,
        answer: '',
        explanation: '',
    }
    showAnswer = (resp) => {
        this.setState({
            answer: resp.answer,
            explanation: resp.explanation,
            showAnswer: true,
        })
    }

    render() {
        let answer = this.state.showAnswer ? (
            <Answer
                answer={this.state.answer}
                explanation={this.state.explanation}
                useList={this.props.useList}
                ImgLayout={this.props.ImgPos}
                image={this.props.image}
                link={this.props.link}
            ></Answer>
        ) : null
        let { layout, question, responses, topic } = this.props
        return (
            <div className={classes.Block}>
                <MapQuestion
                    q={question}
                    responses={responses}
                    topic={topic}
                    responseHandler={(resp) => this.showAnswer(resp)}
                ></MapQuestion>
                {answer}
            </div>
        )
    }
}
