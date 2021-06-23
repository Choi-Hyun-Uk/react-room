import React from 'react';
import Link from 'next/link';
import { RoomItem } from './styles';

const RoomsList = ({ item, mode }) => {
    
    return (
        <>
        {mode === item.canceled && (
            <RoomItem>
                <Link href={`/room/${item.pk}`}>
                    <a>
                        <div><img src={item.thumbnail} alt={`${item.address}+${item.detailAddress}`} /></div>
                        <div className="room-top-info">
                            <h1 className={item.realEstatePriceType.toLowerCase()}>{item.realEstatePriceType}</h1>
                            <p><strong>{item.depositAmount}</strong>원</p>
                        </div>
                        <div className="room-bottom-info">
                            <h2>{item.address}</h2>
                            <div>{item.realEstate}</div>
                        </div>
                    </a>
                </Link>
            </RoomItem>
        )}
        </>
    )
}

export default RoomsList;