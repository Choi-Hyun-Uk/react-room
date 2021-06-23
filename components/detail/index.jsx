import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DetailTop, DetailBottom } from './styles';

const RoomDetail = ({ id }) => {
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const roomItem = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/roomsItem?pk=${id}`);
                setItem(response.data[0]);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        if (id && id > 0) roomItem();
    }, [id]);

    if (loading) return null;

    return (
        <>
            <DetailTop>
                <div className="item-thumbnail"><img src={item.thumbnail} alt={`${item.address}+${item.detailAddress}`} /></div>
                <div className="item-priceType">
                    <h1 className={item.realEstatePriceType.toLowerCase()}>{item.realEstatePriceType}</h1>
                    {
                        item.realEstatePriceType !== 'MONTHLY'
                        ? <h2>{item.depositAmount}</h2>
                        : <h2>{item.depositAmount}/{item.rentAmount}</h2>
                    }
                    <div className="item-address">
                        <p>{item.address}</p>
                        <p>{item.detailAddress}</p>
                    </div>
                </div>
            </DetailTop>
            <DetailBottom>
                <h1>거래정보</h1>
                <ul>
                    <li><div className="category">매물종류</div><div className="category-info">{item.realEstate}</div></li>
                    <li><div className="category">가격종류</div><div className="category-info">{item.realEstatePriceType}</div></li>
                    { item.realEstatePriceType !== 'MONTHLY'
                    ? <li><div className="category">매매가</div><div className="category-info">{item.depositAmount}</div></li>
                    : (
                    <>
                        <li><div className="category">보증금</div><div className="category-info">{item.depositAmount}</div></li>
                        <li><div className="category">임대료</div><div className="category-info">{item.rentAmount}</div></li>
                    </>
                    )}
                    <li>
                        <div className="category">관리비</div>
                        <div className="category-info">{item.maintenanceFee}</div>
                        </li>
                    <li>
                        <div className="category">관리항목</div>
                        <div className="category-info">
                            {
                                item.maintenanceFeeItems.length > 0 
                                ? item.maintenanceFeeItems.map((item, i) => <p key={i}>{item}</p>)
                                : '-'
                            }
                        </div>
                    </li>
                    <li>
                        <div className="category">층수</div>
                        <div className="category-info">{item.floor}층</div>
                    </li>
                    <li>
                        <div className="category">방향</div>
                        <div className="category-info">{item.sunlightDirection}</div>
                    </li>
                    <li>
                        <div className="category">평수</div>
                        <div className="category-info">{Math.floor(item.leasableArea/3.3058)}평 / {item.leasableArea}m2</div>
                    </li>
                    <li>
                        <div className="category">애완동물</div>
                        <div className="category-info">{item.pet ? '가능' : '불가능'}</div>
                    </li>
                </ul>
            </DetailBottom>
        </>
    )
}

export default RoomDetail;