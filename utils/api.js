import {AsyncStorage} from 'react-native';
import getInitialData from '../utils/helpers';

export const DECKS_STORAGE_KEY = 'MobileFlashcards:Decks';

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecksResults);
}

export function addDeck({key}) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: {
      title: key,
      questions: []
    },
  }))
}

export function addQuestion({key, question, answer}) {
  const decks = fetchDecks();
  const newDeck = decks[key];
  newDeck.questions.concat({question: question, answer: answer});

  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: newDeck,
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