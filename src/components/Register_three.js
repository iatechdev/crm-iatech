import React, { Component } from "react";
import Welcome from "./shared/Welcome";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/register.css";
import "../style/modal.css";
import * as moment from 'moment';
import { Link } from "react-router-dom";
import ApiExter from "../API/apiexter";
import axios from 'axios';


const validate = values => {
  const errors = {}
  if (!values.edades_c) {
    errors.edades_c = 'campo obligatorio'
  }
  if (!values.ia_mall_id_c) {
    errors.ia_mall_id_c = 'campo obligatorio'
  }

  if (!values.autoriza_tratamiento_datos_c) {
    errors.autoriza_tratamiento_datos_c = 'campo obligatorio'
  }

  return errors
}

export default class Register_three extends Component {
  constructor() {
    super();
    const data_one = JSON.parse(localStorage.getItem("data_one"))
    const data_two = JSON.parse(localStorage.getItem("data_two"))
    this.state = {
      showButton: false,
      showButtonRegister: true,
      api: ApiExter,
      name: data_one.name,
      apellido_c: data_one.apellido_c,
      email_address: data_one.email_address,
      password_c: data_one.password_c,
      tipo_identificacion_c: data_one.tipo_identificacion__c,
      sic_code: data_one.sic_code,
      phone_office: data_two.phone_office,
      celular_c: data_two.celular_c,
      genero_c: data_two.genero_c,
      estadocivil_c: data_two.estadocivil_c,
      pais_c: data_two.pais_c,
      departamento_c: data_two.departamento_c,
      ciudad_c: data_two.cities_select,
      barrio_c: data_two.barrio_c,
      cualbarrio_c: data_two.cualbarrio_c,
      direccion_c: data_two.direccion_c,
      habeasdata_c: data_two.habeasdata_c,
      startDate: new Date(),
      edades_c: '',
      profesion_c: '',
      otraprofesion_c: '',
      redes_sociales_c: '',
      ia_mall_id_c: '',
      autoriza_tratamiento_datos_c: '',
      errors: {}
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleChangeValue = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    this.setState({ ...this.state, [e.target.name]: value })
  }

  buttonShowRegister() {
    this.setState({
      showButtonRegister: !this.state.showButtonRegister,
      showButton: this.state.showButton
    });
  }
  aceptModal() {
    let validModal = document.getElementById("autoriza_tratamiento_datos_c");
    validModal= validModal.checked = true; 
    let body = document.getElementById("button-close");
    body.click();

  }

  hadleSubmit = e => {
    e.preventDefault();
    const { errors, ...sinErrors } = this.state
    const result = validate(sinErrors)

    this.setState({ errors: result })
    if (!Object.keys(result).length) {
      console.log(this.state)
      axios.post(`https://master.iatech.com.co:4000/api/register/registerformtwo`,
        {
          name: this.state.name,
          apellido_c: this.state.apellido_c,
          email_address: this.state.email_address,
          password_c: this.state.password_c,
          tipo_identificacion_c: this.state.tipo_identificacion_c,
          sic_code: this.state.sic_code,
          phone_office: this.state.phone_office,
          celular_c: this.state.celular_c,
          genero_c: this.state.genero_c,
          estadocivil_c: this.state.estadocivil_c,
          pais_c: this.state.pais_c,
          departamento_c: this.state.departamento_c,
          ciudad_c: this.state.ciudad_c,
          barrio_c: this.state.barrio_c,
          cualbarrio_c: this.state.cualbarrio_c,
          direccion_c: this.state.direccion_c,
          habeasdata_c: this.state.habeasdata_c,
          fecha_cumpleanos_c: moment(this.state.startDate).format('YYYY-MM-DD'),
          edades_c: this.state.edades_c,
          profesion_c: this.state.profesion_c,
          otraprofesion_c: this.state.otraprofesion_c,
          redes_sociales_c: this.state.redes_sociales_c,
          ia_mall_id_c: this.state.ia_mall_id_c,
          autoriza_tratamiento_datos_c: this.state.autoriza_tratamiento_datos_c

        })
        .then((response) => {
          console.log(response)
          this.props.history.push('/');
          localStorage.clear();
        }).catch((error) => {
          console.log(error);
        });
    } else {
      console.log('invalidate form')
    }
  }
  render() {
    const { errors } = this.state
    return (
      <div className="container" id="register_three">
        <div className="row-container">
          <div className="col-container">
            <Welcome />
            <div className="col-xs-12 col-md-8 login-container">
              <div className="register-login">
                <Link to="/">
                  <button className="register-login-btn">
                    <h2>Ingresar</h2>
                  </button>
                  {this.state.showButton ? (
                    <div className="img-circle-register">
                      <img
                        src={require("../icons/circle_gray.png")}
                        width="8px"
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
                        width="10px"
                        alt=""
                      />
                    </div>
                  ) : null}
                </Link>
              </div>
              <form className="form-login" onSubmit={this.hadleSubmit}>
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
                    <label htmlFor="Fecha">Fecha de nacimiento</label>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      locale="es-CO"

                    />
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="edad">Edad</label>
                    <select name="edades_c" onChange={this.handleChangeValue} value={this.state.value}>
                      <option value="">-</option>
                      <option value="18_24">18-24</option>
                      <option value="25_34">25-34</option>
                      <option value="35_44">35-44</option>
                      <option value="45_54">45-54</option>
                      <option value="55_64">55-64</option>
                      <option value="Mayores_65">Mayores de 65</option>
                    </select>
                    {errors.edades_c && <span className='error-data'>{errors.edades_c}</span>}
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="profession">Profesión</label>
                    <select name="profesion_c" onChange={this.handleChangeValue} value={this.state.value}>
                      <option value="">-</option>
                      {this.state.api.data.profesion.map((profesion, index) =>
                        <option key={index} value={profesion.profesion}>{profesion.profesion}</option>
                      )}
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group other_input">
                    <label htmlFor="otherprofession">Otra profesión</label>
                    <input type="text" name="otraprofesion_c" onChange={this.handleChangeValue} value={this.state.value} />
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="social_netword">Red social</label>
                    <select name="redes_sociales_c" onChange={this.handleChangeValue} value={this.state.value}>
                      <option value="">-</option>
                      <option value="facebook">Facebook</option>
                      <option value="twitter">Twitter</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="instagram">Instagram</option>
                    </select>{" "}
                  </div>
                  <div className="login-field col-md-6 form-group ">
                    <label htmlFor="centrocomercial">Centro Comercial</label>
                    <select name="ia_mall_id_c" onChange={this.handleChangeValue} value={this.state.value}>
                      <option value="">-</option>
                      <option value="7d0d0a3f-5d38-4fe0-f3e3-5d7aca3409af">Aventura CC</option>

                    </select>
                    {errors.ia_mall_id_c && <span className='error-data'>{errors.ia_mall_id_c}</span>}
                  </div>
                  <div className="checkbox-register col-12">
                    <input type="checkbox" name="autoriza_tratamiento_datos_c" id="autoriza_tratamiento_datos_c" onChange={this.handleChangeValue} value={this.state.value} required />
                    <p>
                      Acepto
                      <span data-toggle="modal" data-target="#modalterm">
                        {" "}
                        términos y condiciones
                      </span>
                    </p>
                    <div
                      className="modal fade modalOne"
                      id="modalterm"
                      role="dialog"
                      aria-labelledby="modaltermTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-term"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <button
                              type="button"
                              className="btn-close-term"
                              data-dismiss="modal"
                              aria-label="Close"
                              id="button-close"
                            >
                              <img src={require("../icons/close.png")} alt="" />
                            </button>
                          </div>
                          <div className="modal-body modal-body-content-term">
                            <h2>Términos y condiciones</h2>
                            {/* <p>
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Rem suscipit, maiores
                              consectetur deserunt corrupti nostrum assumenda.
                              Eos, nostrum suscipit. Amet iste consequuntur,
                              omnis eveniet cumque doloremque sapiente atque
                              magni dolores! Lorem ipsum, dolor sit amet
                              consectetur adipisicing elit. Tempore, ab.
                              Mollitia ducimus dignissimos fugiat dolorem error
                              consequatur, placeat, quasi non hic eius quae
                              officiis. Est assumenda nam tempore vitae cum.
                            </p> */}
                            <div>
                              <object
                              data={require("../document/politicas.pdf")}
                              type="application/pdf"
                              className="pdf-modal"
                              >

                              </object>
                            </div>
                        
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-footer-profile"
                              onClick={this.aceptModal}
                            >
                              Aceptar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {errors.autoriza_tratamiento_datos_c && <span className='error-data'>{errors.autoriza_tratamiento_datos_c}</span>}

                </div>
                <button className="btn-submit-register-container">
                  <img
                    className="btn-submit-register"
                    src={require("../icons/entrarboton.png")}
                    alt="next"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
