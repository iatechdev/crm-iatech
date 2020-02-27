import React, { Component } from "react";
import Profileinfo from "./shared/Profileinfo";
import Sidebar from "./shared/Sidebar";
import { Link } from "react-router-dom";
import "../style/billing.css";
import "../style/modal.css";

export default class Billing_two extends Component {
  render() {
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
                <div className="list-billing">
                  <div className="list-billing-items-general">
                    <div className="list-billing-items col-9">
                      <div>
                        <img src={require("../icons/billing2.png")} alt="" />
                      </div>
                      <div className="list-billing-items-info">
                        <p>Lorem ipsum</p>
                        <p>Nro de factura</p>
                        <p>0872</p>
                      </div>
                    </div>
                    <button
                      className="btn col-3"
                      data-toggle="modal"
                      data-target="#modalBilling"
                    >
                      <p>
                        Ver más{" "}
                        <img src={require("../icons/arrow_right.png")} alt="" />
                      </p>
                    </button>{" "}
                    <div
                      className="modal fade modalOne"
                      id="modalBilling"
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
                              <h2>0872</h2>
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
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Centro Comercial</h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Sorteo</h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Monto de la factura </h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-billing-items-general">
                    <div className="list-billing-items col-9">
                      <div>
                        <img src={require("../icons/billing2.png")} alt="" />
                      </div>
                      <div className="list-billing-items-info">
                        <p>Lorem ipsum</p>
                        <p>Nro de factura</p>
                        <p>0872</p>
                      </div>
                    </div>
                    <button
                      className="btn col-3"
                      data-toggle="modal"
                      data-target="#modalBilling"
                    >
                      <p>
                        Ver más{" "}
                        <img src={require("../icons/arrow_right.png")} alt="" />
                      </p>
                    </button>{" "}
                    <div
                      className="modal fade modalOne"
                      id="modalBilling"
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
                              <h2>0872</h2>
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
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Centro Comercial</h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Sorteo</h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Monto de la factura </h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-billing-items-general">
                    <div className="list-billing-items col-9">
                      <div>
                        <img src={require("../icons/billing2.png")} alt="" />
                      </div>
                      <div className="list-billing-items-info">
                        <p>Lorem ipsum</p>
                        <p>Nro de factura</p>
                        <p>0872</p>
                      </div>
                    </div>
                    <button
                      className="btn col-3"
                      data-toggle="modal"
                      data-target="#modalBilling"
                    >
                      <p>
                        Ver más{" "}
                        <img src={require("../icons/arrow_right.png")} alt="" />
                      </p>
                    </button>{" "}
                    <div
                      className="modal fade modalOne"
                      id="modalBilling"
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
                              <h2>0872</h2>
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
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Centro Comercial</h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Sorteo</h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Monto de la factura </h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-billing-items-general">
                    <div className="list-billing-items col-9">
                      <div>
                        <img src={require("../icons/billing2.png")} alt="" />
                      </div>
                      <div className="list-billing-items-info">
                        <p>Lorem ipsum</p>
                        <p>Nro de factura</p>
                        <p>0872</p>
                      </div>
                    </div>
                    <button
                      className="btn col-3"
                      data-toggle="modal"
                      data-target="#modalBilling"
                    >
                      <p>
                        Ver más{" "}
                        <img src={require("../icons/arrow_right.png")} alt="" />
                      </p>
                    </button>{" "}
                    <div
                      className="modal fade modalOne"
                      id="modalBilling"
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
                              <h2>0872</h2>
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
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Centro Comercial</h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Sorteo</h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Monto de la factura </h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-billing-items-general">
                    <div className="list-billing-items col-9">
                      <div>
                        <img src={require("../icons/billing2.png")} alt="" />
                      </div>
                      <div className="list-billing-items-info">
                        <p>Lorem ipsum</p>
                        <p>Nro de factura</p>
                        <p>0872</p>
                      </div>
                    </div>
                    <button
                      className="btn col-3"
                      data-toggle="modal"
                      data-target="#modalBilling"
                    >
                      <p>
                        Ver más{" "}
                        <img src={require("../icons/arrow_right.png")} alt="" />
                      </p>
                    </button>{" "}
                    <div
                      className="modal fade modalOne"
                      id="modalBilling"
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
                              <h2>0872</h2>
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
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Centro Comercial</h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Sorteo</h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                                <div className="modal-body-billing-two-one">
                                  <h2>Monto de la factura </h2>
                                  <label htmlFor="">Lorem ipsum</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="" className="btn-link-billing2">
                <button type="submit" className="btn btn-billing2-next">
                  <img
                    src={require("../icons/botonregistrar.png")}
                    alt="siguiente"
                  />
                </button>
              </Link>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}
