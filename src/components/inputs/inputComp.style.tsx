import styled from 'styled-components';

interface InputProps {
    colored?: string,
}

export const StyledInput = styled.input`
    font-size: 20px;
    padding: 10px;
    margin: 10px;
    background: rgba(0,0,0,0);
    border: 2px solid burlywood;
    outline: none;
    border-radius: 3px;
    color:rgba(19,13,41);
    font-weight:600;
    ::placeholder {
        color: ${(props: InputProps) => props.colored}
    }
`