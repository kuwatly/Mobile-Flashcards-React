import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import getInitialData from '../utils/helpers';
import DeckListItem from './DeckListItem';

class DeckList extends Component {
  _renderItem = ({item}) => {
    return (
      <DeckListItem
        title={item.title}
      />
    );
  };

  render() {
    const metaInfo = getInitialData();
    return (
      <View>
        <FlatList
          data={Object.keys(metaInfo).map((key) => {
            const {title} = metaInfo[key];
            return {key, title};
          })}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

export default DeckList;