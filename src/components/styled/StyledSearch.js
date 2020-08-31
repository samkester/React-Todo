import styled from "styled-components";

const StyledSearch = styled.div`
    color: ${props => props.theme.color.UI};
    background: ${props => props.theme.background.UI};

    border: 1px solid currentColor;
    border-radius: 2rem;

    padding: 2%;
    margin-bottom: 2%;

    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width: 40rem;
        background: transparent;
        color: currentColor;
        border: 1px solid currentColor;
        border-bottom: 2px solid currentColor;
        margin: 1% 0%;
    }

    button{
        width: 20rem;
        background: transparent;
        color: currentColor;
        border: 1px solid currentColor;
        border-radius: 1rem;
        margin: 1% 0%;

        :hover{
            color: ${props => props.theme.color.post};
        }
    }
`;

export default StyledSearch;