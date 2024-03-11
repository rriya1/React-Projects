import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_NOTE_REQUEST, SAVE_NOTE_REQUEST, fetchNoteSuccess, saveNoteSuccess } from './actions';

function* fetchNoteSaga() {
    try {
      const response = yield call(fetch, 'http://localhost:8000');
      const data = yield response.json();
      yield put(fetchNoteSuccess(data.notes));  // Assuming the server sends an array of notes
    } catch (e) {
      console.error(e);
    }
  }
  

function* saveNoteSaga(action) {
  try {
    const response = yield call(fetch, 'http://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ note: action.payload }),
    });
    if (response.ok) {
      yield put(saveNoteSuccess(action.payload));
    }
  } catch (e) {
    console.error(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_NOTE_REQUEST, fetchNoteSaga);
  yield takeLatest(SAVE_NOTE_REQUEST, saveNoteSaga);
}
