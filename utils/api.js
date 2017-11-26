import { AsyncStorage } from 'react-native';
import { DATA_STORAGE_KEY } from '../config/config';

export function getDecks () {
  return AsyncStorage.getItem(DATA_STORAGE_KEY)
    .then(results => JSON.parse(results));
}

export function getDeck (id) {
  return AsyncStorage.getItem(DATA_STORAGE_KEY)
    .then(results => {
      let data = JSON.parse(results);
      return data[id];
    });
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(DATA_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
}

export function addCardToDeck (title, card) {
  return AsyncStorage.getItem(DATA_STORAGE_KEY)
    .then(results => {
      let data = JSON.parse(results);
      data[title].questions.push(card);

      return AsyncStorage.setItem(DATA_STORAGE_KEY, JSON.stringify(data));
    });
}

export function removeDecks() {
  return AsyncStorage.removeItem(DATA_STORAGE_KEY);
}
