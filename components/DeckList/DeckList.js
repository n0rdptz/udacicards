import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ListDeck from '../Deck/ListDeck';
import { white } from '../../utils/colors';
import { connect } from 'react-redux';
import { getDecks } from "../../actions/index";

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getDecks());
  }

  keyExtractor = (item, index) => index;

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
  }
});

const mapStateToProps = decks => {
  return {decks};
};

export default connect(mapStateToProps)(DeckList);