import styled from 'styled-components';

interface InputProps {
    colored?: string,
}

export const StyledInput = styled.input`
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: #ececec;
    border: none;
    border-radius: 3px;
    ::placeholder {
        color: ${(props: InputProps) => props.colored}
    }
`