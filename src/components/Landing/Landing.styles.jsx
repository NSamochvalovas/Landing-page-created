import styled from 'styled-components';
import background from '../../images/background.png'

export const Background = styled.div`
  width:100%;
  background-image: url(${background});
  background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
`;

export const Flex = styled.div`
  width:75%;
  display: flex;
  align-items: center;
  min-height:100vh;
`;