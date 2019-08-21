import React from 'react';
import TrailList from './components/TrailList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the MTB Trip Builder!</h1>
      <div className="wrapper-container">
        <div className="trips-wrapper">
          <h3 className="wrapper-header">Selected trips:</h3>
          <p className="wrapper-description">This container is going to include any of the trips that you are interested in.  You can sort them by clicking on the dropdown menu.</p>
        </div>
        <div className="trips-wrapper">
          <h3 className="wrapper-header">Trips to choose from:</h3>
          <p className="wrapper-description">This container is going to include all of the trips that have been uploaded by our staff and users.  Feel free to look through these to plan your next trip!</p>
          <TrailList />
        </div>
      </div>
    </div>
  );
}

export default App;
