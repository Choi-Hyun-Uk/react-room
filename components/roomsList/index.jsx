import React from 'react';
import Link from 'next/link';
import { RoomItem } from './styles';
import useAmount from '../../hook/useAmount';

const RoomsList = ({ item, mode }) => {
    const depositAmount = useAmount('depositAmount', item);
    const rentAmount = useAmount('rentAmount', item);
    
    return (
        <>
        {mode === item.canceled && (
            <RoomItem>
                <Link href={`/room/${item.pk}`}>
                    <a>
                        <div><img src={item.thumbnail} alt={`${item.address}+${item.detailAddress}`} /></div>
                        <div className="room-top-info">
                            <h1 className={item.realEstatePriceType.toLowerCase()}>{item.realEstatePriceType}</h1>
                            {item.realEstatePriceType === 'SELLING' && <p><strong>{depositAmount}</strong></p> }
                            {item.realEstatePriceType === 'JEONSE' && <p><strong>{depositAmount}</strong></p> }
                            {item.realEstatePriceType === 'MONTHLY' && <p><strong>{depositAmount}/{rentAmount}</strong></p> }
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