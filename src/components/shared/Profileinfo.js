import React, { Component } from 'react'
import '../../style/profileinfo.css'
import '../../style/modal.css'

export default class Profileinfo extends Component {
    render() {
      
        return (
            <div className="col-3 container-profile">
                <div className="row-icons">
                    <img src={require('../../icons/inicio.png')} alt="" />
                    <h2>Mauricio roldán</h2>
                </div>
                <div className="row row-information">
                  <div className="row-information-icon">
                        <img src={require('../../icons/edit.png')}  alt="" data-toggle="modal" data-target="#modalProfile"/>
                        <div
                    className="modal fade modalOne"
                    id="modalProfile"
                    role="dialog"
                    aria-labelledby="modalProfileTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog " role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="btn-close-profile"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <img src={require("../../icons/close.png")} alt="" />
                          </button>
                        </div>
                        <div className="modal-body">
                         <form action="">
                             <div className="form-group">
                                <label>Nombre</label> 
                                <input type="email" placeholder="Karen Lorena Ochoa Pineda"/>     
                             </div>
                             <div className="form-group">
                                <label>Identificación</label> 
                                <input type="number" placeholder="1140868529"/>     
                             </div>
                             <div className="form-group">
                                <label>Celular</label> 
                                <input type="number" placeholder="3123452671"/>     
                             </div>
                         </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-footer-profile">
                           Guardar
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
