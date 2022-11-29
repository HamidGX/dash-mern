import React, { Component } from 'react'
import {Pie} from "react-chartjs-2"

class Grafica extends Component {
	state = {
		respuesta: [],
		opiniones: [],
		porcentajes: [],
	}

    //Peticion
	async peticion() {
		var peticion = await fetch('https://localhost:3000/')
		var respuesta = await peticion.json()
		this.setState({ respuesta: respuesta })
		var opiniones = [],
			porcentajes = []
		this.state.respuesta.map((elemento) => {
			opiniones.push(elemento.opiniones)
			porcentajes.push(elemento.porcentajes)
		})
		this.setState({ opiniones: opiniones, porcentajes: porcentajes })
		console.log(this.state.opiniones)
		console.log(this.state.porcentajes)
	}

	generarCaracter() {
		var caracter = [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
		]
		var numero = (Math.random() * 15).toFixed(0)
        return caracter[numero]
	}

    colorHEX(){
        var color ="";
        for(var i=0; i<6;i++){
            color = color + this.generarCaracter();
        }
        return "#" + color
    }

    generarColores(){
        var colores = [];
        for(var i=0; i<this.state.respuesta.length; i++){
            colores.push(this.colorHEX())
        }
        this.setState({colores:colores})
        console.log(this.state.colores);
    }

    configurarGrafica(){
        const data = {
            labels: this.state.opiniones,
            datasets: [{
                data: this.state.porcentajes,
                backgroundColor: this.state.colores
            }]
        }
        const opciones = {
            responsive: true,
            maintainAspectRatio: false,
            pieceLabel:{
                render: function(args){
                    return args.label+ ": "´+args.value+"%"
                }
            }
        }
    }

	render() {
		return <div></div>
	}
}

export default Grafica
