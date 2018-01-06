import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {black} from '../utils/colors'

class TakeQuiz extends Component {
  constructor(props) {
    super(props);
    const {deck, questionNumber, displayQuestion} = this.props.navigation.state.params;
    this.state = {
      deck,
      questionNumber,
      question: deck.questions[questionNumber].question,
      answer: deck.questions[questionNumber].answer,
      displayQuestion
    };
  }

  static navigationOptions = () => {
    return { title: 'Quiz' }
  };

  _onPressCorrectIncorrectButton = () => {
    const {deck, questionNumber} = this.state;
    const nextQuestionNumber = questionNumber + 1;
    if (nextQuestionNumber >= deck.questions.length) {
      this.props.navigation.navigate('DeckDetails', {entryId: deck.title})
    } else {
      this.props.navigation.navigate('TakeQuiz', {deck, questionNumber: nextQuestionNumber, displayQuestion: true});
    }
  };

  _onPressQuestionAnswerButton = () => {
    const {deck, questionNumber} = this.state;
    this.props.navigation.navigate('TakeQuiz', {deck, questionNumber: questionNumber, displayQuestion: !this.state.displayQuestion});
  };

  render() {
    const {deck, questionNumber} = this.state;
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.labelText}>
          {questionNumber+1} / {deck.questions.length}
        </Text>
        {this.state.displayQuestion ?
        <Text style={styles.labelText}>
          {this.state.question}
        </Text>
          :
        <Text style={styles.labelText}>
          {this.state.answer}
        </Text>
        }
        <TouchableOpacity
          onPress={this._onPressQuestionAnswerButton}
          style={styles.questionAnswerButton}>
          <Text style={styles.buttonText}>{this.state.displayQuestion ? 'Answer' : 'Question'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._onPressCorrectIncorrectButton}
          style={styles.correctButton}>
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._onPressCorrectIncorrectButton}
          style={styles.inCorrectButton}>
          <Text style={styles.buttonText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  labelText: {
    color: 'black',
    fontSize: 24,
    padding: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
    padding: 5,
    textAlign: 'center',
  },
  questionAnswerButton: {
    width: 260,
    backgroundColor:'blue',
    borderRadius:15,
    borderWidth:5,
    borderColor:'blue'
  },
  correctButton: {
    width: 260,
    backgroundColor:'green',
    borderRadius:15,
    borderWidth:5,
    borderColor:'green'
  },
  inCorrectButton: {
    width: 260,
    backgroundColor:'red',
    borderRadius:15,
    borderWidth:5,
    borderColor:'red'
  },
});

export default TakeQuiz;