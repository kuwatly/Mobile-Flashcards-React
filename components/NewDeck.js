import React, {Component} from 'react';
import {Alert, View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {black} from '../utils/colors'
import {saveDeckTitle} from '../utils/api'

class NewDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Deck Title' };
  }

  _onPressButton = () => {
    saveDeckTitle(this.state.text);
    Alert.alert('Deck added successfully!');
    this.props.navigation.navigate('Home')
  };

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.titleText}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
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
  titleText: {
    color: 'black',
    fontSize: 64,
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

export default NewDeck;