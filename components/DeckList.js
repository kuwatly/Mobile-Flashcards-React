import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import DeckListItem from './DeckListItem';
import {fetchDecks} from '../utils/api';
import {AppLoading} from 'expo';

class DeckList extends Component {
  state = {
    ready: false,
  };

  componentDidMount () {
    fetchDecks()
      .then((data) => this.setState(() => ({ready: true, data})))
  }

  _renderItem = ({item}) => {
    return (
      <DeckListItem
        title={item.title}
      />
    );
  };

  render() {
    const { ready, data } = this.state;

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <View>
        <FlatList
          data={Object.keys(data).map((key) => {
            const {title} = data[key];
            return {key, title};
          })}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

export default DeckList;