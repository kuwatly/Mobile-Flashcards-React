import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class NewDeck extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemText}>
          Hello World
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemText: {
    color: 'red',
    fontSize: 64,
    padding: 10,
    textAlign: 'center',
  },
});

export default NewDeck;