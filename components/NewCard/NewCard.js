import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { white, red } from '../../utils/colors';

class NewCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput style={styles.question} placeholder="Question" editable = {true} />
          <TextInput style={styles.answer} placeholder="Answer" editable = {true} />
        </View>

        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(white)}>
          <View style={styles.addBtn}>
            <Text style={styles.addBtnText}>Add</Text>
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
  question: {
    padding: 10,
    fontSize: 16
  },
  answer: {
    marginTop: 10,
    padding: 10,
    fontSize: 16
  },
  addBtn: {
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
  addBtnText: {
    color: white
  }
};

export default NewCard;