import React, {Component} from 'react';
import DeckListItem from './DeckListItem'
import {getDeck} from "../utils/api";
import {AppLoading} from 'expo';
import {View, TouchableOpacity, Text, Alert, StyleSheet} from 'react-native';

class DeckDetails extends Component {
  state = {
    ready: false,
  };

  _onPressButton = () => {
    const {entryId} = this.props.navigation.state.params;
    this.props.navigation.navigate('AddCard', {entryId});
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
          onPress={this._onPressButton}
          style={styles.addCardButton}>
          <Text style={styles.addCardButtonText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  addCardButton: {
    width: 260,
    backgroundColor:'black',
    borderRadius:15,
    borderWidth:5,
  },
  addCardButtonText: {
    color: 'white',
    fontSize: 32,
    padding: 5,
    textAlign: 'center',
  },
});

export default DeckDetails;