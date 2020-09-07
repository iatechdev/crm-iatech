import React, { Component } from "react";
import Welcome from "./shared/Welcome";
import "../style/register.css";
import ApiExter from "../API/apiexter";
import { Link } from "react-router-dom";

export default class Register_two extends Component {
  constructor() {
    super();
    const data_one = JSON.parse(localStorage.getItem("data_one"))
    this.state = {
      showButton: false,
      showButtonRegister: true,
      api: ApiExter,
      cities_deparment: ApiExter.data.cities[ApiExter.data.department],
      tipo_identificacion_c:'',
      sic_code:'',
      phone_office:'',
      celular_c:'',
      estadocivil_c:'',
      pais_c:'',
      departamento_c:'',
      ciudad_c:'',  
      barrio_c:'',
      cualbarrio_c:'',
      direccion_c:'',
      habeasdata_c:''
      // errors = {
      // tipo_identificacion_c:'',
      // sic_code:'',
      // phone_office:'',
      // celular_c:'',
      // estadocivil_c:'',
      // pais_c:'',
      // departamento_c:'',
      // ciudad_c:'',  
      // barrio_c:'',
      // cualbarrio_c:'',
      // direccion_c:'',
      // habeasdata_c:''
      // }
    };
  }



  buttonShowRegister() {
    this.setState({
      showButtonRegister: !this.state.showButtonRegister,
      showButton: this.state.showButton
    });
  }

  handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    this.setState({ ...this.state, [e.target.name]: value })
  }

  cities(deparment) {
    let data = "";
    if (deparment != null) {
      data = this.state.api.data.cities[deparment];
    } else {
      data = [];
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row-container">
          <div className="col-container">
            <Welcome />
            <div className="col-sm-12 col-md-8 login-container">
              <div className="register-login">
                <Link to="/">
                  <button className="register-login-btn">
                    <h2>Ingresar</h2>
                  </button>
                  {this.state.showButton ? (
                    <div className="img-circle">
                      <img
                        src={require("../icons/circle_gray.png")}
                        width="10px"
                        alt=""
                      />
                    </div>
                  ) : null}
                </Link>
                <Link to="/register">
                  <button onClick={() => this.buttonShowRegister()}>
                    <h2>Register</h2>
                  </button>
                  {this.state.showButtonRegister ? (
                    <div className="img-circle-register">
                      <img
                        src={require("../icons/circle_gray.png")}
                        width="8px"
                        alt=""
                      />
                    </div>
                  ) : null}
                </Link>
              </div>
              <form className="form-login">
                <div className="form-row">
                  <div>
                    <h1>Registrarse</h1>
                    <p>Regístrate con tu correo o red social</p>
                  </div>
                  <div className="icons-reds form-group">
                    <a href={`#`}>
                      <img src={require("../icons/google.png")} alt="" />
                    </a>
                    <a href={`#`}>
                      <img src={require("../icons/facebook1.png")} alt="" />
                    </a>
                    <a href={`#`}>
                      <img src={require("../icons/twitter1.png")} alt="" />
                    </a>
                  </div>
                  <div className="login-field col-md-6 form-group ">
                    <label htmlFor="typeidentificacion">Tipo de Identificación</label>
                    <select name="typeid" id="">
                      <option value="">-</option>
                      <option value="CC">Cédula de Ciudadanía</option>
                      <option value="CEX">Cédula DE Extranjería</option>
                      <option value="NIT">Nit</option>
                      <option value="PAS">Pasaporte</option>
                      <option value="NIUP">Registro Civil</option>
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group ">
                    <label htmlFor="identificacion">Identificación</label>
                    <input type="number" placeholder="identificación" />
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="phone">Teléfono Fijo</label>
                    <input type="number" placeholder="Teléfono fijo" />
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="movilphone">Celular</label>
                    <input type="number" placeholder="celular" />
                  </div>
                  <div className="login-field col-md-6 form-group ">
                    <label htmlFor="gender">Género</label>
                    <select name="gender" id="">
                      <option value="">-</option>
                      <option value="F">Femenino</option>
                      <option value="M">Masculino</option>
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group ">
                    <label htmlFor="nombre">Estado Civil</label>
                    <select name="state" id="">
                      <option value="">-</option>
                      <option value="soltero">Soltero(a)</option>
                      <option value="casado">Casado(a)</option>
                      <option value="unionlibre">Union Libre</option>
                      <option value="viudo">Viudo(a)</option>
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="departamento">País</label>
                    <select name="department" onChange={this.handleChange} value={this.state.value} id="">
                      <option value="">-</option>
                        <option value="">COLOMBIA</option>
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="departamento">Departamento</label>
                    <select name="department" onChange={this.handleChange} value={this.state.value} id="">
                      <option value="">-</option>
                      {this.state.api.data.deparment.map((deparment, index) =>
                        <option key={index} value={deparment.departamento_c}>{deparment.deparment}</option>
                      )}
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="city">Ciudad</label>
                    <select name="ciudad_c" onChange={this.handleChange} value={this.state.value} id="">
                      <option value="">-</option>
                      {
                        this.state.cities_deparment ?
                          this.state.cities_deparment.map((city, index) =>
                            <option key={index} value={city}>{city}</option>
                          )
                          :
                          ""
                      }
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="neighboard">Barrio</label>
                    <select name="neighboard" id="">
                      <option value="">-</option>
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group other_input">
                    <label htmlFor="neighboard">Cual otro barrio</label>
                    <input type="text" />
                  </div>
                  <div className="login-field col-md-6 form-group other_input ">
                    <label htmlFor="address">Direccción</label>
                    <input type="text" placeholder="Cra 00 #00-00" />
                  </div>
                  <div className="checkbox-register col-12">
                    <input type="checkbox" required />
                    <p>Autorizo tratamiento de datos</p>
                  </div>
                </div>
              </form>
              <Link to="/register_three">
                <img
                  className="btn-submit-two"
                  src={require("../icons/siguieteboton.png")}
                  alt="next"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
