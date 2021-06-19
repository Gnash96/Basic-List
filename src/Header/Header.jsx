import { useState } from "react";
import "./Header.css";

const Header = (props) => {
  const [iValue, setIValue] = useState("");
  return (
    <header className="App-header">
      <h4>Friends List!!</h4>
      <input
        type="text"
        name="text"
        autoComplete="off"
        className={"search"}
        value={iValue}
        onChange={(e) => {
          setIValue(e.target.value);
        }}
        placeholder={"Search your Friends"}
        onKeyDown={props.onSearch}
      />
    </header>
  );
};

export default Header;
