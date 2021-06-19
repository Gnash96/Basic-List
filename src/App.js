import { useState } from "react";

import "./App.css";
import List from "./List";
import Header from "./Header";

function App() {
  const [users, setUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState([]);
  const [iValue, setIValue] = useState("");

  // sample user obj {name:name,isfav:true}
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value) {
        let newFrnd = { name: e.target.value, isFav: false };
        let usersCopy = [...users];
        usersCopy.push(newFrnd);
        setUsers(usersCopy);
        setSearchUsers(usersCopy);
        setIValue("");
      }
    }
  };

  // To Set Favorite Friend, excepts index of the user
  const setFav = (i) => {
    let usersCopy = [...users];
    if (usersCopy[i]) {
      usersCopy[i].isFav = !usersCopy[i].isFav;
      usersCopy.sort((a, b) => b.isFav - a.isFav);
      setUsers(usersCopy);
      setSearchUsers(usersCopy);
    }
  };

  // To Delete not so friend, excepts index of the user
  const delUser = (i) => {
    let usersCopy = [...users];
    if (usersCopy[i]) {
      usersCopy.splice(i, 1);
      setUsers(usersCopy);
      setSearchUsers(usersCopy);
    }
  };

  const onSearch = (e) => {
    if (e.key === "Enter") {
      let usersCopy = [...users];
      if (e.target.value) {
        let filteredUsers = usersCopy.filter((v) => v.name === e.target.value);
        setSearchUsers(filteredUsers);
      } else {
        setSearchUsers(usersCopy);
      }
    }
  };

  return (
    <div className="App">
      <Header onSearch={onSearch} />
      <div className="input-container">
        <input
          type="text"
          id="new-todo-input"
          name="text"
          autoComplete="off"
          value={iValue}
          onChange={(e) => {
            setIValue(e.target.value);
          }}
          placeholder={"Enter your friends name"}
          onKeyDown={handleKeyDown}
        />
      </div>
      <List
        users={searchUsers}
        setFav={(i) => setFav(i)}
        delUser={(i) => delUser(i)}
      />
    </div>
  );
}

export default App;
