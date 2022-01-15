import { StyledButton } from "./buttonComp.style";

export const ButtonComp = ({ text, onClick }: any) => {
    return <StyledButton onClick={onClick}>{text}</StyledButton>
}