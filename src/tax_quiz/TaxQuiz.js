import React, { Component } from 'react'

import Question from './Question'

export default class TaxQuiz extends Component {
    render() {
        return (
            <div>
                <h1>Tax Quiz</h1>
                <Question q="Are you over 18?" responseType="yn"></Question>
                <Question q="Whats ur name" responseType="other"></Question>
            </div>
        )
    }
}
