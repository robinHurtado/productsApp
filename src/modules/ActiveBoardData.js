//import { combineReducers } from 'redux';
import uniqueId from 'lodash/uniqueId';

// Reducer
export default (state = {}, action) => {
  const listId = uniqueId("list_");

  switch (action.type) {
    case 'SUBMIT_LIST':
      return {
        ...state,
        [listId]: { // the unique ID of the list
          name: action.payload, // name of the list
          id: listId, // list ID
          cards: [] // card IDs go inside here
        }
      };
    case 'SUBMIT_NEW_CARD': {
      const { listId, cardName, cardId } = action.payload;
      const currentList = state[listId];
      currentList.cards.push({ name: cardName, cardId, listId, isArchived: false })
      return {
        ...state,
        [listId]: currentList,
      }
    }
    case 'HANDLE_DROP': {
      const { cardId, cardName, listId, newListId } = action.payload;
      const currentList = state[newListId]; // list that's going to be taking the new card
      currentList.cards.push({ name: cardName, cardId, listId: newListId }) // add the card to the list
      const removeCard = state[listId].cards.find(card => card.cardId === cardId); // find the card to remove
      const oldList = state[listId].cards.splice(removeCard, 1) // remove the card from the list
      return {
        ...state,
        [newListId]: currentList,
      }
    }
    case 'ARCHIVE_POST': {
      const { cardId, listId } = action.payload;
      const currentList = state[listId];
      const findCard = currentList.cards.find(card => card.cardId === cardId);

      if (findCard.isArchived === false) {
        findCard.isArchived = true;
      } else {
        findCard.isArchived = false;
      }
      return {
        ...state,
        [listId]: currentList
      }
    }
    default: return state;
  }
}

// Action Creators
export function archiveCard(cardId, listId) {
  return dispatch => {
    dispatch({ type: 'ARCHIVE_POST', payload: { cardId, listId } });
  }
}

export function submitList(name) {
  return dispatch => {
      dispatch({ type: 'SUBMIT_LIST', payload: name })
  }
}

export function submitNewCard(card, cardId, listId) {
  return dispatch => {
    dispatch({ type: 'SUBMIT_NEW_CARD', payload: { cardName: card, listId, cardId } });
  }
}

export function handleDrop(cardName, cardId, listId, newListId) {
  return dispatch => {
    dispatch({ type: 'HANDLE_DROP', payload: { cardName, cardId, listId, newListId } });
  }
}

/* ToDo:understand this
const ActiveBoardReducer = combineReducers({
  listItems: ListReducer,
});*/

//export default ListReducer;