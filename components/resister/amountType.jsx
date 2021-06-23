import React from 'react';
import { PriceTypeRadioBtnBox } from './styles';

const AmountTypeRadioButton = ({ onChangeCheckedPriceType, priceCheckedRadio }) => {
    return (
        <li className="form-priceType">
            <h2>가격 (택1)</h2>
            <PriceTypeRadioBtnBox>
                <div>
                    <input type="radio" id="monthly" name="price-type" value="MONTHLY" onChange={onChangeCheckedPriceType} checked={priceCheckedRadio === 'MONTHLY'} />
                    <label htmlFor="monthly">월세</label>
                </div>
                <div>
                    <input type="radio" id="jeonse" name="price-type" value="JEONSE" onChange={onChangeCheckedPriceType} checked={priceCheckedRadio === 'JEONSE'} />
                    <label htmlFor="jeonse" >전세</label>
                </div>
                <div>
                    <input type="radio" id="selling" name="price-type" value="SELLING" onChange={onChangeCheckedPriceType} checked={priceCheckedRadio === 'SELLING'} />
                    <label htmlFor="selling">매매</label>
                </div>
            </PriceTypeRadioBtnBox>
        </li>
    )   
}

export default AmountTypeRadioButton;