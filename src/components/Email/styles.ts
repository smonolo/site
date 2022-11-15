import styled from "@emotion/styled";

export const StyledEmail = styled.div`
    width: 100%;
    background-color: #1b1b1b;
    border-radius: 10px;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin-top: 25px;

    & a {
        color: inherit;
        text-decoration: none;
    }

    & .button {
        background-color: #008cff;
        border-radius: 5px;
        padding: 6px 12px;
        box-sizing: border-box;
        font-size: 14px;
    }
`;