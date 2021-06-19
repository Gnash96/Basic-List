import { useState, useEffect } from "react";

import ListItem from "../ListItem";
import "./List.css";

const List = (props) => {
  const [offset, setOffset] = useState(1);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (props.users && props.users.length) {
      changePage(offset);
    }
  }, [props.users]);

  const changePage = (currentPage) => {
    let usersCopy = [...props.users];
    const indexOfLastUser = currentPage * 4;
    const indexOfFirstUser = indexOfLastUser - 4;
    const filteredUsers = usersCopy.slice(indexOfFirstUser, indexOfLastUser);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(usersCopy.length / 4); i++) {
      pageNumbers.push(i);
    }
    setCurrentUsers(filteredUsers);
    setPages(pageNumbers);
  };

  const pageClick = (event) => {
    setOffset(Number(event.target.id));
    changePage(Number(event.target.id));
  };

  return (
    <>
      {currentUsers.length ? (
        <>
          <ul className={"users"}>
            {currentUsers.map((v, i) => {
              return (
                <ListItem
                  user={v}
                  index={i}
                  key={v.name || `${i}-user`}
                  setFav={props.setFav}
                  delUser={props.delUser}
                />
              );
            })}
          </ul>
          <div className="pagination">
            {pages.map((number, i) => {
              return (
                <a
                  key={number}
                  id={number}
                  className={number === offset ? "active" : ""}
                  onClick={pageClick}
                >
                  {number}
                </a>
              );
            })}
          </div>
        </>
      ) : (
        <div className={"noUsers"}>No Friends Found 🙄</div>
      )}
    </>
  );
};

export default List;
