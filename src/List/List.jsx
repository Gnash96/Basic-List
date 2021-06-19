import ListItem from "../ListItem";
import "./List.css";

const List = (props) => {
  return (
    <>
      {props.users && props.users.length ? (
        <ul>
          {props.users.map((v, i) => {
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
      ) : (
        <div className={"noUsers"}>No Friends Found 🙄</div>
      )}
    </>
  );
};

export default List;
