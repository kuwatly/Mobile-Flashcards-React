import React, {Component} from 'react';
import {Alert, KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {black} from '../utils/colors';
import {saveDeckTitle} from '../utils/api';
import {connect} from 'react-redux';
import {addDeck} from "../actions";
import {NavigationActions} from "react-navigation";

class NewDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  _onPressButton = () => {
    saveDeckTitle(this.state.text);
    this.props.dispatch(addDeck(this.state.text));
    Alert.alert('Deck added successfully!');
    const goBackAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'}),
        NavigationActions.navigate({
          routeName: 'DeckDetails',
          params: {
            entryId: this.state.text
          }
        }),
      ],
    });
    this.props.navigation.dispatch(goBackAction);
  };

  render() {
    return (
      <KeyboardAvoidingView style={{alignItems: 'center'}}>
        <Text style={styles.titleText}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder='Deck Title'
        />
        <TouchableOpacity
          onPress={this._onPressButton}
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  titleText: {
    color: 'black',
    fontSize: 32,
    padding: 10,
    textAlign: 'center',
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 260,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 32,
    padding: 5,
    textAlign: 'center',
  },
  submitButton: {
    width: 260,
    backgroundColor:'black',
    borderRadius:15,
    borderWidth:5,
  },
});

export default connect()(NewDeck);