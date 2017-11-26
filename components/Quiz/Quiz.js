import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from '../Card/Card';
import QuizCounter from '../QuizCounter/QuizCounter';
import styled from 'styled-components/native';
import { gray, white } from '../../utils/colors';
import TextButton from '../../components/TextButton/TextButton';

const QuizContainer = styled.View`
  flex: 1;
  background-color: ${gray};
  padding: 20px;
`;
const CardContainer = styled.View`
  flex: 1;
  margin-top: 10px;
  border-radius: 2px;
  background-color: ${white};
  align-items: center; 
  justify-content: center;
`;

class Quiz extends Component {
  state = {
    currentQuestion: null,
    correct: 0,
    percent: null,
    counter: 1
  };

  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;

    return {
      title: `${deck.title} quiz`
    };
  };

  componentDidMount() {
    const { deck } = this.props.navigation.state.params;

    this.setState({
      currentQuestion: deck.questions[0],
      correct: 0,
      percent: null,
      counter: 1
    });
  }

  saveAnswer = (answer) => {
    let currentQuestion = null;
    const { deck } = this.props.navigation.state.params;
    let { correct, percent, counter } = this.state;

    if (answer) {
      correct += 1;
    }

    if (counter < deck.questions.length) {
      counter++;
      currentQuestion = deck.questions[counter - 1];

      this.setState({
        currentQuestion,
        correct,
        percent,
        counter
      });
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          percent: Number(prevState.correct * 100 / deck.questions.length).toFixed(1)
        }
      });
    }
  };

  render() {
    const { deck } = this.props.navigation.state.params;
    const { currentQuestion, percent, counter } = this.state;
    const isShowCard = currentQuestion && !percent;

    return (
      <QuizContainer>
        <QuizCounter>{counter}/{deck.questions.length}</QuizCounter>
        {isShowCard && (
          <Card question={currentQuestion} onAnswered={this.saveAnswer} />
        )}
        {
          percent && (
            <CardContainer>
              <Text>Percent of correct answers {percent}%</Text>
              <TextButton style={{marginTop: 20}} onPress={() => this.props.navigation.goBack()}>Back</TextButton>
            </CardContainer>
          )
        }
      </QuizContainer>
    )
  }
}

export default Quiz;