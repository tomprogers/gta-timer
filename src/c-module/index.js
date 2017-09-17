import React, { Component } from 'react'
import C from 'classnames'

import Zone from 'c-zone'
import './style.css'

/**
 * <Module> implements the zone state lifecycle, and manages transitions between zones
 * - .zone on zoneState is used to control current zone
 * - .timers:true on zoneState triggers 60Hz update cycle
 * - adds .transition-pre, .transition, .transition-post classnames to div.Module
 * - sets data-current-zdx, data-next-zdx on div.Module > div.Module-zones
 */

// phases executed for every phase transition, in order, as defined below
const ZONE_TRANSITION_PHASES = [
	{ phaseName: 'pre',        className: 'transition-pre',  durationMs: 500  },
	{ phaseName: 'transition', className: 'transition',      durationMs: 1000 },
	{ phaseName: 'post',       className: 'transition-post', durationMs: 500  }
]


export default class Module extends Component {
	constructor(props) {
		super(props)
		
		this.transitionPhaseTimer = null
		this.zoneHeartbeat = null
		
		this.state = {
			currentZoneName: 'default',
			nextZoneName: null,
			
			inTransition: false,
			transitionPhaseIndex: null,
			
			zoneState: {
				zone: 'default',
				zoneEnteredAt: new Date(),
				zoneUpdatedAt: null
			}
		}
	}
	
	
	componentWillUnmount() {
		this.clearTimers()
	}
	
	
	clearTimers = (timers} => {
		clearTimeout(this.transitionPhaseTimer)
		clearInterval(this.zoneHeartbeat)
	}
	
	
	onClickZoneButton = (event, reducer) => {
		const { currentZoneName } = this.state
		
		// calculate the new zoneState, according to the zone-button's reducer
		// - always provide accurate zoneState.zone value
		// - always timestamp new zone state for benefit of module & zone logic
		const oldZoneState = Object.assign({}, this.zoneState, { zone: currentZoneName })
		const newZoneState = Object.assign({}, reducer(oldZoneState), { zoneUpdatedAt: new Date() })
		
		// Detect Magic Properties in new state
		// DMP: zone transition signaled by changing 'zone'
		let zoneTransitionRequested = (newZoneState.zone !== currentZoneName)
		
		// update state and trigger re-render
		this.setState({
			nextZoneName: (zoneTransitionRequested) ? newZoneState.zone : null,
			inTransition: Boolean(zoneTransitionRequested),
			transitionPhaseIndex: null,
			zoneState: newZoneState
		})
	}
	
	
	advanceTransitionPhase = () => {
		clearTimeout(this.transitionPhaseTimer)
		this.transitionPhaseTimer = null
		
		let nextTransitionPhaseIndex = this.transitionPhaseIndex + 1
		if(ZONE_TRANSITION_PHASES[nextTransitionPhaseIndex]) {
			this.setState({ transitionPhaseIndex: nextTransitionPhaseIndex })
		} else {
			this.setState({ inTransition: false, transitionPhaseIndex: null })
		}
	}
	
	
	render() {
		let {
			className,
			title,
			zones,
			...props
		} = this.props
		
		let {
			currentZoneName,
			nextZoneName,
			inTransition,
			transitionPhaseIndex,
			zoneState
		} = this.state
		
		// class with `zone-active-${zdx}` and `zone-next-${nzdx}` based on transition needs
		let currentZdx = Object.keys(zones).indexOf(currentZoneName)
		let nextZdx = Object.keys(zones).indexOf(nextZoneName)
		
		let transitionPhaseClassName = (inTransition)
			? ZONE_TRANSITION_PHASES[ transitionPhaseIndex ].className
			: ''
		
		if(inTransition && !this.transitionPhaseTimer) {
			this.transitionPhaseTimer = setTimeout(this.advanceTransitionPhase, ZONE_TRANSITION_PHASES[ transitionPhaseIndex ].durationMs)
		}
		
		return (
			<div className={C('Module', className, transitionPhaseClassName)} {...props}>
				
				<div className="Module-header">{title}</div>
				<hr className="Module-stripe" />
				
				<div className="Module-zones"
					data-current-zdx={currentZdx}
					data-next-zdx={nextZdx}
				>
					{zones.map(({ text, stripe, buttons }, z) => {
						return (
							<Zone key={z} className={C()}
								introText={text}
								buttonMap={
									Object.keys(buttons)
									.reduce((map, buttonPositionName, b) => {
										const [ text , buttonReducer ] = buttons[buttonPositionName]
										const onClick = (event) => this.onClickZoneButton.bind(this, event, buttonReducer)
										return Object.assign(map, { [buttonPositionName]: { text, onClick } })
									}, {})
								}
							/>
						)
					})}
				</div>
				
			</div>
		)
	}
	
}
