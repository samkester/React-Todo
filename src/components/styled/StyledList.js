import styled from "styled-components";

const StyledList = styled.div`
    color: ${props => props.theme.color.UI};
    background: ${props => props.theme.background.UI};

    border: 2px solid currentColor;
    border-radius: 2rem;

    padding: 2%;
    width: 95%;

    display: flex;
    flex-direction: column;
`;

export default StyledList;