import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function DeckListItem({title}) {
    return (
      <View style={styles.itemView}>
        <Text style={styles.itemText}>
          {title}
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  itemText: {
    color: 'red',
    fontSize: 64,
    padding: 10,
    textAlign: 'center',
  },
  itemView: {
    padding: 30,
  }
});