import styled from "styled-components";

const StyledTodo = styled.div`
    color: ${props => props.theme.color.post};
    background: ${props => props.theme.background.post};

    border: 2px solid currentColor;
    border-radius: 2rem;

    margin: 1%;

    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &.complete{
        color: ${props => props.theme.color.completed};
        background: ${props => props.theme.background.completed};
    }

    p{
        margin: 1em;
        flex-shrink: 1;
    }

    button{
        font-size: 1.4rem;
        padding: 0% 3%;
        border: none;
        color: currentColor;
        border-left: 2px solid currentColor;
        background: transparent;
    }
`;

export default StyledTodo;