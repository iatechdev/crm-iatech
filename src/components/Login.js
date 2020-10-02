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
      password: '',
      identificacion: '',
      contrasena: '',
      error: false,
      inValid: false,
      inValidPass: false,
      inValidModal:false,
      errorModal:false
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

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.sic_code != "" && this.state.password != "") {
      axios.post(`https://master.iatech.com.co:4000/api/register/login`, {
        sic_code: this.state.sic_code,
        password_c: this.state.password

      })
        .then((response) => {
          console.log(response)
          if (response.data.done === 'Login correct') {
            localStorage.setItem('response', JSON.stringify(response.data.dataUser[0]));
            return (
              this.props.history.push('/customerinfo')
            )
          } else if ((response.data.done === 'Error,email not found')) {
            this.setState({
              inValid: true,
            })
          } else if ((response.data.done === 'Error,password not found')) {
            this.setState({
              inValidPass: true,
            })
          }
        })
        .catch(function (error) {
          console.log(error);
        })
    } else {
      this.setState({
        error: true,
      })
    };
  }


  onSubmitForgetPassword = () => {
    console.log('holis')
    if (this.state.identificacion != "" && this.state.contrasena != "") {
      axios.put(`https://master.iatech.com.co:4000/api/register/updatepassword`, {
        sic_code: this.state.identificacion,
        password_c: this.state.contrasena

      })
        .then((response) => {
          console.log(response)
          if (response.data.done === 'login correct') {
            return (
              window.location.reload()
            )
          } else if ((response.data.done === 'Error,user not found')) {
            this.setState({
              inValidModal: true,
            })
          }
        })
        .catch(function (error) {
          console.log(error);
        })
    } else {
      this.setState({
        errorModal: true,
      })
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row row-container">
          <div className="col col-container">
            <Welcome />
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
                  {this.state.error ? <span className='error-data'>Campo Obligatorio</span> : null}
                  {this.state.inValid ? <span className='error-data'>Identificación incorrecta</span> : null}
                </div>
                <div className="login-field">
                  <label htmlFor="password">Contraseña</label>
                  <input type="password" name="password" value={this.state.password} onChange={this.onInputChange} />
                  {this.state.error ? <span className='error-data'>Campo Obligatorio</span> : null}
                  {this.state.inValidPass ? <span className='error-data'>Contraseña incorrecta</span> : null}
                </div>
                {/* <div className="checkbox-login">
                  <input type="checkbox" />
                  <p>Mantener activo</p>
                </div> */}
                <button className="btn-login">
                  Entrar
              </button>
              </form>
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
                          Ingresa su identificación y su nueva contraseña
                            {/* Ingresa tu nombre de usuario o correo electrónico y
                            te enviaremos un enlace para recuperar el acceso a
                            tu cuenta. */}
                        </p>
                        <form>
                          <div className="datas-email">
                            <label>identificación</label>
                            <input
                              type="number"
                              placeholder="identificación"
                              name="identificacion" value={this.state.identificacion} onChange={this.onInputChange}
                            />
                            {this.state.inValidModal ? <span className='error-data'>Identificación no registrada</span> : null}
                            {this.state.errorModal ? <span className='error-data'>campo obligatorio</span> : null}
                          </div>
                          <div className="datas-email">
                            <label>Contraseña</label>
                            <input
                              type="password"
                              placeholder="contraseña"
                              name="contrasena" value={this.state.contrasena} onChange={this.onInputChange}
                            />
                            {this.state.errorModal ? <span className='error-data'>campo obligatorio</span> : null}
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-footer" onClick={this.onSubmitForgetPassword}>
                              inicio de Sesión
                            {/* Enviar enlace de inicio de sesión */}
                            </button>
                          </div>
                        </form>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="login-register">
                  <p>
                    ¿No tienes una cuenta?{" "}
                    <Link to="/register">
                      <span>Regístrate</span>
                    </Link>
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
