import React, { Component } from "react";
import Profileinfo from "../components/shared/Profileinfo";
import Sidebar from "../components/shared/Sidebar";
import { Link } from "react-router-dom";
import "../style/customerinfo.css";

export default class Customerinfo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row-container">
          <div className="col-container">
            <Profileinfo className="profile-info" />
            <div className="col-xs-12 col-md-8 customerinfo-container">
              <div className="customerinfo-profile">
                <img src={require("../icons/perfil.png")} alt="" />
                <h2>Perfil</h2>
              </div>
              <div className="customerinfo-date">
                <ul>
                  <li>
                    <h2>Datos Personales</h2>
                    <div className="personal-information">
                      <div className="gender">
                        <h3>Género</h3>
                        <p>Masculino</p>
                      </div>
                      <div className="phone">
                        <h3>Teléfono fijo</h3>
                        <p>+57 234567</p>
                      </div>
                      <div className="marital-status">
                        <h3>Estado civil</h3>
                        <p>Soltero</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="customerinfo-date-one">
                <ul>
                  <li>
                    <h2>Información general</h2>
                    <div className="general-information">
                      <div className="general-information-item">
                        <h3>Departamento</h3>
                        <p>Antioquia</p>
                      </div>
                      <div className="general-information-item">
                        <h3>Barrio</h3>
                        <p>lorem ipsum</p>
                      </div>
                      <div className="general-information-item">
                        <h3>Dirección</h3>
                        <p>Calle 23 #23-12</p>
                      </div>
                      <div className="general-information-item">
                        <h3>Otro barrio</h3>
                        <p>ninguno</p>
                      </div>
                      <div className="general-information-item">
                        <h3>Ciudad / Municipio</h3>
                        <p>Sabaneta</p>
                      </div>
                      <div className="general-information-item">
                        <h3>Tipo habeas data</h3>
                        <p>Digital</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="checkbox">
                <Link to="">
                  <p>Autoriza tratamiento de datos</p>
                </Link>
                <input type="checkbox" />
              </div>

              <Link to="/customerinfocontinuo" className="btn-link">
                <button type="button" className="btn btn-customerinfo">
                  Siguiente
                  <img
                    src={require("../icons/211607-24.png")}
                    alt="siguiente"
                  />
                </button>
              </Link>
            </div>
            <Sidebar/>
          </div>
        </div>
      </div>
    );
  }
}
