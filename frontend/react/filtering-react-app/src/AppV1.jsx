import { useState } from 'react';
import { Users } from "./users.js";
import Table from './Table.jsx';

function App() {

  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"]

  // const search = (data) => {
  //   return data.filter(
  //     (item) => item.first_name.toLowerCase().includes(query.toLowerCase()) 
  //            || item.last_name.toLowerCase().includes(query.toLowerCase()) 
  //            || item.email.toLowerCase().includes(query.toLowerCase())
  //   );
  // };

  const searchV1 = (data) => {
    return data.filter(
         (item) => keys.some((key)=> item[key].toLowerCase().includes(query.toLowerCase()))
    );
  }
  
  return (
    <div className='app'>
      <input
        type="text"
        placeholder='Search...'
        className='search'
        onChange={(e) => setQuery(e.target.value)} 
      />
      <Table data = {searchV1(Users)} />
      
    </div>
  )
}

export default App