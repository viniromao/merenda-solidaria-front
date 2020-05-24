import React from "react";
/* import { useHistory } from "react-router-dom"; */
import "./Receiver.css";

export default function Receiver() {
  return (
    <div id="rec-main-div">
      <div id="rec-profile-div">
        <span id="rec-profile-picture"></span>
        <span>João Felipe da Silva</span>
      </div>
      <div id="rec-bottom-div">
        <span id="prov-bottom-div-title">Merendas solicitadas (2)</span>
        <div className="prov-foodinfo-div">
          <div className="prov-foodinfo-div-grouping-1">
            <span className="prov-isbusy-icon"></span>
            <span>Cesta Básica</span>
          </div>
          <span className="rec-plusicon-span"></span>
        </div>

        <div></div>
      </div>
    </div>
  );
}
