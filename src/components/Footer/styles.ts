import styled from "@emotion/styled";

export const StyledRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 35px 0;
    box-sizing: border-box;
    border-top: 2px solid rgb(14, 14, 16);
    margin-top: 50px;

    & > div {
        color: #aaa;
    }

    & > a {
        display: block;
        text-decoration: none;
        padding: 6px 10px;
        border-radius: 5px;
        background-color: rgba(235, 235, 255, 0.05);
        box-sizing: border-box;
        color: #aaa;
        transition: background-color .3s;
        display: flex;
        align-items: center;
        gap: 7px;

        &:hover {
            background-color: rgba(235, 235, 255, 0.1);
        }

        & > i {
            font-size: 14px;
        }
    }
`;