import React from 'react';

const Address = ({ address, detailAddress, onChangeDetailAddress, inputRef, onFocusEvent }) => {
    return (
        <li className="form-address">
            <h2>주소입력</h2>
            <div>
                <input type="text" ref={inputRef} value={address} placeholder="주소검색" onFocus={onFocusEvent} readOnly />
            </div>
            <div>
                <input type="text" value={detailAddress} placeholder="상세주소를 입력해주세요." onChange={onChangeDetailAddress} />
            </div>
        </li>
    )
}

export default Address;