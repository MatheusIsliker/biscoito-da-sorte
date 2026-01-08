import React, { Component } from "react";

class Botao extends Component {

    constructor(props) {
        super(props)
        this.state = {
            textoFrase: ''
        }
    
    }
    

    render() {
        return (
            <div>
                <button className="buttons" onClick={this.props.acaoBtn}>{this.props.nome}</button>
                <h3 className="textoFrase">{this.props.frase}</h3>
            </div>
        )
    }
}

export default Botao;