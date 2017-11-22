import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { white, red } from '../../utils/colors';

class NewDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.text}>What is the title of your new deck?</Text>
          <TextInput style={styles.input} placeholder="Deck title" editable = {true} />
        </View>

        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(white)}>
          <View style={styles.createBtn}>
            <Text style={styles.createBtnText}>Create</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: white,
    padding: 20
  },
  form: {},
  text: {
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center'
  },
  input: {
    marginTop: 10,
    padding: 10,
    fontSize: 16
  },
  createBtn: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: red
  },
  createBtnText: {
    color: white
  }
};

export default NewDeck;