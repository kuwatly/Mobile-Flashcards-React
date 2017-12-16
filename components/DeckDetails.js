import React, {Component} from 'react';
import DeckListItem from './DeckListItem'
import {getDeck} from "../utils/api";
import {AppLoading} from 'expo';

class DeckDetails extends Component {
  state = {
    ready: false,
  };

  static navigationOptions = ({navigation}) => {
    const {entryId} = navigation.state.params;
    return {
      title: entryId
    }
  };

  componentDidMount () {
    const {entryId} = this.props.navigation.state.params;
    getDeck(entryId)
      .then((deck) => this.setState(() => ({ready: true, deck})))
  }

  render() {
    const { ready, deck } = this.state;

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <DeckListItem
        title={deck.title}
        count={deck.questions.length}
      />
    )
  }
}

export default DeckDetails;