import React, { Component } from "react";
import Welcome from "./shared/Welcome";
import "../style/register.css";
import { Link } from "react-router-dom";

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
      showButtonRegister: true,
      error: false,
      name: null,
      apellido_c: null,
      email_address: null,
      password_c: null,
      errors: {
        name: '',
        apellido_c: '',
        email_address:'',
        password_c: '',
        confirm_password:''
      }
    };
  }

  buttonShowRegister() {
    this.setState({
      showButtonRegister:!this.state.showButtonRegister,
      showButton:this.state.showButton
    });
  }


  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name': 
        errors.name = 
          value.length < 3
            ? 'nombre debe ser mayor a 3 caracteres!'
            : '';
        break;
        case 'apellido_c': 
        errors.apellido_c = 
          value.length < 3
            ? 'apellido debe ser mayor a 3 caracteres!'
            : '';
        break;
      case 'email_address': 
        errors.email_address = 
          validEmailRegex.test(value)
            ? ''
            : 'email no es valido!';
        break;
      case 'password_c': 
        errors.password_c = 
          value.length < 8
            ? 'contraseña debe ser mayor a 8 caracteres!'
            : '';
        break;
        // case 'confirm_password': 
        // errors.confirm_password = 
        //   value.length != value.length.password_c
        //     ? 'contraseña incorrecta!'
        //     : '';
        // break;
      default:
        break;
    }
    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
      const data_one = {
        name: this.state.name,
        apellido_c: this.state.apellido_c,
        email_address: this.state.email_address,
        password_c: this.state.password_c
      }
      localStorage.setItem('data_one', JSON.stringify(data_one));
      this.history.push('/register_two')
    }else{
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
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" placeholder="Nombre" name="name" onChange={this.handleChange} noValidate/>
                    {errors.name.length > 0 && <span className='error-data'>{errors.name}</span>}
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" placeholder="Apellido" name="apellido_c" onChange={this.handleChange} noValidate/>
                    {errors.apellido_c.length > 0 && <span className='error-data'>{errors.apellido_c}</span>}
                  </div>
                  <div className="login-field col-12 form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" placeholder="email" name="email_address" onChange={this.handleChange} noValidate />
                    {errors.email_address.length > 0 && <span className='error-data'>{errors.email_address}</span>}
                  </div>
                  <div className="login-field col-12 form-group ">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" placeholder="contraseña" name="password_c" onChange={this.handleChange}  noValidate/>
                    {errors.password_c.length > 0 && <span className='error-data'>{errors.password_c}</span>}
                  </div>
                  {/* <div className="login-field col-12 form-group ">
                    <label htmlFor="password"> Confirmar Contraseña</label>
                    <input type="password" placeholder="confirmar contraseña" name="confirm_password" onChange={this.handleChange} noValidate/>
                    {errors.confirm_password.length > 0 && <span className='error-data'>{errors.confirm_password}</span>}
                  </div> */}
                </div>
                <button>
                  <img  className="btn-submit-two" src={require("../icons/siguieteboton.png")} alt="next" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
