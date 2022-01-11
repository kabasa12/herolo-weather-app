import styled from 'styled-components';

export const HeaderNav = styled.nav`
max-width: 1200px;
margin: 0 auto;
padding: 15px 0;
max-height: 10vh;
outline: none;
display: flex;
justify-content: space-between;
align-items: center;

& h1{
    flex:2;
}
& .activeLink{
    margin-left:10px;
    color: burlywood;
    text-decoration: none;
}
& .inactiveLink{
    margin-left:10px;
    color:#fff;
    text-decoration: none;
}
& .link-container{
    justify-content: space-between;
}
`
export const NavContainer = styled.div`
flex: 1;

`