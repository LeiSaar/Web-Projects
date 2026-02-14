import { useEffect, useState } from 'react';
import { Users } from "./users.js";
import Table from './Table.jsx';
import axios from "axios";

function App() {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
 

  useEffect(() => {
    const fetchUsers = async ()=> {
      const res = await axios.get(`http://localhost:5000/?q=${query}`);
      setData(res.data);
    };

    fetchUsers();
  }, [query])
  
  return (
    <div className='app'>
      <input
        type="text"
        placeholder='Search...'
        className='search'
        onChange={(e) => setQuery(e.target.value)} 
      />
      <Table data = {data} />
      
    </div>
  );
}

export default App