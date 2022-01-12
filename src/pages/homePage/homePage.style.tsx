import styled from 'styled-components';
import rain from '../../assets/images/rain.jpg'

export const HeaderWrapper = styled.article`
    width: 100%;
    height: 92vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${`url(${require('../../assets/images/rain.jpg')})`};
    display: grid;
    grid-template-columns:auto auto auto auto auto;
    /* grid-template-rows:50% 30%; */
    grid-gap: 10px;
    padding:10px;
    & div:first-child{
        grid-area: 1 / 1 / 6 / 6;
        width:100%;
    }
`;