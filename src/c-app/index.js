import React, { Component } from 'react'
import C from 'classnames'

import './style.css'
import Module from 'c-module'
import SecuroServ_Zones from 'zones-securoserv'


export default class App extends Component {
	render() {
		return (
			<div className="App">
				
				<Module className="module-SecuroServe"
					title="SecuroServ"
					zones={SecuroServ_Zones}
				/>
				
			</div>
		)
	}
}
