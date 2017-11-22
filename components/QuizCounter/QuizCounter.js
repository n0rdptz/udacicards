import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { white } from '../../utils/colors';

const Container = styled.View`
`;
const Counter = styled.Text`
  text-align: left;
  font-size: 18px;
`;

export default function TextButton ({ children }) {
  return (
    <Container>
      <Counter>{children}</Counter>
    </Container>
  )
}