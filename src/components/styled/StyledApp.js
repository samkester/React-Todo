import styled from "styled-components";

const StyledApp = styled.div`
    color: ${props => props.theme.color.page};
    background: ${props => props.theme.background.page};

    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        margin: 2%;
        font-weight: normal;
        font-size: 3.6rem;
    }
`;

export default StyledApp;