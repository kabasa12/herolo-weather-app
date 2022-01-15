import styled from 'styled-components';

export const ImageWrapperDiv = styled.div<any>`
    display:flex;
    align-items:${p => p.large ? 'flex-start' : 'center'};
    justify-content:center;
    width:${p => p.large ? '100%' : '30%'};
    max-width:${p => p.large ? '100%' : '30%'};
    height:${p => p.large ? '30%' : '100%'}; 
    & img{
        height:${p => p.large ? '80%' : ''};
    }
`