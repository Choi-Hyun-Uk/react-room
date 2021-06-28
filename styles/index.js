import styled from 'styled-components';

export const RoomsListWrapper = styled.div`
    position: relative;
    margin: 4rem auto 0 auto;
    max-width: 980px;

    & ul {
        display: flex;
        flex-direction: row;
    }

    & .registerpage-link {
        position: fixed;
        display: flex;
        left: 50%;
        transform: translateX(-50%);
        bottom: 3rem;
        & a {
            display: block;
            padding: 0.75rem 1.5rem;
            background-color: #4c6ef5;
            color: white;
            border-radius: 0.25rem;
            margin: 0 1rem;
        }
    }
`

export const MainPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    & a {
        display: inline-block;
        padding: 1rem 1.5rem;
        margin: 1.5rem;
        border-radius: 0.25rem;
        background-color: #4c6ef5;
        color: #fff;
        &:hover {
            background-color: #3b5bdb;
        }
    }
`

export const RegisterWrapper = styled.div`
    position: relative;
    max-width: 780px;
    margin: 4rem auto;
    & > h1 {
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 2rem;
    }
`