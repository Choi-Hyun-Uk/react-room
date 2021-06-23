import React from 'react';
import { RoomModeMenu } from './styles';

const ModeMenu = ({ mode, onClickDownRoom, onClickUpRoom }) => {
    
    return (
        <RoomModeMenu>
            <button className={mode ? '' : 'active'} onClick={onClickUpRoom}>올린 방</button>
            <button className={mode ? 'active' : ''} onClick={onClickDownRoom}>내린 방</button>
        </RoomModeMenu>
    )
}

export default ModeMenu;