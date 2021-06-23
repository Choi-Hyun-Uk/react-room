import styled from 'styled-components';

export const DetailTop = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;

    & .item-thumbnail {
        width: 380px;
        margin-right: 2rem;
        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    & .item-priceType {
        flex: 1;
        & h1 {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            font-weight: bold;
            font-size: 1rem;
            margin-bottom: 1rem;
        }
        & h2 {
            font-size: 3.875em;
            font-weight: bold;
            padding-bottom: 1rem;
            margin-bottom: 1rem;
            border-bottom: 1px solid #ccc;
        }
    }

    & .jeonse {
        color: #7950f2;
        border: 1px solid #7950f2;
    }
    & .selling {
        color: #be4bdb;
        border: 1px solid #be4bdb;
    }
    & .monthly {
        color: #4c6ef5;
        border: 1px solid #4c6ef5;
    }
`

export const DetailBottom = styled.div`
    display: flex;
    flex-direction: column;
    & h1 {
        font-size: 1.25rem;
        font-weight: bold;
        margin: 1rem 0;
        padding-bottom: 2rem;
        border-bottom: 2px solid #222;
    }
    & ul {
        display: flex;
        flex-wrap: wrap;
        & li {
            display: flex;
            width: 50%;
            flex-direction: row;
            justify-content: space-between;
            padding: 1.5rem 1rem;
            border-bottom: 1px solid #ccc;
            box-sizing: border-box;
            & .category {
                font-weight: bold;
            }
            & .category-info {
                display: flex;
                & p {
                    margin-left: 0.5rem;
                }
            }
        }
    }
`