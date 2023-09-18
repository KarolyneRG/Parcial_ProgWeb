import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ListaBread = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const OrdenarBread = async () => {
    await axios
      .get("http://89.116.25.43:3500/api/productos/listar", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((resp) => {
        console.log(resp);
        setData(resp.data.result);
      })
      .catch((error) => {
        if (error.response.status == 400) {
          Swal.fire("Información!", error.response.data.message, "error");
        } else if (error.response.status == 401) {
          Swal.fire("Información!", error.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrio un error!", "error");
        }
      });
  };

  useEffect(() => {
    OrdenarBread();
  }, []);

  return (
    <div className= "contenedorLista">
      {data.map((result) => {
        return (
          <div
            key={result._id}
            className= "gridPan">
            <div>
              <img src={result.imagen} alt={"panes"} className="w-56 h-auto" />
            </div>
            <div>{result.descripcion}</div>
            <div className="p-1 rounded-lg text-white-300 ">
              {"$" + result.valor}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListaBread;
