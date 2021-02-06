import React, { Component } from "react";

import JeopardyService from "../jeopardyService";
class Jeopardy extends Component {
 
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      submitted: false,
      formData: {
        answer: "",
      },
    };
  }

  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  componentDidMount() {
    this.getNewQuestion();
  }

  updateScore =(event) {
      event.preventDefault();
      let dataAnswer =this.state.data.answer.toLowerCase();
      let userAnswer =this.state.answer.toLowerCase();
       if (dataAnswer === userAnswer)
        this.setState((state, props) => ({
            score: state.score + state.data.value,
            answer:''
        }));
    } else {
        
    }
         
  }