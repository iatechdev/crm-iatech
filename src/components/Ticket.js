import React, { Component } from "react";
import Profileinfo from "./shared/Profileinfo";
import Sidebar from "./shared/Sidebar";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../style/billing.css";
import "../style/modal.css";

export default class Ticket extends Component {
  constructor(props) {
    super(props);
    const data = JSON.parse(localStorage.getItem('response'))
    this.state = {
      doc: data.sic_code,
      tickets: [],
      currentTicket: [],
      currentPage: 1,
      todosPerPage: 5,
      dataticket: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  onInputChange = (eventObject) => {
    this.setState({
      [eventObject.target.name]: eventObject.target.value
    })
  }

  async componentDidMount() {
    const { currentTicket, currentPage, todosPerPage } = this.state;
    const ticket_all = await axios.get(`https://master.iatech.com.co:4000/api/tickets/tickets_office?doc=${this.state.doc}`);
    if (ticket_all.data != '') {
      this.setState({
        tickets: ticket_all.data.responde,
        currentTicket: ticket_all.data.responde.slice((currentPage * todosPerPage) - todosPerPage, (currentPage * todosPerPage))
      })
    } else {
      this.setState({
        dataticket: true
      })
    }


  }

  handleClick(event) {
    const current = Number(event.target.id);
    const { todosPerPage } = this.state;
    this.setState({
      currentPage: current,
      currentTicket: this.state.tickets.slice((current * todosPerPage) - todosPerPage, (current * todosPerPage))
    });
  }

  render() {

    const { tickets, todosPerPage } = this.state;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(tickets.length / todosPerPage); i++) {
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
                <img src={require("../icons/tag1.png")} alt="" />
                <h2>Boleteria</h2>
              </div>
              <div className="customerinfo-billing">
                <ul>
                  <li>
                    <h2>Boletas</h2>
                  </li>
                </ul>
                {
                  this.state.dataticket ?
                  <div className="billing-stop">NO TIENE BOLETAS REGISTRADAS</div>
                    :
                    <div>
                      <div className="list-billing">
                        {this.state.currentTicket.map(ticket => (
                          <div className="list-billing-items-general" key={ticket.id} >
                            <div className="list-billing-items col-9">
                              <div>
                                <img src={require("../icons/tag1.png")} alt="" />
                              </div>
                              <div className="list-billing-items-info">
                                <p>{ticket.name_cliente}</p>
                                <p>{ticket.description}</p>
                              </div>
                            </div>
                            <button
                              className="btn col-3"
                              data-toggle="modal"
                              data-target={"#modalTicket" + ticket.id}
                            >
                              <p>
                                Ver más{" "}
                                <img src={require("../icons/arrow_right.png")} alt="" />
                              </p>
                            </button>{" "}
                            <div
                              className="modal fade modalOne"
                              id={"modalTicket" + ticket.id}
                              role="dialog"
                              aria-labelledby="modalTicketTitle"
                              aria-hidden="true"
                            >
                              <div
                                className="modal-dialog modal-dialog-ticket"
                                role="document"
                              >
                                <div className="modal-content-ticket">
                                  <div className="modal-body-ticket">
                                    <div className="modal-body-ticket-two">
                                      <button
                                        type="button"
                                        className="btn-close-ticket"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        <img
                                          src={require("../icons/close.png")}
                                          alt=""
                                        />
                                      </button>
                                      <div className="modal-body-ticket-two-two">
                                        <div className="modal-body-ticket-two-one">
                                          <h2>Nombre de cliente</h2>
                                          <label htmlFor="">{ticket.name_cliente}</label>
                                        </div>
                                        <div className="modal-body-ticket-two-one">
                                          <h2>Almacén</h2>
                                          <label htmlFor="">{ticket.almacen}</label>
                                        </div>
                                        <div className="modal-body-ticket-two-one">
                                          <h2>Sorteo</h2>
                                          <label htmlFor="">{ticket.name_sorteo}</label>
                                        </div>
                                        <div className="modal-body-ticket-two-one">
                                          <h2>Fecha de emisión</h2>
                                          <label htmlFor="">{ticket.fecha_emision.substr(0, 10)}</label>
                                        </div>
                                        <div className="modal-body-ticket-two-one">
                                          <h2>Factura</h2>
                                          <label htmlFor="">{ticket.number_factura}</label>
                                        </div>
                                        <div className="modal-body-ticket-two-one">
                                          <h2>Descripción</h2>
                                          <label htmlFor="">{ticket.description}</label>
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
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}
