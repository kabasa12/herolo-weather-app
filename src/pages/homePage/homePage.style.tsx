import styled from 'styled-components';
import rain from '../../assets/images/rain.jpg'

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${`url(${require('../../assets/images/rain.jpg')})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
`;