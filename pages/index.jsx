import React, { useState, useCallback } from 'react';
import RoomsList from '../components/roomsList';
import { roomItems } from '../data/rooms';
import { RoomsListWrapper } from '../styles';
import ModeMenu from '../components/roomsList/modeMenu';

const Home = () => {
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
                    {roomItems.map((item) => (
                        <RoomsList key={item.pk} item={item} mode={mode} />
                    ))}
                </ul>
            </RoomsListWrapper>
        </>
    )
}

export default Home;