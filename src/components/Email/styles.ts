import styled from "@emotion/styled";

export const StyledEmail = styled.div`
    width: 100%;
    background-color: #0a0a0f;
    border-radius: 10px;
    padding: 20px 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin-top: 20px;

    &:last-child {
        margin-bottom: 50px;
    }

    & a {
        color: inherit;
        text-decoration: none;
    }

    & .button {
        background-color: #0d0080;
        border-radius: 5px;
        padding: 6px 12px;
        box-sizing: border-box;
        font-size: 14px;
        transition: background-color .3s;

        &:hover {
            background-color: #008cff;
        }
    }
`;