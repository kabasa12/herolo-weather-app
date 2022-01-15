import styled from 'styled-components';

export const FavoriteWrapper = styled.div`
    display:grid;
    width:100%;
    height:92vh;
    overflow-Y:scroll;
    justify-content:space-evenly;
    grid-template-columns:auto auto auto auto;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:url(${require('../../assets/images/favoriteBackground.jpg')});
`
export const FavoriteCardWrap = styled.div`
    justify-content:center;
    text-align:center;
    height:150px;
    display:grid;
`
export const FavoriteCity = styled.div`
    align-items:flex-end;
    display:flex;
    justify-content:center;
    color:#fff;
`