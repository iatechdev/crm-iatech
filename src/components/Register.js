import React, { Component } from "react";
import Welcome from "./shared/Welcome";
import "../style/register.css";
import { Link } from "react-router-dom";
import axios from 'axios';

// const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
// const regexSicCode= /^[0-9]{4,10}$/;
// const validateForm = (errors) => {
//   let valid = true;
//   Object.values(errors).forEach(
//     (val) => val.length > 0 && (valid = false)
//   );
//   return valid;
// }

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const regexSicCode= /^[0-9]{4,10}$/;

const validate = values =>{
  const errors = {}
  if(!values.tipo_identificacion__c){
    errors.tipo_identificacion__c ='campo obligatorio'
  }
  if(!values.sic_code){
    errors.sic_code ='campo obligatorio'
  }else if(!regexSicCode.test(values.sic_code)){
    errors.sic_code ='valor invalido'
  }
  if(!values.name){
    errors.name ='campo obligatorio'
  }
  if(!values.apellido_c){
    errors.apellido_c ='campo obligatorio'
  }
  if(!values.email_address){
    errors.email_address ='campo obligatorio'
  }else if(!validEmailRegex.test(values.email_address)){
    errors.email_address ='valor invalido'
  }

  return errors
}

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
      showButtonRegister: true,
      error: false,
      tipo_identificacion__c:null,
      sic_code:null,
      name: null,
      apellido_c: null,
      email_address: null,
      password_c: null,
      inValid:false,
      errors: {
      }
    };
  }

  buttonShowRegister() {
    this.setState({
      showButtonRegister:!this.state.showButtonRegister,
      showButton:this.state.showButton
    });
  }


  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ ...this.state, [e.target.name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const{errors, ...sinErrors} = this.state
    const result = validate(sinErrors)

    this.setState({errors:result})
    if(!Object.keys(result).length){
      const data_one = {
        tipo_identificacion__c: this.state.tipo_identificacion__c,
        sic_code: this.state.sic_code,
        name: this.state.name,
        apellido_c: this.state.apellido_c,
        email_address: this.state.email_address,
        password_c: this.state.password_c
      }

      axios.post(`https://master.iatech.com.co:4000/api/register/existinguser`, {
        sic_code: this.state.sic_code
      })
        .then((response) => {
          console.log(response)
          if (response.data.done === 'existing user') {
            this.setState({
              inValid: true,
            })
          } else if ((response.data.done === 'Error,user not found')) {
            localStorage.setItem('data_one', JSON.stringify(data_one));
            this.props.history.push('/register_two');
          }
        })
        .catch(function (error) {
          console.log(error);
        })
    } else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
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
              <form className="form-login" onSubmit={this.handleSubmit}>
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
                    <select name="tipo_identificacion__c" onChange={this.handleChange} value={this.state.value}  id="">
                      <option value="">-</option>
                      <option value="CC">Cédula de Ciudadanía</option>
                      <option value="CEX">Cédula DE Extranjería</option>
                      <option value="NIT">Nit</option>
                      <option value="PAS">Pasaporte</option>
                      <option value="NIUP">Registro Civil</option>
                    </select>
                    {errors.tipo_identificacion__c && <span className='error-data'>{errors.tipo_identificacion__c}</span>}
                  </div>
                  <div className="login-field col-md-6 form-group ">
                    <label htmlFor="identificacion">Identificación</label>
                    <input type="number" name="sic_code" onChange={this.handleChange} value={this.state.value}  placeholder="identificación" />
                    {errors.sic_code && <span className='error-data'>{errors.sic_code}</span>}
                    {this.state.inValid ? <span className='error-data'>Identificación ya está registrada</span> : null}
                  </div>
                  <div className="login-field col-md-6 form-group ">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" placeholder="Nombre" name="name" onChange={this.handleChange} noValidate/>
                    {errors.name && <span className='error-data'>{errors.name}</span>}
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" placeholder="Apellido" name="apellido_c" onChange={this.handleChange} noValidate/>
                    {errors.apellido_c && <span className='error-data'>{errors.apellido_c}</span>}
                  </div>
                  <div className="login-field col-12 form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" placeholder="email" name="email_address" onChange={this.handleChange} noValidate />
                    {errors.email_address && <span className='error-data'>{errors.email_address}</span>}
                  </div>
                  <div className="login-field col-12 form-group ">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" placeholder="contraseña" name="password_c" onChange={this.handleChange}  noValidate/>
                    {errors.password_c && <span className='error-data'>{errors.password_c}</span>}
                  </div>
                  {/* <div className="login-field col-12 form-group ">
                    <label htmlFor="password"> Confirmar Contraseña</label>
                    <input type="password" placeholder="confirmar contraseña" name="confirm_password" onChange={this.handleChange} noValidate/>
                    {errors.confirm_password.length > 0 && <span className='error-data'>{errors.confirm_password}</span>}
                  </div> */}
                </div>
                <button className="btn-submit-register-container">
                  <img  className="btn-submit-register" src={require("../icons/siguieteboton.png")} alt="next" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
