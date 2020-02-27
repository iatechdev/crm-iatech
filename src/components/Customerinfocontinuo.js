import React, { Component } from "react";
import Profileinfo from "./shared/Profileinfo";
import Sidebar from "./shared/Sidebar";
import { Link } from "react-router-dom";
import "../style/customerinfo.css";

export default class Customerinfocontinuo extends Component {
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
        <div className="row row-container d-flex">
          <div className="col-12 col-container">
            <Profileinfo className="container-profileinfo"/>
            <div className="col-xs-12 col-md-8 customerinfo-container-more">
              <div className="customerinfo-profile">
                <img src={require("../icons/perfil.png")} alt="" />
                <h2>Perfil</h2>
              </div>
              <div className="customerinfo-date">
                <ul>
                  <li>
                    <h2>Más Informacíon</h2>
                    <div className="personal-information-more">
                      <div className="more-information-item">
                        <h3>Fecha de nacimiento</h3>
                        <p>{data.fecha_cumoleanos_c}</p>
                      </div>
                      <div className="more-information-item">
                        <h3>Profesión</h3>
                        <p>I{data.profesion_c}</p>
                      </div>
                      <div className="more-information-item">
                        <h3>Medio de transporte</h3>
                        <p>{data.medio_transporte_c}</p>
                      </div>
                      <div className="more-information-item">
                        <h3>Mascota</h3>
                        <p>{data.mascotas_c}</p>
                      </div>
                      <div className="more-information-item">
                        <h3>Ocupación</h3>
                        <p>{data.ocupacion_c}
                        </p>
                      </div>
                      <div className="more-information-item">
                        <h3>Tipo de mascota</h3>
                        <p>{data.tipodemascotas_c}</p>
                      </div>
                      <div className="more-information-item">
                        <h3>Otra profesión</h3>
                        <p>{data.otraprofesion_c}</p>
                      </div>
                      <div className="more-information-item">
                        <h3>Red social</h3>
                        <p>{data.redes_sociales_c}</p>
                      </div>
                      <div className="more-information-item">
                        <h3>Centro comercial</h3>
                        <p>{data.id_mall_id_c}</p>
                      </div>
                      <div className="more-information-item">
                        <h3>Asignado a</h3>
                        <p>{data.tipodehabeasdata_c}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <Link to="/customerinfocontinuo" className="btn-link">
                <button type="button" className="btn btn-customerinfo-more">
                  Guardar
                  <img
                    src={require("../icons/211607-24.png")}
                    alt="guardar"
                  />
                </button>
              </Link>
            </div>
            <Sidebar className="container-sidebar" />
          </div>
        </div>
      </div>
    );
  }
}
