import React, { Component } from "react";
import Profileinfo from "./shared/Profileinfo";
import Sidebar from "./shared/Sidebar";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../style/billing.css";
import "../style/modal.css";

export default class Billing_two extends Component {
  constructor(props) {
    super(props);
    const data = JSON.parse(localStorage.getItem('response'))
    this.state = {
      doc: data.sic_code,
      billings: [],
      selected: 0,
      currentPage: 1,
      todosPerPage: 5,
      currentTodos: [],
      databilling: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  onInputChange = (eventObject) => {
    this.setState({
      [eventObject.target.name]: eventObject.target.value
    })
  }

  async componentDidMount() {
    const { currentPage, todosPerPage } = this.state;
    await axios.get(`https://master.iatech.com.co:4000/api/billings/infobilling?doc=${this.state.doc}`).then(res =>{
    console.log(res)  
    if(res.data != ''){
        this.setState({
          billings: res.data.responde,
          currentTodos: res.data.responde.slice((currentPage * todosPerPage) - todosPerPage, (currentPage * todosPerPage)),
          databilling: false
        })
      } else {
        this.setState({
          databilling: true
        })
      }
    })
      console.log(this.state.databilling)
  }


  handleClick(event) {
    const current = Number(event.target.id);
    const { todosPerPage } = this.state;
    this.setState({
      currentPage: current,
      currentTodos: this.state.billings.slice((current * todosPerPage) - todosPerPage, (current * todosPerPage))
    });
  }


  render() {

    const { billings, todosPerPage } = this.state;
    //console.log(billings)

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(billings.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div className="container">
        <div className="row-container">
          <div className=" col-12 col-container">
            <Profileinfo />
            <div className="col-xs-12 col-md-8 customerinfo-billing-container">
              <div className="billing-profile">
                <img src={require("../icons/billing2.png")} alt="" />
                <h2>Facturas</h2>
              </div>
              <div className="customerinfo-billing">
                <div className="add-billing">
                  <Link to="/billing">
                    <img src={require("../icons/Agregar.png")} alt="" />
                  </Link>
                  <h2>Agregar factura</h2>
                </div>
                <ul>
                  <li>
                    <h2>Facturas registradas</h2>
                  </li>
                </ul>
                {
                  this.state.databilling == true ?
                  <div className="billing-stop">NO TIENE FACTURAS REGISTRADAS</div>
                  :
                  <div>
                  <div className="list-billing">
                    {this.state.currentTodos.map(billing => (
                      <div className="list-billing-items-general" key={billing.id} >
                        <div className="list-billing-items col-9">
                          <div>
                            <img src={require("../icons/billing2.png")} alt="" />
                          </div>
                          <div className="list-billing-items-info">
                            <p>{billing.name_cliente}</p>
                            <p>Nro de factura</p>
                            <p>{billing.number_factura.substr(0, 4)}</p>
                          </div>
                        </div>
                        <button
                          className="btn col-3"
                          data-toggle="modal"
                          data-target={"#modlBilling" + billing.number_factura}
                        >
                          <p>
                            Ver más{" "}
                            <img src={require("../icons/arrow_right.png")} alt="" />
                          </p>
                        </button>{" "}
                        <div
                          className="modal fade modalOne"
                          id={"modlBilling" + billing.number_factura}
                          role="dialog"
                          aria-labelledby="modalBillingTitle"
                          aria-hidden="true"
                        >
                          <div
                            className="modal-dialog modal-dialog-billing"
                            role="document"
                          >
                            <div className="modal-content">
                              <div className="modal-body-billing">
                                <div className="modal-body-billing-one">
                                  <img
                                    src={require("../icons/billing2.png")}
                                    alt=""
                                  />
                                  <h2>Nro de factura</h2>
                                  <h2>{billing.number_factura}</h2>
                                </div>
                                <div className="modal-body-billing-two">
                                  <button
                                    type="button"
                                    className="btn-close-billing"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <img
                                      src={require("../icons/close.png")}
                                      alt=""
                                    />
                                  </button>
                                  <div className="modal-body-billing-two-two">
                                    <div className="modal-body-billing-two-one">
                                      <h2>Nombre de cliente</h2>
                                      <label htmlFor="">{billing.name_cliente}</label>
                                    </div>
                                    <div className="modal-body-billing-two-one">
                                      <h2>Almacen</h2>
                                      <label htmlFor="">{billing.name_store}</label>
                                    </div>
                                    <div className="modal-body-billing-two-one">
                                      <h2>Sorteo</h2>
                                      <label htmlFor="">{billing.name_sorteo}</label>
                                    </div>
                                    <div className="modal-body-billing-two-one">
                                      <h2>Monto de la factura </h2>
                                      <label htmlFor="">{billing.Monto}</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ul id="page-numbers">
                    {renderPageNumbers}
                  </ul>
                  </div>
              
                }
            </div>
              <Link to="/billing" className="btn-link-billing2">
                <button type="submit" className="btn btn-billing2-next">
                  <img
                    src={require("../icons/botonregistrar.png")}
                    alt="siguiente"
                  />
                </button>
              </Link>
            </div>
            <Sidebar/>
          </div>
        </div>
      </div>
    );
  }
}
