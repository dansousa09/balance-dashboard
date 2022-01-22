import styled from "styled-components";

export const Container = styled.div``; 

export const Content = styled.main`
    display: flex; 
    justify-content: space-between; 
    flex-wrap: wrap; 

    @media (max-width: 760px) {
        flex-direction: column;
    }

`;
