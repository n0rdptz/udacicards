import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableNativeFeedback, KeyboardAvoidingView  } from 'react-native';
import { white, red } from '../../utils/colors';
import { connect } from 'react-redux';
import { addCard } from "../../actions/index";

class NewCard extends Component {
  state = {
    question: '',
    answer: ''
  };

  saveQuestion () {
    const { deck } = this.props.navigation.state.params;
    const { dispatch } = this.props;

    dispatch(
      addCard(
        deck.title,
        {
          question: this.state.question,
          answer: this.state.answer
        }
      )
    );
    this.props.navigation.goBack();
  }

  onQuestionChange(question) {
    this.setState(prevState => {
      return {
        ...prevState,
        question
      }
    })
  }

  onAnswerChange(answer) {
    this.setState(prevState => {
      return {
        ...prevState,
        answer
      }
    })
  }

  render() {
    const { deck } = this.props.navigation.state.params;

    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.question}
            placeholder="Question"
            editable = {true}
            onChangeText={(question) => this.onQuestionChange(question)}
            value={this.state.question}
          />
          <TextInput
            style={styles.answer}
            placeholder="Answer"
            editable = {true}
            onChangeText={(answer) => this.onAnswerChange(answer)}
            value={this.state.answer}
          />
        </View>

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(white)}
          onPress={() => this.saveQuestion()}>
          <View style={styles.addBtn}>
            <Text style={styles.addBtnText}>Add</Text>
          </View>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
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

export default connect()(NewCard);