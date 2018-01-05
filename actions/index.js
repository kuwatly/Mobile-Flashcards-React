export const ADD_CARD = 'ADD_CARD';
export const ADD_DECKS = 'ADD_DECKS';

export function addCard(deckTitle, card) {
  return {
    type: ADD_CARD,
    deckTitle,
    card,
  }
}

export function addDecks(decks) {
  return {
    type: ADD_DECKS,
    decks
  }
}