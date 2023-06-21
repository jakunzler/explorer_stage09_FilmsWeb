import styled from "styled-components";

export const Container = styled.div`
    width: 100%;	
    height: 100vh;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
    grid-area: content;
    padding: 0 7vw;
    overflow-y: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        width: 15vw;
    }
`;