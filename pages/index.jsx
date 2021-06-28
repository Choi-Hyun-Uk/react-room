import React, { useState, useCallback } from 'react';
import wrapper from '../store/configureStore';

import RoomsList from '../components/roomsList';
import { RoomsListWrapper } from '../styles';
import ModeMenu from '../components/roomsList/modeMenu';
import { dataGetItems } from '../actions/register';
import { useSelector } from 'react-redux';

const Home = () => {
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

export default Home;