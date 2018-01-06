import React, {Component} from 'react';
import DeckListItem from './DeckListItem'
import {View, TouchableOpacity, Text, Alert, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class DeckDetails extends Component {
  _onAddCardPressButton = () => {
    const {entryId} = this.props.navigation.state.params;
    this.props.navigation.navigate('AddCard', {entryId});
  };

  _onStartQuizPressButton = (deck) => {
    this.props.navigation.navigate('TakeQuiz', {deck, questionNumber: 0, displayQuestion: true, score: 0});
  };

  static navigationOptions = ({navigation}) => {
    const {entryId} = navigation.state.params;
    return {
      title: entryId
    }
  };

  render() {
    const {entryId} = this.props.navigation.state.params;
    const deck = this.props.decks[entryId];

    return (
      <View style={{alignItems: 'center'}}>
        <DeckListItem
          title={deck.title}
          count={deck.questions.length}
        />
        <TouchableOpacity
          onPress={this._onAddCardPressButton}
          style={styles.addCardButton}>
          <Text style={styles.addCardButtonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this._onStartQuizPressButton(deck)}
          style={styles.startQuizButton}>
          <Text style={styles.startQuizText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  addCardButton: {
    width: 260,
    backgroundColor:'white',
    borderRadius:15,
    borderWidth:5,
    borderColor:'white'
  },
  addCardButtonText: {
    color: 'black',
    fontSize: 32,
    padding: 5,
    textAlign: 'center',
  },
  startQuizButton: {
    width: 260,
    backgroundColor:'black',
    borderRadius:15,
    borderWidth:5,
  },
  startQuizText: {
    color: 'white',
    fontSize: 32,
    padding: 5,
    textAlign: 'center',
  },
});

function mapStateToProps ({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckDetails);