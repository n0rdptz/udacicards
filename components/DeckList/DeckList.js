import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ListDeck from '../Deck/ListDeck';
import {gray, green, white} from '../../utils/colors';

class DeckList extends Component {
  keyExtractor = (item, index) => index;

  renderSeparator = () => (<View style={styles.separator} />);

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={[1, 2, 3, 4, 5, 6, 7]}
          //ItemSeparatorComponent={this.renderSeparator}
          renderItem={({item}) =>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SingleDeck')}>
              <ListDeck />
            </TouchableOpacity>
          }
          keyExtractor={this.keyExtractor}>
        </FlatList>
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
  }
});

export default DeckList;