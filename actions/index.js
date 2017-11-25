import * as API from '../utils/api';

export const GET_DECKS = 'GET_DECKS';
export const GET_DECK = 'GET_DECK';
export const SAVE_DECK = 'SAVE_DECK';
export const ADD_CARD = 'ADD_CARD';

function getDecksCreator (decks) {
  return {
    type: GET_DECKS,
    decks
  }
}
function getDeckCreator (deck) {
  return {
    type: GET_DECK,
    deck
  }
}
function saveDeckCreator (title) {
  return {
    type: SAVE_DECK,
    title,
  }
}
function addCardCreator (title, card) {
  return {
    type: ADD_CARD,
    title,
    card,
  }
}

export function getDecks() {
  return (dispatch) => {
    API.getDecks()
      .then(decks => dispatch(getDecksCreator(decks)));
  };
}
export function getDeck(id) {
  return (dispatch) => {
    API.getDeck(id)
      .then(deck => dispatch(getDeckCreator(deck)));
  };
}
export function saveDeck(title) {
  return (dispatch) => {
    API.saveDeckTitle(title)
      .then(() => dispatch(saveDeckCreator(title)));
  };
}
export function addCard(title, card) {
  return (dispatch) => {
    API.addCardToDeck(title, card)
      .then(() => dispatch(addCardCreator(title, card)));
  };
}
