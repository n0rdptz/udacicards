import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Animated, Easing } from 'react-native';
import { white, red, green } from '../../utils/colors';
import styled from 'styled-components/native';
import TextButton from '../../components/TextButton/TextButton';

const ComponentContainer = styled.View`
  flex: 1;
  margin-top: 10px;
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
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderRadius: 2,
    padding: 20,
    backgroundColor: white,
    alignItems: 'center',
  }
});

class Card extends Component {
  state = {
    face: true,
    scaleValue: new Animated.Value(1)
  };
  onPressBtn(answer) {
    this.props.onAnswered(answer);
  }
  flipCard() {
    Animated.timing(
      this.state.scaleValue,
      {
        easing: Easing.easeIn,
        duration: 150,
        toValue: 0,
      }
    ).start(() => this.flip());
  }

  flip() {
    this.setState(prevState => {
      return {face: !prevState.face};
    });
    Animated.timing(
      this.state.scaleValue,
      {
        easing: Easing.bounce,
        duration: 400,
        toValue: 1,
      }
    ).start();
  }

  render() {
    const { face, scaleValue } = this.state;
    const { question } = this.props;

    return (
      <ComponentContainer>
        <Animated.View style={[styles.cardContainer, {transform: [{scaleX: scaleValue}]}]}>
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
        </Animated.View>
      </ComponentContainer>
    )
  }
}

export default Card;