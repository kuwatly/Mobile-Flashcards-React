import {ADD_CARD, ADD_DECK, ADD_DECKS} from '../actions'

function cards(state = {}, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.deckTitle]: {
            ...state.decks[action.deckTitle],
            questions: state.decks[action.deckTitle].questions.concat(action.card)
          }
        }
      };
    case ADD_DECK:
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.deckTitle]: {
            title: action.deckTitle,
            questions: []
          }
        }
      };
    case ADD_DECKS :
      return {
        ...state,
        decks: action.decks
      };
    default :
      return state
  }
}

export default cards