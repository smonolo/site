import styled from "@emotion/styled";

export const StyledRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    box-sizing: border-box;
    border-top: 2px solid #0a0a0f;
    margin-top: 50px;

    & > div {
        color: #aaa;
        font-size: 14px;
    }

    & > a {
        display: block;
        text-decoration: none;
        padding: 6px 14px;
        border-radius: 10px;
        background-color: #0a0a0f;
        box-sizing: border-box;
        font-size: 14px;
        color: #aaa;
        transition: background-color .3s;
        display: flex;
        align-items: center;
        gap: 7px;

        &:hover {
            background-color: #0f0f16;
        }

        & > i {
            font-size: 14px;
        }
    }
`;