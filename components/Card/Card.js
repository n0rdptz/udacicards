import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { white, red, green } from '../../utils/colors';
import styled from 'styled-components/native';
import TextButton from '../../components/TextButton/TextButton';

const ComponentContainer = styled.View`
  flex: 1;
  margin-top: 10px;
`;
const CardContainer = styled.View`
  flex: 1;
  border-radius: 2px;
  padding: 20px;
  background-color: ${white};
  align-items: center; 
`;
const CardTextContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const CardText = styled.Text`
  font-size: 18px;
  text-align: center;
`;
const BtnsContainer = styled.View`
`;
const CorrectBtn = styled.View`
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  background-color: ${green};
`;
const IncorrectBtn = styled.View`
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  background-color: ${red};
  margin-top: 10px;
`;
const CorrectBtnText = styled.Text`
  color: ${white};
`;
const IncorrectBtnText = styled.Text`
  color: ${white};
`;

class Card extends Component {
  state = {
    face: true,
  };
  onPressBtn(answer) {
    this.props.onAnswered(answer);
  }
  flipCard() {
    this.setState(prevState => {
      return {face: !prevState.face};
    });
  }

  render() {
    const { face } = this.state;
    const { question } = this.props;

    return (
      <ComponentContainer>
        <CardContainer>
          {face
            ? (<CardTextContainer>
                <CardText>{question.question}</CardText>
                <TextButton style={{marginTop: 20}} onPress={() => this.flipCard()}>Answer</TextButton>
              </CardTextContainer>)
            : (<CardTextContainer>
                <CardText>{question.answer}</CardText>
                <TextButton style={{marginTop: 20}} onPress={() => this.flipCard()}>Question</TextButton>
              </CardTextContainer>)
          }

          <BtnsContainer>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(red)} onPress={() => this.onPressBtn(true)}>
              <CorrectBtn>
                <CorrectBtnText>Correct</CorrectBtnText>
              </CorrectBtn>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(white)} onPress={() => this.onPressBtn(false)} >
              <IncorrectBtn>
                <IncorrectBtnText>Incorrect</IncorrectBtnText>
              </IncorrectBtn>
            </TouchableNativeFeedback>
          </BtnsContainer>
        </CardContainer>
      </ComponentContainer>
    )
  }
}

export default Card;