import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import DeckListItem from './DeckListItem';
import {getDecks} from '../utils/api';
import {AppLoading} from 'expo';
import {addDecks} from "../actions";
import {connect} from 'react-redux';

class DeckList extends Component {
  state = {
    ready: false,
  };

  componentDidMount() {
    getDecks()
      .then((data) => {
        this.props.dispatch(addDecks(data));
        this.setState(() => ({ready: true}));
      })
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
    const {ready} = this.state;
    const data = this.props.decks;

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

function mapStateToProps ({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList);