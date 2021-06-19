import unChecked from "../images/unChecked.png";
import checked from "../images/checked.png";
import deleteIcon from "../images/delete.svg";
import "./ListItem.css";

const ListItem = (props) => {
  return (
    <li>
      <div className={"name-container"}>
        <p className={"heading"}>{props.user ? props.user.name : "No Name"}</p>
        <p className={"caption"}>{"is your friend"}</p>
      </div>
      <div className={"btn-grp"}>
        <button
          type="button"
          className="btn btn__primary"
          onClick={() => {
            props.setFav(props.index);
          }}
        >
          <img
            src={props.user && props.user.isFav ? checked : unChecked}
            alt="unchecked-star"
            height={24}
          />
        </button>
        <button
          type="button"
          className="btn btn__primary"
          onClick={() => {
            props.delUser(props.index);
          }}
        >
          <img src={deleteIcon} alt="delete-icon" height={24} />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
