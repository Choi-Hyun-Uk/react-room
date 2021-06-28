import React from 'react';
import Link from 'next/link';
import { RegisterLinkButton } from './styles';

const FloatingButton = ({ item, onClickRoomUpdate }) => {
    console.log(item.canceled);
    return (
        <RegisterLinkButton>
            <Link href="/room/register">
                <a>방등록</a>
            </Link>
            <button onClick={() => onClickRoomUpdate(item.canceled ? false : true)}>
                {item.canceled ? '내리기' : '올리기'}
            </button>
        </RegisterLinkButton>
    )
}

export default FloatingButton