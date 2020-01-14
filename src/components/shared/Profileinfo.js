import React, { Component } from 'react'
import '../../style/profileinfo.css'

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
                         <img src={require('../../icons/edit.png')}  alt=""/>
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
