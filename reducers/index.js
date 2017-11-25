import {
  GET_DECKS,
  GET_DECK,
  SAVE_DECK,
  ADD_CARD,
} from '../actions'

function reducer (state = {}, action) {
  switch (action.type) {
    case GET_DECKS :
      return {
        ...state,
        ...action.decks
      };
    case GET_DECK :
      return {
        ...state,
        [action.deck.title]: action.deck
      };
    case SAVE_DECK :
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      };
    case ADD_CARD :
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [].concat(state[action.title].questions, [action.card])
        }
      };
    default :
      return state
  }
}

export default reducer;