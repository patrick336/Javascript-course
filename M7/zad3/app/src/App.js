import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
// import DevTools from './DevTools';
// <DevTools /> to musi byc w App

const App = () => {
  return (
    <div className="App">
    	<CommentsListContainer />
    </div>
  );
};

export default App;