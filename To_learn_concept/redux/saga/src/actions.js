export const FETCH_NOTE_REQUEST = 'FETCH_NOTE_REQUEST';
export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS';
export const SAVE_NOTE_REQUEST = 'SAVE_NOTE_REQUEST';
export const SAVE_NOTE_SUCCESS = 'SAVE_NOTE_SUCCESS';

export const fetchNoteRequest = () => ({
  type: FETCH_NOTE_REQUEST,
});

export const fetchNoteSuccess = (note) => ({
  type: FETCH_NOTE_SUCCESS,
  payload: note,
});

export const saveNoteRequest = (note) => ({
  type: SAVE_NOTE_REQUEST,
  payload: note,
});

export const saveNoteSuccess = (note) => ({
  type: SAVE_NOTE_SUCCESS,
  payload: note,
});
