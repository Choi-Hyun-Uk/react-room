import styled from 'styled-components';

export const RoomsListWrapper = styled.div`
    position: relative;
    margin: 4rem auto 0 auto;
    max-width: 980px;

    & ul {
        display: flex;
        flex-direction: row;
    }
`

export const DetailPageWrapper = styled.div`
    position: relative;
    margin: 4rem auto 0 auto;
    padding-bottom: 4rem;
    max-width: 780px;

    & .room-register-btn {
        margin-top: 4rem;
        text-align: center;
        & a {
            display: inline-block;
            padding: 0.5rem 1.25rem;
            background-color: #4263eb;
            border-radius: 0.25rem;
            color: white;
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