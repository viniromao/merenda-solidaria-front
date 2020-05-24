import React, { useState, useEffect } from "react";
import api from "../../../services/api";

export default function Marmitas() {
  const [data, setData] = useState();
  useEffect(() => {
    api
      .get("/api/marmitas/", {
        headers: {
          Authorization: "Token e83c46e9edc2061962bc604b3e16a3f138a1bef1",
        },
      })
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <>
      <div>
        {data &&
          data.map((foo) => {
            return (
              <div key={foo.id}>
                <ul>
                  <li>{foo.nome}</li>
                  <li>
                    Doador: {foo.usuario.first_name} {foo.usuario.last_name}
                  </li>
                  <li>Ingredientes: {foo.ingredientes}</li>
                  <li>Observações: {foo.observacoes}</li>
                </ul>
              </div>
            );
          })}
      </div>
    </>
  );
}
