import styled from 'styled-components';


export const Section = styled.section`
  display: flex;
  justify-content: flex-end;
  padding: 0 50px;
`;

export const SocialItem = styled.a`
  display: inline-block;
  vertical-align: top;
	width: 30px;
	height: 30px;
	background: url("/src/img/social-sprite.png") 32px 32px;
	border-radius: 50%;
	
	& + & {
		margin-left: 10px;
	}
	
	&:hover {
		opacity: 0.5;
	}
	
	&:nth-child(2) {
		background-position: 75px 32px;
	}
	
	&:nth-child(3) {
		background-position: 120px 32px;
	}
	
	&:nth-child(4) {
		background-position: 32px 66px;
	}
`;
