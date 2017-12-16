import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DeckListItem from './DeckListItem'

class DeckDetails extends Component {
  static navigationOptions = ({navigation}) => {
    const {entryId} = navigation.state.params;
    console.log(entryId);
    return {
      title: entryId
    }
  };

  render() {
    const {entryId} = this.props.navigation.state.params;
    return (
      <DeckListItem
        title={entryId}
        count={entryId}
      />
    )
  }
}

export default DeckDetails;