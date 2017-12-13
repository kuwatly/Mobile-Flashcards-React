import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class DeckDetails extends Component {
  static navigationOptions = ({navigation}) => {
    const {entryId} = navigation.state.params;

    return {
      title: entryId
    }
  };

  render() {
    const {entryId} = this.props.navigation.state.params;
    return (
      <View>
        <Text style={styles.itemText}>
          {entryId}
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

export default DeckDetails;