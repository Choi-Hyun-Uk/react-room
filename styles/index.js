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