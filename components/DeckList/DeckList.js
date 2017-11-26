import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import ListDeck from '../Deck/ListDeck';
import { red, white } from '../../utils/colors';
import { connect } from 'react-redux';
import { getDecks, removeDecks } from "../../actions/index";
import styled from 'styled-components/native';

const StartBtnText = styled.Text`
  color: ${white};
`;

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getDecks());
  }

  keyExtractor = (item, index) => index;

  removeDecks() {
    const { dispatch } = this.props;

    dispatch(removeDecks());
  }

  render() {
    let decks = [];
    for (let deck in this.props.decks) {
      if (this.props.decks.hasOwnProperty(deck)) {
        decks.push(this.props.decks[deck]);
      }
    }

    return (
      <View style={styles.container}>
        {decks && decks.length > 0
          ? (
            <View style={{flex: 1}}>
              <FlatList
                style={styles.list}
                data={decks}
                renderItem={({item}) =>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('SingleDeck', {deck: item})}>
                    <ListDeck deck={item} />
                  </TouchableOpacity>
                }
                keyExtractor={this.keyExtractor}>
              </FlatList>

              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(white)}
                onPress={() => this.removeDecks()}>
                <View style={styles.startBtn}>
                  <StartBtnText>Remove decks</StartBtnText>
                </View>
              </TouchableNativeFeedback>
            </View>
          )
          : (
            <View style={styles.message}>
              <Text style={styles.messageText}>You have not created any decks yet</Text>
            </View>
          )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  list: {
    flex: 1,
  },
  separator: {
    height: 10
  },
  message: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageText: {
    fontSize: 18,
    textAlign: 'center'
  },
  startBtn: {
    marginTop: 20,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: red
  },
});

const mapStateToProps = decks => {
  return {decks};
};

export default connect(mapStateToProps)(DeckList);