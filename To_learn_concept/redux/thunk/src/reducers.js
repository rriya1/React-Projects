import { FETCH_NOTES_SUCCESS, SAVE_NOTE_SUCCESS } from './actions';

const initialState = {
  notes: [],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES_SUCCESS:
      return { ...state, notes: action.payload };
    case SAVE_NOTE_SUCCESS:
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};

export default noteReducer;
