import { useState } from 'react';
import { Users } from "./users.js";

function App() {

  const [query, setQuery] = useState("");
  // console.log(query);
  // console.log(Users.map((user)=> user.first_name.toUpperCase().includes(query.toUpperCase())? user.first_name: "").filter((username)=> username !== ""));

  return (
    <div className='app'>
      <input
        type="text"
        placeholder='Search...'
        className='search'
        onChange={(e) => setQuery(e.target.value)} />
      <ul className='list'>
        {Users.filter((user) => user.first_name.toUpperCase().includes(query.toUpperCase()))
          .map((user) => (
            <li className='listItem' key={user.id}>{user.first_name}</li>
          ))}
      </ul>
    </div>
  )
}

export default App