import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NoteApp from './NoteApp';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Note Taking App</h1>
        <NoteApp />
      </div>
    </Provider>
  );
}

export default App;
