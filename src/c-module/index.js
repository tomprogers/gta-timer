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
	{                phaseName: 'pre',        className: 'transition-pre',  durationMs: 500  },
	{                phaseName: 'transition', className: 'transition',      durationMs: 1000 },
	{ success: true, phaseName: 'post',       className: 'transition-post', durationMs: 300  }
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
	
	
	clearTimers = (timers) => {
		clearTimeout(this.transitionPhaseTimer)
		clearInterval(this.zoneHeartbeat)
	}
	
	
	onClickZoneButton = (reducer, event) => {
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
			transitionPhaseIndex: (zoneTransitionRequested) ? 0 : null,
			zoneState: newZoneState
		})
		this.forceUpdate()
	}
	
	
	advanceTransitionPhase = () => {
		clearTimeout(this.transitionPhaseTimer)
		this.transitionPhaseTimer = null
		
		let { nextZoneName, transitionPhaseIndex } = this.state
		let nextTransitionPhaseIndex = transitionPhaseIndex + 1
		
		if(ZONE_TRANSITION_PHASES[nextTransitionPhaseIndex]) {
			// there are more phases; proceed to the next
			this.setState({ transitionPhaseIndex: nextTransitionPhaseIndex })
		
		} else {
			// there are no more phases; set to non-transition state
			this.setState({
				currentZoneName: nextZoneName,
				nextZoneName: null,
				inTransition: false,
				transitionPhaseIndex: null
			})
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
		
		let transitionPhaseConfig = (inTransition)
			? ZONE_TRANSITION_PHASES[ transitionPhaseIndex ]
			: null
		
		if(inTransition && transitionPhaseConfig.success) {
			currentZoneName = nextZoneName
			nextZoneName = null
		}
		
		// class with `zone-active-${zdx}` and `zone-next-${nzdx}` based on transition needs
		let currentZdx = Object.keys(zones).indexOf(currentZoneName) + 1
		let nextZdx = (nextZoneName) ? Object.keys(zones).indexOf(nextZoneName) + 1 : null
		
		if(inTransition && !this.transitionPhaseTimer) {
			this.transitionPhaseTimer = setTimeout(
				this.advanceTransitionPhase.bind(this),
				transitionPhaseConfig.durationMs
			)
		}
		
		return (
			<div className={C('Module', className, transitionPhaseConfig ? transitionPhaseConfig.className : null, `zone-${currentZoneName}`)} {...props}>
				
				<div className="Module-header">{title}</div>
				<hr className="Module-stripe" />
				
				<div className="Module-zones"
					data-current-zdx={currentZdx}
					data-next-zdx={nextZdx}
				>
					{Object.values(zones)
					.map(({ text , stripe , buttons }, i) => {
						let zoneName = Object.keys(zones)[i]
						
						return (
							<Zone key={i} className={C(`zone-${zoneName}`, { 'Zone-active': (i===currentZdx) })}
								introText={text}
								buttonMap={
									// transform zonefile button format into Zone.buttonMap format
									// and incorporate button reducers into event handling
									// this is 70% of the magic of <Module>
									Object.keys(buttons)
									.reduce((map, buttonPositionName, b) => {
										const [ text , buttonReducer ] = buttons[buttonPositionName]
										const onClick = this.onClickZoneButton.bind(this, buttonReducer)
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
