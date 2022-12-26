import styled from "@emotion/styled";

export const StyledGrid = styled.div`
    width: 100%;
    padding: 20px 0;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-bottom: 40px;

    & > .flex {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 15px;

        & .item {
            color: #aaa;
            transition: color .3s;

            &:hover, &.active {
                color: #fff;
            }
        }

        & a {
            text-decoration: none;
            color: inherit;
            display: block;
        }

        & i {
            font-size: 18px;
        }

        &:nth-child(1) {
            & > a {
                display: block;
                line-height: 0;

                & > img {
                    width: 35px;
                    height: 35px;
                    line-height: 0;
                    display: block;
                    border-radius: 5px;
                }
            }
        }

        &:nth-child(2) {
            justify-content: center;
        }

        &:nth-child(3) {
            justify-content: flex-end;
        }
    }
`;