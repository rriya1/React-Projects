export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const SAVE_NOTE_SUCCESS = 'SAVE_NOTE_SUCCESS';

export const fetchNotesSuccess = (notes) => ({
  type: FETCH_NOTES_SUCCESS,
  payload: notes,
});

export const saveNoteSuccess = (note) => ({
  type: SAVE_NOTE_SUCCESS,
  payload: note,
});

// Thunk action creators
export const fetchNotes = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:8000');
      const data = await response.json();
      dispatch(fetchNotesSuccess(data.notes));
    } catch (error) {
      console.error(error);
    }
  };
};

export const saveNote = (note) => {
  return async (dispatch) => {
    try {
      await fetch('http://localhost:8000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note }),
      });
      dispatch(saveNoteSuccess(note));
    } catch (error) {
      console.error(error);
    }
  };
};
