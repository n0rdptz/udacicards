import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { white } from '../../utils/colors';
import styled from 'styled-components/native';

const DeckView = styled.View`
  margin: 1px 1px 10px;
  padding: 20px;
  border-radius: 2px;
  background-color: ${white};
  justify-content: center;
  align-items: center;
  elevation: 3;
`;

function ListDeck(props) {
  const { deck: { title, questions: { length }} } = props;
  return (
    <DeckView>
      <Text>{title}</Text>
      <Text>{length ? length : 0} cards</Text>
    </DeckView>
  )
}

export default ListDeck;