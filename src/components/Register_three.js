import React, { Component } from "react";
import Welcome from "./shared/Welcome";
import "../style/register.css";
import "../style/modal.css";
import { Link } from "react-router-dom";

export default class Register_three extends Component {
  constructor() {
    super();
    this.state = {
      showButton: false,
      showButtonRegister: true
    };
  }

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
            <div className="col-8 login-container">
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
                  <h1>Registrarse</h1>
                  <p>Regístrate con tu correo o red social</p>
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
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="profession">Profesión</label>
                    <select >
                      <option value="">Lorem ipsum</option>
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group ">
                    <label htmlFor="conveyance">Medio de transporte</label>
                    <select>
                      <option value="">Lorem ipsum</option>
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group ">
                    <label htmlFor="pet">Mascota</label>
                    <select>
                      <option value="">Lorem ipsum</option>
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="type_pet">Tipo de mascota</label>
                  <select >
                      <option value="">Lorem ipsum</option>
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="occupation">Ocupación</label>
                    <select>
                      <option value="">Lorem ipsum</option>
                    </select>{" "}
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="social_netword">Red social</label>
                    <select>
                      <option value="">Lorem ipsum</option>
                    </select>{" "}
                  </div>
                  <div className="login-field col-md-6 form-group ">
                    <label htmlFor="mall">Centro comercial</label>
                    <select>
                      <option value="">Lorem ipsum</option>
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
