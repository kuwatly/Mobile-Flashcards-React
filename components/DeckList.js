import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
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
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(
          'DeckDetails',
          {entryId: item.title}
        )}
      >
        <DeckListItem
          title={item.title}
          count={item.questionsCount}
        />
      </TouchableOpacity>

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
            const {questions} = data[key];
            const questionsCount = questions.length;
            return {key, title, questionsCount};
          })}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

export default DeckList;