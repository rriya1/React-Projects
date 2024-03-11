import { FETCH_NOTE_SUCCESS, SAVE_NOTE_SUCCESS } from './actions';

const initialState = {
    notes: [],
  };
  
  const noteReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NOTE_SUCCESS:
        return { ...state, notes: action.payload };  // Assuming payload is an array of notes
      case SAVE_NOTE_SUCCESS:
        return { ...state, notes: [...state.notes, action.payload] };  // Append new note to array
      default:
        return state;
    }
  };
  

export default noteReducer;
