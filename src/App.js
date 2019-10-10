import React, { useState, useEffect } from 'react';
import RepoList from './components/RepoList';
import axios from 'axios'

function App() {
  
  const [ datas, setRepos] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
    const result = await axios(
      `https://api.github.com/search/repositories?q=csepregi`
    );
    setRepos(result.data.items);
    //setLanguages(result.data.languages);
    console.log(result.data.items);
    };
    
    fetchData()
  }, []);

  // const rows = () => datas.map(note =>
  //   <li key={note.id}>{note.full_name}</li>
  // )

  return (
    <div>
    <RepoList repos={datas}/>
    </div>
  );
}
export default App;