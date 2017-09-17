import React, { Component } from 'react'
import C from 'classnames'

import Zone from 'c-zone'
import './style.scss'


const DefaultState = {
	SecuroServ: {
		role: null,
		payValue: 0,
		payTime: null
	}
}


export default class App extends Component {
	state = {
		securoServ: DefaultState.SecuroServ
	}
	
	becomeCeo = () => this.setState({
		securoServ: { role: 'ceo', payValue: 5000 }
	})
	
	becomeAssociate = () => this.setState({
		securoServ: { role: 'associate', payTime: new Date(), payValue: 5000 }
	})
	
	render() {
		return (
			<div className="App">
				
				<Zone
					introText="What are you?"
					buttonMap={{
						'r1c2': { text: 'CEO', onClick: this.becomeCeo },
						'r1c3': { text: 'Associate', onClick: this.becomeAssociate }
					}}
				/>
				
				<Zone
					introText="You are an Associate."
					buttonMap={{
						'r1c1': { text: 'Quit', onClick: ()=>{} },
						'c2': { text: 'Payday', onClick: ()=>{} },
						'r1c3': { text: 'Job Completed', onClick: ()=>{} },
						'r2c3': { text: 'CEO Killed', onClick: ()=>{} }
					}}
				/>
				
			</div>
		)
	}
}
