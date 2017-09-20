import React, { Component } from 'react'
import C from 'classnames'

import './style.css'


export default ({ fill , stroke , className, ...props}) => (
	<svg version="1.1"
		viewBox="0 0 400 107"
		style={{
			'fillRule': 'evenodd',
			'clipRule': 'evenodd',
			'strokeLinejoin': 'round',
			'strokeMiterlimit': 1.41421
		}}
		className={C('Svg', className)}
		data-svg-id="grand-theft-timer"
		{...props}
	>
		<path data-letters="g"  style={{ fill , 'fillRule': 'nonzero' }} d="M53.066,77.675l0,-5.724l9.252,0c0.048,0 0.072,-0.024 0.072,-0.072l0,-1.368l-5.58,0c-2.496,0 -3.744,-0.948 -3.744,-2.844l0,-17.244c0,-1.944 1.248,-2.916 3.744,-2.916l13.068,0l0,27.324c0,1.896 -1.248,2.844 -3.744,2.844l-13.068,0Zm9.324,-24.408l-1.764,0c-0.048,0 -0.072,0.024 -0.072,0.072l0,11.376c0,0.048 0.024,0.072 0.072,0.072l1.764,0l0,-11.52Z"/>
		<path data-letters="ra" style={{ fill , 'fillRule': 'nonzero' }} d="M84.818,77.675c-2.496,0 -3.744,-0.948 -3.744,-2.844l0,-13.464c0,-0.048 -0.024,-0.072 -0.072,-0.072l-1.764,0l0,9.216l-7.488,0l0,-23.004l13.068,0c2.472,0 3.708,0.972 3.708,2.916l0,6.696c0,1.104 -0.612,1.728 -1.836,1.872c1.248,0.168 1.872,0.804 1.872,1.908l0,10.98c0,0.048 0.024,0.072 0.072,0.072l18.504,0l0,5.724l-22.32,0Zm-3.744,-24.336c0,-0.048 -0.024,-0.072 -0.072,-0.072l-1.764,0l0,3.456l1.764,0c0.048,0 0.072,-0.024 0.072,-0.072l0,-3.312Zm18.576,7.848l-1.764,0c-0.048,0 -0.072,0.024 -0.072,0.072l0,3.456c0,0.048 0.024,0.072 0.072,0.072l1.764,0l0,-3.6Zm-5.58,9.324c-2.496,0 -3.744,-0.948 -3.744,-2.844l0,-8.676c0,-1.896 1.248,-2.844 3.744,-2.844l5.58,0l0,-2.808c0,-0.048 -0.024,-0.072 -0.072,-0.072l-1.692,0c-0.048,0 -0.072,0.024 -0.072,0.072l0,1.332l-7.488,0l0,-4.248c0,-1.944 1.248,-2.916 3.744,-2.916l9.324,0c2.496,0 3.744,0.972 3.744,2.916l0,20.088l-13.068,0Z"/>
		<path data-letters="nd" style={{ fill , 'fillRule': 'nonzero' }} d="M122.078,77.675c-2.52,0 -3.78,-0.948 -3.78,-2.844l0,-21.492c0,-0.048 -0.024,-0.072 -0.072,-0.072l-1.692,0c-0.048,0 -0.072,0.024 -0.072,0.072l0,17.172l-7.488,0l0,-23.004l7.488,0l0,1.476c1.272,-0.984 3.132,-1.476 5.58,-1.476c2.496,0 3.744,0.972 3.744,2.916l0,21.456c0,0.048 0.024,0.072 0.072,0.072l18.504,0l0,5.724l-22.284,0Zm9.216,-7.164c-1.296,0 -2.244,-0.234 -2.844,-0.702c-0.6,-0.468 -0.9,-1.182 -0.9,-2.142l0,-17.244c0,-1.944 1.248,-2.916 3.744,-2.916l5.58,0l0,-5.76l7.488,0l0,28.764l-13.068,0Zm5.58,-17.244l-1.764,0c-0.048,0 -0.072,0.024 -0.072,0.072l0,11.376c0,0.048 0.024,0.072 0.072,0.072l1.764,0l0,-11.52Z"/>
		<path data-letters="t"  style={{ fill , 'fillRule': 'nonzero' }} d="M159.122,70.511c-2.496,0 -3.744,-0.948 -3.744,-2.844l0,-12.996l-1.836,0l0,-5.688l1.836,0l0,-1.476l7.488,0l0,1.476l9.324,0l0,5.688l-9.324,0l0,10.044c0,0.048 0.024,0.072 0.072,0.072l1.728,0c0.048,0 0.072,-0.024 0.072,-0.072l0,-8.568l7.452,0l0,11.52c0,1.896 -1.248,2.844 -3.744,2.844l-9.324,0Z"/>
		<path data-letters="he" style={{ fill , 'fillRule': 'nonzero' }} d="M187.13,77.675c-2.52,0 -3.78,-0.948 -3.78,-2.844l0,-21.492c0,-0.048 -0.024,-0.072 -0.072,-0.072l-1.764,0l0,17.244l-7.488,0l0,-28.764l7.488,0l0,5.76l5.58,0c2.496,0 3.744,0.972 3.744,2.916l0,21.456c0,0.048 0.024,0.072 0.072,0.072l18.504,0l0,5.724l-22.284,0Zm14.796,-24.336c0,-0.048 -0.024,-0.072 -0.072,-0.072l-1.692,0c-0.048,0 -0.072,0.024 -0.072,0.072l0,3.204l1.836,0l0,-3.204Zm-5.58,17.172c-2.496,0 -3.744,-0.948 -3.744,-2.844l0,-17.244c0,-1.944 1.248,-2.916 3.744,-2.916l9.324,0c2.496,0 3.744,0.972 3.744,2.916l0,11.484l-9.324,0l0,2.808c0,0.048 0.024,0.072 0.072,0.072l1.692,0c0.048,0 0.072,-0.024 0.072,-0.072l0,-1.368l7.488,0l0,4.32c0,1.896 -1.248,2.844 -3.744,2.844l-9.324,0Z"/>
		<path data-letters="f"  style={{ fill , 'fillRule': 'nonzero' }} d="M211.178,70.511l0,-20.088c0,-1.944 1.248,-2.916 3.744,-2.916l10.296,0l0,5.76l-6.48,0c-0.048,0 -0.072,0.024 -0.072,0.072l0,1.332l6.48,0l0,5.76l-6.48,0l0,10.08l-7.488,0Z"/>
		<path data-letters="t"  style={{ fill , 'fillRule': 'nonzero' }} d="M231.554,70.511c-2.496,0 -3.744,-0.948 -3.744,-2.844l0,-12.996l-1.836,0l0,-5.688l1.836,0l0,-1.476l7.488,0l0,1.476l9.324,0l0,5.688l-9.324,0l0,10.044c0,0.048 0.024,0.072 0.072,0.072l1.728,0c0.048,0 0.072,-0.024 0.072,-0.072l0,-8.568l7.452,0l0,11.52c0,1.896 -1.248,2.844 -3.744,2.844l-9.324,0Z"/>
		<path data-letters="t"  style={{ fill , 'fillRule': 'nonzero' }} d="M259.346,70.511c-2.496,0 -3.744,-0.948 -3.744,-2.844l0,-12.996l-1.836,0l0,-5.688l1.836,0l0,-1.476l7.488,0l0,1.476l9.324,0l0,5.688l-9.324,0l0,10.044c0,0.048 0.024,0.072 0.072,0.072l1.728,0c0.048,0 0.072,-0.024 0.072,-0.072l0,-8.568l7.452,0l0,11.52c0,1.896 -1.248,2.844 -3.744,2.844l-9.324,0Z"/>
		<rect data-letters="i"  style={{ fill , 'fillRule': 'nonzero' }} x="274.25" y="47.507" width="7.488" height="23.004"/>
		<path data-letters="me" style={{ fill , 'fillRule': 'nonzero' }} d="M306.074,77.675c-0.456,0 -0.906,-0.078 -1.35,-0.234c-0.444,-0.156 -0.846,-0.366 -1.206,-0.63c-0.36,-0.264 -0.648,-0.57 -0.864,-0.918c-0.216,-0.348 -0.324,-0.702 -0.324,-1.062l0,-21.492c0,-0.048 -0.024,-0.072 -0.072,-0.072l-1.764,0c-0.048,0 -0.072,0.024 -0.072,0.072l0,17.172l-7.488,0l0,-17.172c0,-0.048 -0.024,-0.072 -0.072,-0.072l-1.692,0c-0.048,0 -0.072,0.024 -0.072,0.072l0,17.172l-7.488,0l0,-23.004l7.488,0l0,1.476c0.456,-0.48 1.11,-0.846 1.962,-1.098c0.852,-0.252 1.818,-0.378 2.898,-0.378c1.104,0 1.962,0.144 2.574,0.432c0.612,0.288 1.122,0.72 1.53,1.296c0.552,-0.696 1.242,-1.158 2.07,-1.386c0.828,-0.228 1.83,-0.342 3.006,-0.342c0.648,0 1.254,0.078 1.818,0.234c0.564,0.156 1.05,0.378 1.458,0.666c0.408,0.288 0.732,0.63 0.972,1.026c0.24,0.396 0.36,0.822 0.36,1.278l0,21.168c0,0.048 0.024,0.072 0.072,0.072l18.504,0l0,5.724l-22.248,0Zm14.76,-24.336c0,-0.048 -0.024,-0.072 -0.072,-0.072l-1.692,0c-0.048,0 -0.072,0.024 -0.072,0.072l0,3.204l1.836,0l0,-3.204Zm-5.58,17.172c-2.496,0 -3.744,-0.948 -3.744,-2.844l0,-17.244c0,-1.944 1.248,-2.916 3.744,-2.916l9.324,0c2.496,0 3.744,0.972 3.744,2.916l0,11.484l-9.324,0l0,2.808c0,0.048 0.024,0.072 0.072,0.072l1.692,0c0.048,0 0.072,-0.024 0.072,-0.072l0,-1.368l7.488,0l0,4.32c0,1.896 -1.248,2.844 -3.744,2.844l-9.324,0Z"/>
		<path data-letters="r"  style={{ fill , 'fillRule': 'nonzero' }} d="M339.446,70.511l0,-9.144c0,-0.048 -0.024,-0.072 -0.072,-0.072l-1.764,0l0,9.216l-7.488,0l0,-23.004l13.068,0c2.472,0 3.708,0.972 3.708,2.916l0,6.696c0,1.104 -0.612,1.728 -1.836,1.872c1.248,0.168 1.872,0.804 1.872,1.908l0,9.612l-7.488,0Zm0,-17.172c0,-0.048 -0.024,-0.072 -0.072,-0.072l-1.764,0l0,3.456l1.764,0c0.048,0 0.072,-0.024 0.072,-0.072l0,-3.312Z"/>
	</svg>
)