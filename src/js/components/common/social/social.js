import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import {MEDIA_DELAY, SOCIAL_POINT} from "../../styles";

const show = keyframes`
	0% {
		opacity: 0;
	}
	
	100% {
		opacity: 1;
	}
`;

const Section = styled.section`
	display: none;
	order: -2;
	
	@media (min-width: ${SOCIAL_POINT}){
		display: block;
		animation: ${show} 3s linear;
		animation-fill-mode: forwards;
	}
`;

const SocialItem = styled.a`
	display: inline-block;
	vertical-align: top;
	width: 24px;
	height: 24px;
	background-color: #860809;
	border-radius: 50%;
	
	& + & {
		margin-left: 10px;
	}
`;

export class Social extends Component {
	render(){
		return (
			<Section>
				<SocialItem href="#" />
				<SocialItem href="#" />
				<SocialItem href="#" />
				<SocialItem href="#" />
			</Section>
		)
	}
};
