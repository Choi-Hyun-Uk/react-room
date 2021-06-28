import React from 'react';
import Link from 'next/link';
import { MainPageWrapper } from '../styles';

const Home = () => {
    return (
        <MainPageWrapper>
            <Link href="/rooms"><a>방 목록 페이지</a></Link>
            <Link href="/room/register"><a>방 등록 페이지</a></Link>
        </MainPageWrapper>
    )
}

export default Home;