import React from "react";
import "./Initial.css";
import { useHistory } from "react-router-dom";

export default function Initial() {
  const history = useHistory();

  const handlePush = () => {
    history.push("/landing");
  };

  return (
    <div onClick={() => handlePush()} id="ini-main-div">
      <div onClick={() => handlePush()} id="ini-next-button"></div>
    </div>
  );
}
