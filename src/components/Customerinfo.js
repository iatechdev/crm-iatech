import React, { Component } from "react";
import Profileinfo from "./shared/Profileinfo";
import Sidebar from "./shared/Sidebar";
import { Link } from "react-router-dom";
import "../style/customerinfo.css";

export default class Customerinfo extends Component {

  constructor(props) {
    super(props);
    this.state={
      data: {}
    }
  }

  componentDidMount(){
      this.setState({data : JSON.parse(localStorage.getItem('response'))});
      
  
  }
  render() {
    const { data } = this.state;
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
                        <p>{data.genero_c}</p>
                      </div>
                      <div className="phone">
                        <h3>Teléfono Fijo</h3>
                        <p>{data.phone_office}</p>
                      </div>
                      <div className="phone">
                        <h3>Celular</h3>
                        <p>{data.celular_c}</p>
                      </div>
                      <div className="marital-status">
                        <h3>Estado civil</h3>
                        <p>{data.estadocivil_c}</p>
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
                        <p>{data.departamento_c}</p>
                      </div>
                      <div className="general-information-item">
                        <h3>Barrio</h3>
                        <p>{data.cualbarrio_c}</p>
                      </div>
                      <div className="general-information-item">
                        <h3>Dirección</h3>
                        <p>{data.direccion_c}</p>
                      </div>
                      <div className="general-information-item">
                        <h3>Otro barrio</h3>
                        <p>{data.barriodinamico_c}</p>
                      </div>
                      <div className="general-information-item">
                        <h3>Ciudad / Municipio</h3>
                        <p>{data.ciudad_c}</p>
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
