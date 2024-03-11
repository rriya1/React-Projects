import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotes, saveNote } from './actions';

const NoteApp = () => {
  const [noteInput, setNoteInput] = useState('');
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveNote(noteInput));
    setNoteInput(''); // Clear input after saving
  };

  const handleLoad = () => {
    dispatch(fetchNotes());
  };

  return (
    <div>
      <textarea
        value={noteInput}
        onChange={(e) => setNoteInput(e.target.value)}
        placeholder="Write your note here..."
      />
      <button onClick={handleSave}>Save Note</button>
      <button onClick={handleLoad}>Load Notes</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default NoteApp;
