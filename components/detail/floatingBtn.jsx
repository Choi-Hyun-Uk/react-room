import React from 'react';
import { ButtonBox } from './styles';
import Link from 'next/link';

const FloatingButton = ({ item, onClickRoomUpdate }) => {
    return (
        <ButtonBox>
            <Link href={{
                pathname: '/room/register/',
                query: { id: item.id }
            }}>
                <a>수정하기</a>
            </Link>
            <button onClick={() => onClickRoomUpdate(item.canceled ? false : true)}>
                {item.canceled ? '내리기' : '올리기'}
            </button>
        </ButtonBox>
    )
}

export default FloatingButton