import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  render() {
    console.log(quizData.quiz_questions[0].instruction_text);
    console.log(quizData.quiz_questions[0]);

    return (
      <div>
        <QuizQuestion quiz_question={quizData.quiz_questions[0]} />
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }
}

export default Quiz;
