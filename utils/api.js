import {AsyncStorage} from 'react-native';
import getInitialData from '../utils/helpers';

export const DECKS_STORAGE_KEY = 'MobileFlashcards:Decks';

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecksResults);
}

export function getDeck(key) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecksResults)
    .then((results) => {
      return results[key];
    });
}

export function saveDeckTitle({title}) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    },
  }))
}

export function addCardToDeck({title, card}) {
  const {question, answer} = card;
  const decks = getDecks();
  const newDeck = decks[title];
  newDeck.questions.concat({question: question, answer: answer});

  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: newDeck,
  }))
}

export function formatDecksResults (results) {
  return results === null
    ? setDummyData()
    : JSON.parse(results)
}

function setDummyData () {
  let dummyData = getInitialData();

  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));

  return dummyData;
}