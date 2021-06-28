import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import wrapper from '../store/configureStore';

import RoomsList from '../components/roomsList';
import { RoomsListWrapper } from '../styles';
import ModeMenu from '../components/roomsList/modeMenu';
import { dataGetItems } from '../actions/register';

const Rooms = () => {
    const { roomsList } = useSelector((state) => state.register);

    // 올린방, 내린방 상태
    const [mode, setMode] = useState(false);

    const onClickUpRoom = useCallback(() => {
        setMode(false)
    }, [mode]);

    const onClickDownRoom = useCallback(() => {
        setMode(true)
    }, [mode]);

    return (
        <>
            <RoomsListWrapper>
                <ModeMenu
                    mode={mode}
                    onClickUpRoom={onClickUpRoom}
                    onClickDownRoom={onClickDownRoom}
                />
                <ul>
                    {roomsList?.map((item) => (
                        <RoomsList key={item.pk} item={item} mode={mode} />
                    ))}
                </ul>
                <div className="registerpage-link">
                    <Link href="/room/register">
                        <a>방 등록하기</a>
                    </Link>
                </div>
            </RoomsListWrapper>
        </>
    )
}

export const getStaticProps = wrapper.getStaticProps((context) => async () => {
    await context.dispatch(dataGetItems());
    return {
        props: {}
    }
});

export default Rooms;