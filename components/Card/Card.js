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
  height: 30px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  background-color: ${green};
`;
const IncorrectBtn = styled.View`
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  height: 30px;
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
  render() {
    const variable = true;

    return (
      <ComponentContainer>
        <CardContainer>
          {variable
            ? (<CardTextContainer>
                <CardText>Question</CardText>
                <TextButton style={{marginTop: 20}} onPress={() => {}}>Answer</TextButton>
              </CardTextContainer>)
            : (<CardTextContainer>
                <CardText>Answer</CardText>
                <TextButton style={{marginTop: 20}} onPress={() => {}}>Question</TextButton>
              </CardTextContainer>)
          }

          <BtnsContainer>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(red)} onPress={() => {}} >
              <CorrectBtn>
                <CorrectBtnText>Correct</CorrectBtnText>
              </CorrectBtn>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(white)} onPress={() => {}} >
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

const styles = StyleSheet.create({
  addBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    marginRight: 10
  },
  addBtnText: {
    color: white
  },
  startBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 30,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: red
  },
  startBtnText: {
    color: white
  }
});

export default Card;