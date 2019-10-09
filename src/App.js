import React, {useState, useEffect} from 'react';
import './App.css';
import repositoriService from './services/repositories';

function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    repositoriService
    .search()
    .then(initialNotes => {
      setRepositories(initialNotes)
      console.log(initialNotes);
    })
}, [])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
