import React from 'react';
import { RealEstateBox } from './styles';

const RealEstate = ({ onChangeRealEstate, realEstate }) => {
    return (
        <li className="form-sellType">
            <h2>매물종류 (택1)</h2>
            <RealEstateBox>
                <div>
                    <input type="radio" id="one-room" name="realEstate" value="ONE_ROOM" onChange={onChangeRealEstate} checked={realEstate === 'ONE_ROOM'} />
                    <label htmlFor="one-room">원룸</label>
                </div>
                <div>
                    <input type="radio" id="two-room" name="realEstate" value="TWO_ROOM" onChange={onChangeRealEstate} checked={realEstate === 'TWO_ROOM'} />
                    <label htmlFor="two-room" >투룸</label>
                </div>
                <div>
                    <input type="radio" id="apartment" name="realEstate" value="APARTMENT" onChange={onChangeRealEstate} checked={realEstate === 'APARTMENT'} />
                    <label htmlFor="apartment">아파트</label>
                </div>
                <div>
                    <input type="radio" id="efficiency-apartment" name="realEstate" value="EFFICIENCY_APARTMENT" onChange={onChangeRealEstate} checked={realEstate === 'EFFICIENCY_APARTMENT'} />
                    <label htmlFor="efficiency-apartment">오피스텔</label>
                </div>
            </RealEstateBox>
        </li>
    )
}

export default RealEstate;