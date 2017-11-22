import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from '../Card/Card';
import QuizCounter from '../QuizCounter/QuizCounter';
import styled from 'styled-components/native';
import { gray } from '../../utils/colors';

const QuizContainer = styled.View`
  flex: 1;
  background-color: ${gray};
  padding: 20px;
`;

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Deck quiz`
  });

  render() {
    return (
      <QuizContainer>
        <QuizCounter>2/2</QuizCounter>
        <Card />
      </QuizContainer>
    )
  }
}

export default Quiz;