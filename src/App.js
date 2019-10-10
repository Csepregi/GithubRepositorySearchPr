import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  
  const [ datas, setRepos] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
    const result = await axios(
      `https://api.github.com/search/repositories?q=mapbox`
    );
    setRepos(result.data.items);
    //setLanguages(result.data.languages);
    console.log(result.data.items)
    };
    
    fetchData()
  }, []);

  const rows = () => datas.map(note =>
    <li key={note.id}>{note.full_name}</li>
  )

  return (
    <div>
     {rows()}
    </div>
  );
}
export default App;