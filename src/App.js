import './App.css';
import { users as initialUsers } from "./data/users";
import Usercard from './components/Usercard';
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState("");

  const filteredUsers = initialUsers.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.role.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-xl mx-auto mb-6">
      <input
        type="text"
        placeholder="Search by name or role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 rounded-lg border border-gray-300"
      />
    </div>

    <div className="flex flex-wrap justify-center gap-6">
      {filteredUsers.length > 0 ? (
        filteredUsers.map(user => (
          <Usercard
            key={user.id}
            name={user.name}
            role={user.role}
            location={user.location}
          />
        ))
      ) : (
        <p className="text-center text-gray-600 text-lg">
          No users to display.
        </p>
      )}
    </div>
  </div>
  );
}

export default App;
