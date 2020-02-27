import React, { Component } from "react";
import Welcome from "./shared/Welcome";
import "../style/login.css";
import "../style/modal.css";
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: true,
      showButtonRegister: false,
      sic_code: '',
      password: ''
    };
   
  }



  buttonShow() {
    this.setState({
      showButton: this.state.showButton,
      showButtonRegister: this.state.showButtonRegister
    });
  }

  onInputChange = (eventObject) => {
    this.setState({
      [eventObject.target.name]: eventObject.target.value
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { sic_code, password } = this.state;

    if (sic_code == password) {
      await axios.get('http://master.iatech.com.co:4000/api/customer/authcustomer?doc='+sic_code)
        .then((response) => {
          console.log(response)
          if (response.data.responde.length >= 1) {
            localStorage.setItem('response', JSON.stringify(response.data.responde[0]));
            return (
              this.props.history.push('/customerinfo')
            )
      
          } else {
            return (alert('Identificación no esta registrada'),
              console.log('error'));
          }
        })
        .catch(function (error) {
          console.log(error);
        })

    } else {
      return (alert('Contraseña no coinciden'))
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row row-container">
          <div className="col col-container">
            <Welcome/>
            <div className="col-xs-12 col-md-8 login-container">
              <div className="register-login">
                <Link to="/">
                  <button
                    className="register-login-btn"
                    onClick={() => this.buttonShow()}
                  >
                    <h2>Ingresar</h2>
                  </button>
                  {this.state.showButton ?
                    <div className="img-circle">
                      <img
                        src={require("../icons/circle_gray.png")}
                        width="8px"
                        alt=""
                      />
                    </div>
                    : null}
                </Link>
                <Link to="/register">
                  <button>
                    <h2>Register</h2>
                  </button>
                  {this.state.showButtonRegister ?
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
              <form className="form-login" onSubmit={this.onSubmit} >
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
                  <input type="number" name="sic_code" value={this.state.sic_code} onChange={this.onInputChange} />
                </div>
                <div className="login-field">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" name="password" value={this.state.password} onChange={this.onInputChange} />
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
                            className="btn-close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <img src={require("../icons/close.png")} alt="" />
                          </button>
                        </div>
                        <div className="modal-body">
                          <img
                            className="img-pass"
                            src={require("../icons/password.png")}
                            alt=""
                          />
                          <h2>Olvidaste tu contraseña</h2>
                          <p className="text-pass">
                            Ingresa tu nombre de usuario o correo electrónico y
                            te enviaremos un enlace para recuperar el acceso a
                            tu cuenta.
                          </p>
                          <div className="datas-email">
                            <label>E-mail</label>
                            <input
                              type="email"
                              placeholder="email@informacion.com"
                            />
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
                    ¿No tienes una cuenta?{" "}
                    <Link to="/register">
                      <span>Regístrate</span>
                    </Link>
                  </p>
                </div>
                <button className="btn-login">
                  Entrar
              </button>
              </form>


            </div>
          </div>
        </div>
      </div>
    );
  }
}
