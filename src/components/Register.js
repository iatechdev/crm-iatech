import React, { Component } from "react";
import Welcome from "./shared/Welcome";
import "../style/register.css";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      showButton: false,
      showButtonRegister: true
    };
  }

  buttonShowRegister() {
    this.setState({
      showButtonRegister:!this.state.showButtonRegister,
      showButton:this.state.showButton
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
                  <button
                    className="register-login-btn"
                  >
                    <h2>Ingresar</h2>
                  </button>
                  {this.state.showButton ? 
                    <div className="img-circle">
                      <img
                        src={require("../icons/circle_gray.png")}
                        width="10px"
                        alt=""
                      />
                    </div>
                   : null}
                </Link>
                <Link to="/register">
                  <button onClick={() => this.buttonShowRegister()}>
                    <h2>Register</h2>
                  </button>
                  {this.state.showButtonRegister?
                    <div className="img-circle-register">
                    <img
                      src={require("../icons/circle_gray.png")}
                      width="8px"
                      alt=""
                    />
                  </div>
                  : null}
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
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" placeholder="Lorem ipsum" />
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" placeholder="Lorem ipsum" />
                  </div>
                  <div className="login-field col-12 form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" placeholder="email@informacion.com" />
                  </div>
                  <div className="login-field col-12 form-group ">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" placeholder="Lorem ipsum" />
                  </div>
                </div>
              </form>
              <Link to="/register_two">
                <img  className="btn-submit-two" src={require("../icons/siguieteboton.png")} alt="next" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
