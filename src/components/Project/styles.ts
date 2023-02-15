import styled from "@emotion/styled";

export const StyledProject = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    border: 1px solid rgb(25, 25, 30);
    padding: 30px;
    border-radius: 10px;
    box-sizing: border-box;
    margin-top: 20px;

    &:last-child {
        margin-bottom: 50px;
    }

    & .name {
        font-size: 20px;
        font-weight: 500;
        color: #fff;
    }

    & .description {
        color: #aaa;
    }

    & .flex {
        display: flex;
        flex-direction: column;
        gap: 5px;

        & > a {
            color: #008cff;
            text-decoration: none;

            & i {
                font-size: 14px;
            }
        }

        &:last-child {
            align-items: flex-end;
        }
    }
`;