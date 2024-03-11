import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNoteRequest, saveNoteRequest } from './actions';

const NoteApp = () => {
  const [noteInput, setNoteInput] = useState('');
  const notes = useSelector((state) => state.notes);  // Adjusted to select multiple notes
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveNoteRequest(noteInput));
  };

  const handleLoad = () => {
    dispatch(fetchNoteRequest());
  };

  return (
    <div>
    <textarea onChange={(e) => setNoteInput(e.target.value)} placeholder="Write your note here..." />
    <button onClick={handleSave}>Save Note</button>
    <button onClick={handleLoad}>Load Notes</button>
    <ul>
      {notes.map((note, index) => (
        <li key={index}>{note}</li>  // Display each note as a list item
      ))}
    </ul>
  </div>
  );
};

export default NoteApp;
