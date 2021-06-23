import React, { useState, useRef, useCallback, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import useInput from '../../hooks/useInput';

import Address from './address';
import SellTypeRadioButton from './sellType';
import AmountTypeRadioButton from './amountType';
import AmountInfo from './amountInfo';
import AdminExpenseBox from './adminExpense';
import FloorViewRadioButton from './floorView';

import { FormWrapper, AcreagesBox, PetCheckbox, SubmitButton } from './styles';

const RegisterForm = () => {
    const [onPostcode, setOnPostcode] = useState(false); // true 시 다음 카카오 우편주소 입력 팝업 띄우기

    const [address, setAddress] = useState(''); // 필수 주소
    const [detailAddress, onChangeDetailAddress, setDetailAddress] = useInput(''); // 상세주소
    const [sellCheckedRadio, onChangeCheckedSellType, setSellCheckedRadio] = useInput('ONE_ROOM'); // 매물종류 - 초깃값 원룸
    const [priceCheckedRadio, onChangeCheckedPriceType, setPriceCheckedRadio] = useInput('MONTHLY'); // 가격종류 - 초깃값 월세

    const [monthlyDeposit, onChangeMonthly, setMonthlyDeposit] = useInput(0); // 월세 시 보증금
    const [rent, onChangeRent, setRent] = useInput(0); // 월세 시 월세금
    const [jeonseDeposit, onChangeJeonse, setJeonseDeposit] = useInput(0); // 전세가
    const [sellingDeposit, onChangeSelling, setSellingDeposit] = useInput(0); // 매매가

    const [adminExpense, onChangeAdminExpense, setAdminExpense] = useInput(0); // 관리비용
    const [expense, setExpense] = useState([]); // 관리비용 선택 배열

    const [floorCheckedRadio, onChangeCheckedFloorType, setFloorCheckedRadio] = useInput('FLOOR'); // 층수 - 초깃값 1~80층
    const [viewCheckedRadio, onChangeCheckedViewType, setViewCheckedRadio] = useInput('EAST'); // 방향 - 초깃값 동쪽
    const [acreages1, setAcreages1] = useState(0); // 전용면적 - 평수
    const [acreages2, setAcreages2] = useState(0); // 전용면적 - 제곱미터
    const [petCheckedRadio, onChangeCheckedPetType, setPetCheckedRadio] = useInput('POSSIBLE'); // 애완동물 - 초깃값 가능
    
    const inputRef = useRef(null);
    const postcodeRef = useRef(null);

    // 다음 카카오 우편주소 핸들러
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 

        if (data.addressType === 'R') {
            if (data.bname !== '') {
            extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
        setAddress(fullAddress);
        setOnPostcode(false);
    }

    // 관리비용 선택 사항
    const onChangeAdminExpenseCheck = useCallback((e) => {
        setExpense((prevList) => {
            return [...prevList, e.target.value];
        });
    }, [expense])

    // 필수주소 포커스 이벤트
    const onFocusEvent = useCallback(() => {
        setOnPostcode(true);
    }, []);

    // 외부 클릭 시
    const onClickOutSide = useCallback((e) => {
        if (e.target !== postcodeRef.current) {
            setOnPostcode(false);
        }
    }, [postcodeRef]);

    // 전용면적 - 평수 , 제곱미터
    const onChangeAcreages1 = useCallback((e) => {
        setAcreages1(e.target.value);
        setAcreages2(Math.floor(e.target.value * 3.3058));
    }, [acreages1, acreages2]);

    const onChangeAcreages2 = useCallback((e) => {
        setAcreages2(e.target.value);
        setAcreages1(Math.floor(e.target.value / 3.3058));
    }, [acreages1, acreages2]);

    // Form Submit Event
    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        alert(`
            주소 : ${address} ${detailAddress}
            매물종류 : ${sellCheckedRadio}
            가격종류 : ${priceCheckedRadio}
            보증금/월세 : ${monthlyDeposit}/${rent}
            관리비용 : ${adminExpense}
            관리비종류 : ${expense}
            층수 : ${floorCheckedRadio}
            방향 : ${viewCheckedRadio}
            전용면적 : ${acreages2}
            애완동물 : ${petCheckedRadio}
        `)
    }, []);

    // 외부 클릭 시 함수를 useEffect로 관리
    useEffect(() => {
        document.addEventListener('click', onClickOutSide);
        return () => {
            document.removeEventListener('click', onClickOutSide);
        }
    }, [onClickOutSide]);
    

    return (
        <FormWrapper>
            { onPostcode && <DaumPostcode style={{ marginBottom: '2rem'}} ref={postcodeRef} onComplete={handleComplete} /> }
            <form onSubmit={onSubmitForm}>
                <ul>
                    <Address
                        address={address}
                        detailAddress={detailAddress}
                        onChangeDetailAddress={onChangeDetailAddress}
                        inputRef={inputRef}
                        onFocusEvent={onFocusEvent}
                    />
                    <SellTypeRadioButton sellCheckedRadio={sellCheckedRadio} onChangeCheckedSellType={onChangeCheckedSellType} />
                    <AmountTypeRadioButton priceCheckedRadio={priceCheckedRadio} onChangeCheckedPriceType={onChangeCheckedPriceType} />
                    <AmountInfo
                        monthlyDeposit={monthlyDeposit}
                        onChangeMonthly={onChangeMonthly}
                        jeonseDeposit={jeonseDeposit}
                        onChangeJeonse={onChangeJeonse}
                        sellingDeposit={sellingDeposit}
                        onChangeSelling={onChangeSelling}
                        priceCheckedRadio={priceCheckedRadio}
                        rent={rent}
                        onChangeRent={onChangeRent}
                    />
                    <AdminExpenseBox
                        priceCheckedRadio={priceCheckedRadio}
                        adminExpense={adminExpense}
                        onChangeAdminExpense={onChangeAdminExpense}
                        onChangeAdminExpenseCheck={onChangeAdminExpenseCheck}
                    />
                    <FloorViewRadioButton
                        onChangeCheckedFloorType={onChangeCheckedFloorType}
                        floorCheckedRadio={floorCheckedRadio}
                        onChangeCheckedViewType={onChangeCheckedViewType}
                        viewCheckedRadio={viewCheckedRadio}
                    />
                    <li>
                        <h2>전용면적</h2>
                        <AcreagesBox>
                            <div>
                                <p>평</p>
                                <input type="text" value={acreages1} onChange={onChangeAcreages1} />
                            </div>
                            <div>
                                <p>제곱미터(m2)</p>
                                <input type="text" value={acreages2} onChange={onChangeAcreages2} />
                            </div>
                        </AcreagesBox>
                    </li>
                    <li>
                        <h2>애완동물 (택1)</h2>
                        <PetCheckbox>
                            <div>
                                <input
                                    type="radio"
                                    id="possible"
                                    name="pet-type"
                                    value="POSSIBLE"
                                    onChange={onChangeCheckedPetType}
                                    checked={petCheckedRadio === 'POSSIBLE'}
                                />
                                <label htmlFor="possible">가능</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="impossible"
                                    name="pet-type"
                                    value="IMPOSSIBLE"
                                    onChange={onChangeCheckedPetType}
                                    checked={petCheckedRadio === 'IMPOSSIBLE'}
                                />
                                <label htmlFor="impossible">불가능</label>
                            </div>
                        </PetCheckbox>
                    </li>
                </ul>
                <SubmitButton><button type="submit">등록완료</button></SubmitButton>
            </form>
        </FormWrapper>
    );
}

export default RegisterForm;