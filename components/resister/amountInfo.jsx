import React from 'react';
import { AmountInfoBox } from './styles';

const AmountInfo = ({ 
    priceCheckedRadio,
    monthlyDeposit,
    onChangeMonthly,
    rent,
    onChangeRent,
    jeonseDeposit,
    onChangeJeonse,
    sellingDeposit,
    onChangeSelling }) => {
        
    return (
        <li>
            <h2>가격정보</h2>
            <AmountInfoBox>
                {
                    priceCheckedRadio === 'MONTHLY' &&
                    (
                        <>
                            <div>
                                <p>보증금</p>
                                <input type="text" value={monthlyDeposit} onChange={onChangeMonthly} />
                            </div>
                            <div>
                                <p>월세</p>
                                <input type="text" value={rent} onChange={onChangeRent} />
                            </div>
                        </>
                    )
                }
                {
                    priceCheckedRadio === 'JEONSE' &&
                    (
                        <div>
                            <p>전세가</p>
                            <input type="text" value={jeonseDeposit} onChange={onChangeJeonse} />
                        </div> 
                    )
                }
                {
                    priceCheckedRadio === 'SELLING' &&
                    (
                        <div>
                            <p>매매가</p>
                            <input type="text" value={sellingDeposit} onChange={onChangeSelling} />
                        </div> 
                    )
                }
            </AmountInfoBox>
        </li>
    )
}

export default AmountInfo;