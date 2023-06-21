import styled from "styled-components";

export const Container = styled.section`
    margin: 28px 0;
    height: 100%;

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 20px;
        font-weight: 700;

        position: fixed;
    }

    > div {
        height: 70%;
        margin-top: 80px;
        overflow-y: auto;

        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: none;
        }

        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.ORANGE};
            border-radius: 8px;
        }
    }
`;