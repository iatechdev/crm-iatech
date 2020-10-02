import React, { Component } from "react";
import Welcome from "./shared/Welcome";
import "../style/register.css";
import ApiExter from "../API/apiexter";
import { Link } from "react-router-dom";


const regexSicCode= /^[0-9]{4,10}$/;
const regexCelular= /^[3][0-9]{9}$/;
const regexTlf= /^[0-9]{7}$/;

const validate = values =>{
  const errors = {}

  if(!values.pais_c){
    errors.pais_c ='campo obligatorio'
  }
  if(!values.departamento_c){
    errors.departamento_c ='campo obligatorio'
  }
  if(!values.cities_select){
    errors.cities_select ='campo obligatorio'
  }
  if(!values.celular_c){
    errors.celular_c ='campo obligatorio'
  }else if(!regexCelular.test(values.celular_c)){
    errors.celular_c ='valor invalido'
  }
  if(!values.habeasdata_c){
    errors.habeasdata_c ='campo obligatorio'
  }

  return errors
}

export default class Register_two extends Component {
  constructor() {
    super();
    const data_one = JSON.parse(localStorage.getItem("data_one"))
    this.state = {
      showButton: false,
      showButtonRegister: true,
      api: ApiExter,
      cities_deparment: [],
      cities_select:'',
      departamento_c:'',
      deparment_name:'',
      ciudad_c:'',
      phone_office:'',
      celular_c:'',
      genero_c:'',
      estadocivil_c:'',
      pais_c:'',
      ciudad_c:'',  
      barrio_c:'',
      cualbarrio_c:'',
      direccion_c:'',
      habeasdata_c:'',
      errors:{
      }
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

  handleChangeDeparment = (e) => {
    const value = e.target.value;
    const deparmentName = this.state.api.data.deparment.find((deparment)=>{return deparment.departamento_c === value}).deparment
    this.setState({ ...this.state, [e.target.name]: value , cities_deparment:this.state.api.data.cities[deparmentName] })
  }

  hadleSubmit= e =>{
    e.preventDefault();
    const{errors, ...sinErrors} = this.state
    const result = validate(sinErrors)

    this.setState({errors:result})
    if(!Object.keys(result).length){
      const data_two = {
        phone_office: this.state.phone_office,
        celular_c: this.state.celular_c,
        genero_c: this.state.genero_c,
        estadocivil_c: this.state.estadocivil_c,
        pais_c: this.state.pais_c,
        departamento_c: this.state.departamento_c,
        cities_select: this.state.cities_select,
        barrio_c: this.state.barrio_c,
        cualbarrio_c: this.state.cualbarrio_c,
        direccion_c: this.state.direccion_c,
        habeasdata_c: this.state.habeasdata_c,
      }
      localStorage.setItem('data_two', JSON.stringify(data_two));
      this.props.history.push('/register_three')
      console.log('validate form')
      
    } else{
      console.log('invalidate form')
    }
  }

  render() {
    const { errors }= this.state 
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
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="phone">Teléfono Fijo</label>
                    <input type="number" name="phone_office" onChange={this.handleChange} value={this.state.value} placeholder="Teléfono fijo"  />
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="movilphone">Celular</label>
                    <input type="number" name="celular_c" onChange={this.handleChange} value={this.state.value} placeholder="celular"/>
                    {errors.celular_c && <span className='error-data'>{errors.celular_c}</span>}
                  </div>
                  <div className="login-field col-md-6 form-group ">
                    <label htmlFor="gender">Género</label>
                    <select name="genero_c" onChange={this.handleChange} value={this.state.value} id="">
                      <option value="">-</option>
                      <option value="F">Femenino</option>
                      <option value="M">Masculino</option>
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group ">
                    <label htmlFor="nombre">Estado Civil</label>
                    <select name="estadocivil_c" onChange={this.handleChange} value={this.state.value}  id="">
                      <option value="">-</option>
                      <option value="soltero">Soltero(a)</option>
                      <option value="casado">Casado(a)</option>
                      <option value="unionlibre">Union Libre</option>
                      <option value="viudo">Viudo(a)</option>
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="pais">País</label>
                    <select name="pais_c" onChange={this.handleChange} value={this.state.value} id="">
                      <option value="">-</option>
                        <option value="COLOMBIA">COLOMBIA</option>
                        {errors.pais_c && <span className='error-data'>{errors.pais_c}</span>}
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="departamento">Departamento</label>
                    <select name="departamento_c" onChange={this.handleChangeDeparment} value={this.state.value} id="">
                      <option value="">-</option>
                      {this.state.api.data.deparment.map((deparment, index) =>
                        <option key={index} value={deparment.departamento_c} >{deparment.deparment}</option>
                      )}
                    </select>
                    {errors.departamento_c && <span className='error-data'>{errors.departamento_c}</span>}
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="city">Ciudad</label>
                    <select name="cities_select" onChange={this.handleChange} value={this.state.value} id="">
                      <option value="">-</option>
                      {
                        this.state.cities_deparment ?
                          this.state.cities_deparment.map((city, index) =>
                            <option key={index} value={city.codigo}>{city.name}</option>
                          )
                          :
                          ""
                      }
                    </select>
                    {errors.cities_select && <span className='error-data'>{errors.cities_select}</span>}
                  </div>
                  <div className="login-field col-md-6 form-group">
                    <label htmlFor="neighboard">Barrio</label>
                    <select name="barrio_c" onChange={this.handleChange} value={this.state.value} id="">
                    <option value="">-</option>
                      {this.state.api.data.barrios.map((barrio, index) =>
                        <option key={index} value={barrio.barrios}>{barrio.barrios}</option>
                      )}
                    </select>
                  </div>
                  <div className="login-field col-md-6 form-group other_input">
                    <label htmlFor="neighboard">Cual otro barrio</label>
                    <input type="text" name="cualbarrio_c" onChange={this.handleChange} value={this.state.value} />
                  </div>
                  <div className="login-field col-md-6 form-group other_input ">
                    <label htmlFor="address">Direccción</label>
                    <input type="text" placeholder="Cra 00 #00-00" name="direccion_c" onChange={this.handleChange} value={this.state.value} />
                  </div>
                  <div className="checkbox-register col-12">
                    <input type="checkbox" name="habeasdata_c" onChange={this.handleChange} value={this.state.value}required />
                    <p>Autorizo tratamiento de datos</p>
                    {errors.habeasdata_c && <span className='error-data'>{errors.habeasdata_c}</span>}
                  </div>
                </div>
                <button className="btn-submit-register-container">
                <img
                  className="btn-submit-register"
                  src={require("../icons/siguieteboton.png")}
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
