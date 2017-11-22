import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { yellow, white } from '../../utils/colors';
import styled from 'styled-components/native';

const Btn = styled.TouchableOpacity`
  padding: 10px 30px;
  background-color: ${yellow};
  border-radius: 2px;
`;
const BtnText = styled.Text`
  text-align: center;
  color: ${white};
`;

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <Btn style={style} onPress={onPress}>
      <BtnText>{children}</BtnText>
    </Btn>
  )
}
