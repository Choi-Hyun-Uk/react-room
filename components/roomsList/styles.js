import styled from 'styled-components';

export const RoomItem = styled.li`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    width: 33.333333%;
    height: 270px;   

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    & .room-top-info {
       padding: 1rem 0;
       display: flex;
       align-items: center;
       justify-content: space-between;
       margin-bottom: 1rem;
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
       & h1 {
           display: inline-block;
           padding: 0.25rem 0.5rem;
           font-weight: bold;
       }
       & p > strong {
           font-size: 1.25rem;
           font-weight: bold;
           margin-right: 0.25rem;
       }
    }

    & .room-bottom-info {
        font-size: 0.875rem;
        & h2 {
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
    }
`

export const RoomModeMenu = styled.div`
    position: relative;
    padding: 0 1rem;
    margin-bottom: 1rem;
    text-align: center;

    & button {
        cursor: pointer;
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        color: #4263eb;
        border-radius: 0.25rem;
        border: 1px solid #4263eb;
    }

    & .active {
        border: none;
        background-color: #4263eb;
        color: white;
    }
`