import React, { Component } from 'react'

import Question from './Question'
import questionList from './QuestionList'

export default class TaxQuiz extends Component {
    state = {
        questionIndex: 0
    }

    responseHandler = () => {
        this.setState(prevState => ({
            questionIndex: prevState.questionIndex + 1
        }));
    }

    render() {
        return (
            <div>
                <h1>Tax Quiz</h1>
                <Question responseHandler={this.responseHandler} q={questionList[this.state.questionIndex].question} responseType="yn"></Question>
                { /* <Question q="Whats ur name" responseType="other"></Question> */}
            </div>
        )
    }
}
