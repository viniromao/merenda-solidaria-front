import React from "react";
import "./FoodInfo.css";
import { useHistory } from "react-router-dom";

export default function FoodInfo() {
  const history = useHistory();

  const handlePush = () => {
    history.push("/receiver");
  };

  return (
    <div id="food-main-div">
      <span id="food-navbar">
        <span onClick={() => handlePush()} id="food-returnicon"></span>
        <span id="food-navbarlabel">Merenda 1</span>
      </span>
      <h4>Informações sobre a merenda:</h4>
      <div>
        <h5>Ingredientes:</h5>
        <ul>
          <li>Arroz</li>
          <li>Feijão</li>
          <li>Frango</li>
          <li>Alface</li>
          <li>Brócolis</li>
        </ul>
      </div>

      <div>
        <h5>Observações:</h5>
        <p>Nenhuma observação a ser feita</p>
      </div>

      <div>
        <h5>Status:</h5>
        <p>A doação já possui um destinatário</p>
        <p>Veja o perfil de:</p>
      </div>

      <div id="food-bottom-user-tag-div">
        <span id="food-user-icon-span"></span>
        <span id="food-user-name-span">Felipe da Silva</span>
      </div>
    </div>
  );
}
