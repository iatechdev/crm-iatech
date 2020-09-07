import React, { Component } from "react";
import Welcome from "./shared/Welcome";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/register.css";
import "../style/modal.css";
import { Link } from "react-router-dom";

export default class Register_three extends Component {
  constructor() {
    super();
    this.state = {
      showButton: false,
      showButtonRegister: true,
      startDate: new Date()
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  buttonShowRegister() {
    this.setState({
      showButtonRegister: !this.state.showButtonRegister,
      showButton: this.state.showButton
    });
  }
  render() {
    return (
      <div className="container">
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
                    <label htmlFor="Fecha">Fecha de nacimiento</label>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      locale="es-CO"
                    />
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="edad">Edad</label>
                    <select>
                      <option value="">-</option>
                      <option value="18_24">18-24</option>
                      <option value="25_34">25-34</option>
                      <option value="35_44">35-44</option>
                      <option value="45_54">45-54</option>
                      <option value="55_64">55-64</option>
                      <option value="Mayores_65">Mayores de 65</option>
                    </select>{" "}
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="profession">Profesión</label>
                    <select>
                      <option value="">-</option>
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group other_input">
                    <label htmlFor="otherprofession">Otra profesión</label>
                    <input type="text" />
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="social_netword">Red social</label>
                    <select>
                      <option value="">-</option>
                      <option value="facebook">Facebook</option>
                      <option value="twitter">Twitter</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="instagram">Instagram</option>
                    </select>{" "}
                  </div>
                  <div className="login-field col-md-6 form-group ">
                    <label htmlFor="centrocomercial">Centro Comercial</label>
                    <select>
                      <option value="">-</option>
                      <option value="ia_mall_id_c">Aventura CC</option>
                      
                    </select>
                  </div>
                  <div className="checkbox-register col-12">
                    <input type="checkbox" required />
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
                            >
                              <img src={require("../icons/close.png")} alt="" />
                            </button>
                          </div>
                          <div className="modal-body modal-body-content-term">
                            <h2>Términos y condiciones</h2>
                            <p>
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
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-footer-profile"
                            >
                              Aceptar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <Link to="/customerinfo">
                <img
                  className="btn-submit-three"
                  src={require("../icons/entrarboton.png")}
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
