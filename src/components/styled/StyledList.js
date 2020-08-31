import styled from "styled-components";

const StyledList = styled.div`
    color: ${props => props.theme.color.UI};
    background: ${props => props.theme.background.UI};

    border: 2px solid currentColor;
    border-radius: 2rem;

    margin: 2.5%;
    padding: 1%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export default StyledList;