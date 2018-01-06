import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {black} from '../utils/colors'
import { NavigationActions } from 'react-navigation'

class TakeQuiz extends Component {
  constructor(props) {
    super(props);
    const {deck, questionNumber, displayQuestion, score} = this.props.navigation.state.params;
    this.state = {
      deck,
      questionNumber,
      question: deck.questions[questionNumber].question,
      answer: deck.questions[questionNumber].answer,
      displayQuestion,
      score
    };
  }

  static navigationOptions = () => {
    return { title: 'Quiz' }
  };

  _onPressCorrectButton = () => {
    this._onPress(this.state.score + 1);
  };

  _onPressIncorrectButton = () => {
    this._onPress(this.state.score);
  };

  _onPress(score) {
    const {deck, questionNumber} = this.state;
    const nextQuestionNumber = questionNumber + 1;
    const startOverAction = NavigationActions.reset({
      index: 2,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
        NavigationActions.navigate({
          routeName: 'DeckDetails',
          params: {
            entryId: deck.title
          }
        }),
        NavigationActions.navigate({
          routeName: 'TakeQuiz',
          params: {
            deck,
            questionNumber: 0,
            displayQuestion: true,
            score: 0}
        }),
      ],
    });
    const goBackAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
        NavigationActions.navigate({
          routeName: 'DeckDetails',
          params: {
            entryId: deck.title
          }
        }),
      ],
    });
    if (nextQuestionNumber >= deck.questions.length) {
      const scorePercentage = (100 * (score / deck.questions.length));
      Alert.alert(
        'Quiz Complete',
        'Your score is ' + scorePercentage.toFixed(2) + '%',
        [
          {text: 'Start Over', onPress: () => this.props.navigation.dispatch(startOverAction)},
          {text: 'Go Back', onPress: () => this.props.navigation.dispatch(goBackAction)},
        ],
        { cancelable: false }
      );
    } else {
      this.props.navigation.navigate('TakeQuiz', {deck, questionNumber: nextQuestionNumber, displayQuestion: true, score});
    }
  }
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
          <Text style={styles.buttonText}>{this.state.displayQuestion ? 'Show Answer' : 'Show Question'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._onPressCorrectButton}
          style={styles.correctButton}>
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this._onPressIncorrectButton}
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