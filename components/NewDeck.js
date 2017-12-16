import React, {Component} from 'react';
import {Alert, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {black} from '../utils/colors'
import {saveDeckTitle} from '../utils/api'

class NewDeck extends Component {
  _onPressButton = () => {
    saveDeckTitle('Test');
    Alert.alert('Card added successfully!');
    this.props.navigation.navigate('Home')
  };

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.titleText}>
          What is the title of your new deck?
        </Text>
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