import React, {Component} from 'react';
import DeckListItem from './DeckListItem'
import {getDeck} from "../utils/api";
import {AppLoading} from 'expo';
import {View, TouchableOpacity, Text, Alert, StyleSheet} from 'react-native';

class DeckDetails extends Component {
  state = {
    ready: false,
  };

  _onAddCardPressButton = () => {
    const {entryId} = this.props.navigation.state.params;
    this.props.navigation.navigate('AddCard', {entryId});
  };

  _onStartQuizPressButton = (deck) => {
    this.props.navigation.navigate('TakeQuiz', {deck, questionNumber: 0});
  };

  static navigationOptions = ({navigation}) => {
    const {entryId} = navigation.state.params;
    return {
      title: entryId
    }
  };

  componentDidMount () {
    const {entryId} = this.props.navigation.state.params;
    getDeck(entryId)
      .then((deck) => this.setState(() => ({ready: true, deck})))
  }

  render() {
    const { ready, deck } = this.state;

    if (ready === false) {
      return <AppLoading />
    }

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
          <Text style={styles.startQuizText}>Take Quiz</Text>
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

export default DeckDetails;