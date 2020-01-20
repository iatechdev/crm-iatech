import React from "react";
import "../../style/modal.css";

export default class Term extends React.Component {
    render() {
        if (this.props.show) {
          return null;
        }
        return (
            <div className="TermOne">
                <div className="TermTwo">
                    <div className="TermThree">
                        <div  className="TermThree_one">
                            <div className="btn btn-close" onClick={this.props.onClose}>
                                <img src={require('../../icons/close1.png')}  alt=""/>
                            </div>
                        </div>
                        <div className="TermThree_two">
                            <h2>Términos y condiciones</h2>
                            <label htmlFor="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati tempora quia ea eius quo totam fugit, cumque, tempore quisquam fugiat commodi atque incidunt! Nobis quisquam dolor animi perferendis expedita quae?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vel quas et sit voluptate quisquam autem facilis tenetur id suscipit vero sequi voluptatem, nisi at dignissimos ipsa inventore eligendi sapiente.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloribus corrupti non vitae ex! Voluptate aliquam autem porro, facere voluptatum, amet in, dignissimos doloremque quo veritatis nisi ipsam aliquid impedit.</label>
                            <button><img src={require('../../icons/botonaceptar1.png')}  alt=""/></button>
                        </div>
                    </div>
                </div>
            </div>

        );
      }
  }
