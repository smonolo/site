import styled from "@emotion/styled";

export const StyledCard = styled.div`
    width: 100%;
    padding: 35px 40px;
    box-sizing: border-box;
    background-color: #0a0a0f;
    border-radius: 10px;
    margin-top: 25px;

    & .card-title {
        font-size: 24px;
        font-weight: 500;
        color: #fff;
    }

    & div {
        color: #aaa;

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

    & > .map-flex {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;

        & > .map {
            border: none;
            border-radius: 10px;
        }
    }
`;