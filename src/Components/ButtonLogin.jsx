import React from "react";
import '../Styles/botonLogin.css'

const ButtonLogin = ({ fnIniciarSesion, label }) => {
  return (
    <button
      onClick={fnIniciarSesion}
      className="botonLogin"
    >
      {label}
    </button>
  );
};

export default ButtonLogin;
