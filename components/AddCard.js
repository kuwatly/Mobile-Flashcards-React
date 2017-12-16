import React, {Component} from 'react';
import {Alert, View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {black} from '../utils/colors'
import {addCardToDeck} from '../utils/api'

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 'Question?',
      answer: 'Answer.'
    };
  }

  static navigationOptions = () => {
    return { title: 'Add Card' }
  };

  _onPressButton = () => {
    const { goBack } = this.props.navigation;
    const {entryId} = this.props.navigation.state.params;
    const card = {
      question: this.state.question,
      answer: this.state.answer,
    };
    addCardToDeck({title: entryId, card});
    Alert.alert('Card added successfully!');
    goBack();
  };

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.labelText}>
          Question:
        </Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState((state) => {
            return {
            ...state,
            question: text,
          }})}
          value={this.state.question}
        />
        <Text style={styles.labelText}>
          Answer:
        </Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState((state) => {
            return {
              ...state,
              answer: text,
            }})}
          value={this.state.answer}
        />
        <TouchableOpacity
          onPress={this._onPressButton}
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
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

export default AddCard;