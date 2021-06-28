import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import { DetailWrapper, DetailTop, DetailBottom } from './styles';
import FloatingButton from './floatingBtn';
import { dataPatch } from '../../actions/register';
import SuccessModal from '../../modal/successModal';
import useAmount from '../../hook/useAmount';

const RoomDetail = () => {
    const item = useSelector((state) => state.register.roomItem);
    const { isLoading } = useSelector((state) => state.register);
    const [ done, setDone ] = useState(false);
    const dispatch = useDispatch();

    const depositAmount = useAmount('depositAmount', item);
    const rentAmount = useAmount('rentAmount', item);
    const maintenanceFee = useAmount('maintenanceFee', item);

    // boolean 파라미터로 Room canceled 상태 올리기 또는 내리기
    const onClickRoomUpdate = useCallback((boolean)=> {
        dispatch(dataPatch({
            id: item.id,
            content: { canceled: boolean },
        }));
        setDone(true);
    }, [item, done]);

    if (isLoading) return null;

    // Modal 확인 버튼
    const onClickCheckBtn = useCallback(() => {
        setDone(false);
        Router.replace('/rooms');
    }, [done]);

    return (
        <DetailWrapper>
            <SuccessModal modalIsOpen={done} text='업데이트 완료했습니다!' onClickCheckBtn={onClickCheckBtn} />
            <DetailTop>
                <div className="item-thumbnail"><img src={item.thumbnail} alt={`${item.address}+${item.detailAddress}`} /></div>
                <div className="item-priceType">
                    <h1 className={item.realEstatePriceType.toLowerCase()}>{item.realEstatePriceType}</h1>
                    {
                        item.realEstatePriceType !== 'MONTHLY'
                        ? <h2>{depositAmount}</h2>
                        : <h2>{depositAmount}/{rentAmount}</h2>
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
                    ? <li><div className="category">매매가</div><div className="category-info">{depositAmount}</div></li>
                    : (
                    <>
                        <li><div className="category">보증금</div><div className="category-info">{depositAmount}</div></li>
                        <li><div className="category">임대료</div><div className="category-info">{rentAmount}만원</div></li>
                    </>
                    )}
                    <li>
                        <div className="category">관리비</div>
                        <div className="category-info">{maintenanceFee ? `${maintenanceFee}만원` : '-'}</div>
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
            <FloatingButton item={item} onClickRoomUpdate={onClickRoomUpdate} />
        </DetailWrapper>
    )
}

export default RoomDetail;