import styled from "styled-components";

export const Container = styled.section`
    margin: 28px 0;

    > h2 {

        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 20px;
        font-weight: 700;

    }
`;