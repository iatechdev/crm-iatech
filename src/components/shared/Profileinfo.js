import React, { Component } from 'react'
import '../../style/profileinfo.css'
import '../../style/modal.css'

export default class Profileinfo extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: {}
    }
  }

  componentDidMount(){
      this.setState({data : JSON.parse(localStorage.getItem('response'))});
      
  
  }
    render() {
      //console.log(data)
      const { data } = this.state;
        return (
            <div className="col-xs-12 col-md-3 container-profile">
                <div className="row-icons">
                    <img src={require('../../icons/inicio.png')} alt="" />
                    <h2>{data.name}</h2>
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
                                <input type="email" placeholder= {data.name}/>     
                             </div>
                             <div className="form-group">
                                <label>Identificación</label> 
                                <input type="number" placeholder={data.sic_code}/>     
                             </div>
                             <div className="form-group">
                                <label>Celular</label> 
                                <input type="number" placeholder={data.celular_c}/>     
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
                        <h1>{data.name}</h1>
                    </div>
                    <hr/>
                    <div className="row-information-email" >
                        <h2>Correo</h2>
                        <h3>{data.email_address}</h3>
                    </div>
                    <div className="row-information-id" >
                        <h2>Identificación</h2>
                        <h3>{data.sic_code}</h3>
                    </div>
                    <div className="row-information-phone" >
                        <h2>Celular</h2>
                        <h3>{data.celular_c}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
