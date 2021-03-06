import React, { Component } from 'react'
import C from 'classnames'

import './style.css'


export default ({ introText , buttonMap , className , ...props }) => (
	<div className={C('Zone', className)} {...props}>
		
		<p className="Zone-intro">{introText}</p>
		
		<div className="Zone-buttons">
			{
				Object.keys(buttonMap)
				.map((buttonLocation, i) => (
					<span key={i} className={C('button', buttonLocation)}
						onClick={buttonMap[buttonLocation].onClick}
					>
						{buttonMap[buttonLocation].text}
					</span>
				))
			}
		</div>
		
	</div>
)
