import React from "react";
/* import { useHistory } from "react-router-dom"; */
import "./Provider.css";

export default function Provider() {
  return (
    <div id="prov-main-div">
      <div id="prov-nav-div">
        <span id="prov-side-menu-button"></span>
        <span id="prov-topmenu-label">Meu Perfil</span>
      </div>
      <div id="prov-profile-div">
        <span id="prov-profile-picture"></span>
        <span>Ana Luiza Monteiro</span>
      </div>
      <div id="prov-bottom-div">
        <span id="prov-bottom-div-title">
          Merendas prontas pra entregar (2)
        </span>
        <div className="prov-foodinfo-div">
          <div className="prov-foodinfo-div-grouping-1">
            <span className="prov-isbusy-icon"></span>
            <span>Merenda 1</span>
          </div>
          <span className="prov-info-icon"></span>
        </div>

        <div></div>
      </div>
    </div>
  );
}
