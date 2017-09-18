const SecuroServ_Associate_Pay_IntervalMS = 15 * 60 * 1000 // GTA pays Associates every 15 minutes

/*
function getTimeUntilPayout(refTime) {
	const diffMs = new Date().getTime() - new Date(refTime).getTime()
	const remainingMs = SecuroServ_Associate_Pay_IntervalMS - diff
	const mins = remaining / 60 / 1000
	
	// return `${
	// 	mins.toFixed(0) // 15 | 14 | 5 | 0
	// }:${
		
	// }`
}
*/

export default {
	default: {
		text: `What are you?`,
		stripe: `dark-on-light`,
		buttons: {
			r1c2: [ `CEO`      , (state) => ({ zone: 'ceo'      , role: 'ceo'      , payValue: 5000                      }) ],
			r1c3: [ `Associate`, (state) => ({ zone: 'associate', role: 'associate', payValue: 5000, payTime: new Date() }) ]
		}
	},
	
	associate: {
		// data1: (state) => getTimeUntilPayout(state.payTime),
		// data2: (state) => `$${state.payValue}`,
		text: `You are an Associate.`,
		stripe: `light-on-dark`,
		buttons: {
			r1c1: [ `Quit`         , (state) => Object.assign(state, { zone: 'quit'                   }) ],
			c2  : [ `Payday`       , (state) => Object.assign(state, { payTime: new Date()            }) ],
			r1c3: [ `Job Completed`, (state) => Object.assign(state, { payValue: state.payValue + 500 }) ],
			r2c3: [ `CEO Killed`   , (state) => Object.assign(state, { payValue: state.payValue - 500 }) ]
		}
	},
	
	quit: {
		// data1: (state) => getTimeUntilPayout(state.payTime),
		// data2: (state) => `$${state.payValue}`,
		text: `Quitting resets this app.`,
		buttons: {
			r1c2: [ `Cancel`, (state) => ({ zone: state.role }) ],
			r1c3: [ `Quit`  , (state) => ({ zone: 'default'  }) ]
		}
	}
}
