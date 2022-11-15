import styled from "@emotion/styled";

export const StyledCard = styled.div`
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
    background-color: #1b1b1b;
    border-radius: 10px;
    margin-top: 25px;

    & > .card-title {
        font-size: 24px;
        font-weight: 500;
        color: #fff;
    }

    & > div {
        color: #bbb;

        &.top {
            margin-top: 15px;
        }

        & > a {
            color: #008cff;
            text-decoration: none;

            & > i {
                font-size: 14px;
            }
        }
    }
`;