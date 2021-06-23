import React from 'react';
import { SellTypeRadioBox } from './styles';

const SellTypeRadioButton = ({ onChangeCheckedSellType, sellCheckedRadio }) => {
    return (
        <li className="form-sellType">
            <h2>매물종류 (택1)</h2>
            <SellTypeRadioBox>
                <div>
                    <input type="radio" id="one-room" name="sell-type" value="ONE_ROOM" onChange={onChangeCheckedSellType} checked={sellCheckedRadio === 'ONE_ROOM'} />
                    <label htmlFor="one-room">원룸</label>
                </div>
                <div>
                    <input type="radio" id="two-room" name="sell-type" value="TWO_ROOM" onChange={onChangeCheckedSellType} checked={sellCheckedRadio === 'TWO_ROOM'} />
                    <label htmlFor="two-room" >투룸</label>
                </div>
                <div>
                    <input type="radio" id="apartment" name="sell-type" value="APARTMENT" onChange={onChangeCheckedSellType} checked={sellCheckedRadio === 'APARTMENT'} />
                    <label htmlFor="apartment">아파트</label>
                </div>
                <div>
                    <input type="radio" id="efficiency-apartment" name="sell-type" value="EFFICIENCY_APARTMENT" onChange={onChangeCheckedSellType} checked={sellCheckedRadio === 'EFFICIENCY_APARTMENT'} />
                    <label htmlFor="efficiency-apartment">오피스텔</label>
                </div>
            </SellTypeRadioBox>
        </li>
    )
}

export default SellTypeRadioButton;