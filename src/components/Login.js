import React, { Component } from "react";
import Welcome from "./shared/Welcome";
import "../style/login.css";
import "../style/modal.css";
import { Link } from "react-router-dom";


export default class Login extends Component {
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
                </Link>
                <Link to="/register">
                  <button>
                    <h2>Register</h2>
                  </button>
                </Link>
              </div>
              <div className="form-login">
                <h1>Ingresar</h1>
                <p>ingesar con tu correo o red social</p>
                <div className="icons-reds">
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
                <div className="login-field">
                  <label htmlFor="id">Identidad</label>
                  <input type="number" placeholder="1124657890" />
                </div>
                <div className="login-field">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" placeholder="Lorem ipsum" />
                </div>
                <div className="password-forget">
                  <button data-toggle="modal" data-target="#exampleModalLong">
                    ¿Olvidó su contraseña?
                  </button>
                  <div
                    className="modal fade modalOne"
                    id="exampleModalLong"
                    role="dialog"
                    aria-labelledby="exampleModalLongTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog " role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <img src={require("../icons/close.png")} alt="" />
                          </button>
                        </div>
                        <div className="modal-body">
                          <img className="img-pass" src={require("../icons/password.png")} alt=""/>
                          <h2>Olvidaste tu contraseña</h2>
                          <p className="text-pass">Ingresa tu nombre de usuario o correo electrónico y te enviaremos un enlace para recuperar el acceso a tu cuenta.</p>
                          <div className="datas-email">
                            <label>E-mail</label> 
                            <input type="email" placeholder="email@informacion.com"/>                           
                          </div>

                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-footer">
                            Enviar enlace de inicio de sesión
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkbox-login">
                  <input type="checkbox" />
                  <p>Mantener activo</p>
                </div>
                <div className="login-register">
                  <p>
                    ¿No tienes una cuenta? <span>Regístrate</span>{" "}
                  </p>
                </div>
              </div>
              <Link to="/register" className="btn-login">
                <img
                  src={require("../icons/entrarboton.png")}
                  alt="siguiente"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
