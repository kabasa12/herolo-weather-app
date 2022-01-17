import styled from 'styled-components';

export const StyledLoader = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    inset:0;

    & img{
        max-height:150px;
    }
` 