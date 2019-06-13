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
  border-radius: 50%;
  
  & + & {
  margin-left: 10px;
  }
	
	&:hover {
	  opacity: 0.5;
	}
`;
