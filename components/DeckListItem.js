import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function DeckListItem({title, count}) {
    return (
      <View style={styles.itemView}>
        <Text style={styles.itemText}>
          {title}
        </Text>
        <Text style={styles.itemCount}>
          {count} cards
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  itemText: {
    color: 'black',
    fontSize: 64,
    padding: 10,
    textAlign: 'center',
  },
  itemCount: {
    color: 'gray',
    fontSize: 32,
    padding: 10,
    textAlign: 'center',
  },
  itemView: {
    padding: 30,
  }
});