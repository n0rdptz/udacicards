import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { white, red, darkGray } from '../../utils/colors';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

const StartBtnText = styled.Text`
  color: ${white};
`;

class SingleDeck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;

    return {
      title: deck.title
    }
  };

  render() {
    const { title } = this.props.navigation.state.params.deck;
    const deck = this.props.decks[title];

    return (
      <View style={styles.deck}>
        <View style={styles.deckText}>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.deckCards}>{deck.questions.length ? deck.questions.length : 0} cards</Text>
        </View>

        <View style={styles.btnsContainer}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(red)}
            onPress={() => this.props.navigation.navigate('NewCard', {deck})} >
            <View style={styles.addBtn}>
              <Text>Add card</Text>
            </View>
          </TouchableNativeFeedback>
          {deck.questions.length > 0 && (
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple(white)}
              onPress={() => this.props.navigation.navigate('Quiz', {deck})}>
              <View style={styles.startBtn}>
                <StartBtnText>Start quiz</StartBtnText>
              </View>
            </TouchableNativeFeedback>
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
  deckText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deckTitle: {
    fontSize: 20,
    textAlign: 'center'
  },
  deckCards: {
    fontSize: 14,
    color: darkGray
  },
  addBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
  },
  startBtn: {
    marginLeft: 10,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: red
  },
  btnsContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end'
  }
});

const mapStateToProps = decks => {
  return {decks};
};

export default connect(mapStateToProps)(SingleDeck);