import React, { Component } from 'react'
import '../../style/profileinfo.css'
import '../../style/modal.css'

export default class Profileinfo extends Component {
    render() {
        return (
            <div className="col-3 container-profile">
                <div className="row-icons">
                    <img src={require('../../icons/inicio.png')} alt=""/>
                    <h2>Mauricio roldán</h2>
                </div>
                <div className="row row-information">
                    <div className="row-information-icon">
                         <img src={require('../../icons/edit.png')}  alt="" data-toggle="modal" data-target="#exampleModalLong"/>
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
                            <img src={require("../../icons/close.png")} alt="" />
                          </button>
                        </div>
                        <div className="modal-body">
                          <img className="img-pass" src={require("../../icons/password.png")} alt="" />
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
                     <div className="row-information-customer">
                        <h2>Nombre</h2>
                        <h1>Mauricio Roldán Bernal</h1>
                    </div>
                    <hr/>
                    <div className="row-information-email" >
                        <h2>Correo</h2>
                        <h3>mauroroldan@gmail.com</h3>
                    </div>
                    <div className="row-information-id" >
                        <h2>Identificación</h2>
                        <h3>1128272550</h3>
                    </div>
                    <div className="row-information-phone" >
                        <h2>Celular</h2>
                        <h3>3004942626</h3>
                    </div>
                </div>
            </div>
        )
    }
}
