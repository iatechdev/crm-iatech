import React from "react";
import "../../style/modal.css";

export default class Modal extends React.Component {
    render() {
    
        return (
            <div className="modalOne">
                <div className="modalTwo">
                    <div className="modalThree">
                        <div  className="modalThree_one">
                            <div className="btn btn-close" onClick={this.props.onClose}>
                                <img src={require('../../icons/close1.png')}  alt=""/>
                            </div>
                        </div>
                        <div className="modalThree_two">
                            <img src={require('../../icons/password.png')}  alt=""/>
                            <h2>Olvidaste tu contraseña</h2>
                            <label>Ingresa tu nombre de usuario o correo electrónico y te enviaremos un enlace para recuperar el acceso a tu cuenta.</label>
                                <div className="modalThree_two_one">
                                    <h2>E-mail</h2>
                                    <input type="email" placeholder="email@informacion.com"/>
                                    <button><img src={require('../../icons/botonaceptar.png')}  alt=""/></button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        );
      }
  }
