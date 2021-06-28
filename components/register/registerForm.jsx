import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DaumPostcode from 'react-daum-postcode';
import Router from 'next/router';
import { dataPostSave, deleteSaveData } from '../../actions/register';

import Address from './address';
import RealEstate from './realEstate';
import RealEstatePriceType from './realEstatePriceType';
import DepositAmount from './depositAmount';
import FloorAndSunlight from './floorAndSunlight';
import MaintenanceFeeBox from './maintenanceFee';
import SuccessModal from '../../modal/successModal';
import SaveDataModal from '../../modal/saveDataModal';

import { FormWrapper, AcreagesBox, PetCheckbox, SubmitButton } from './styles';

const RegisterForm = ({ isSaveData }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.register.registerSaveData)[0]; // 임시 저장 데이터
    const [ modalIsOpen, setModalIsOpen] = useState(false); // 모달창 여부
    const [ saveDataModalIsOpen, setSaveDataModalIsOpen ] = useState(isSaveData); // 임시 저장 데이터 여부
    const [ onPostcode, setOnPostcode ] = useState(false); // true 시 다음 카카오 우편주소 입력창 띄우기
    const checkInputRef = useRef(null);
    const inputRef = useRef(null); 
    const postcodeRef = useRef(null);

    const [ formInput, setFormInput ] = useState({ // Form 상태 값
        address: '',
        detailAddress: '',
        realEstate: '',
        realEstatePriceType: '',
        maintenanceFee: '',
        maintenanceFeeItems: [],
        depositAmount: 0,
        rentAmount: 0,
        floor: '',
        sunlightDirection: '',
        leasableArea1: 0,
        leasableArea2: 0,
        pet: false,
    });

    const { // 구조 분해 할당
        address,
        detailAddress,
        realEstate,
        realEstatePriceType,
        depositAmount,
        rentAmount,
        maintenanceFee,
        maintenanceFeeItems,
        floor,
        sunlightDirection,
        leasableArea1,
        leasableArea2, pet } = formInput;

    const onChangeFormInput = useCallback((e) => { // 공통 Input onChange
        setFormInput((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            }
        });
    }, []);

    const onChangeRealEstate = useCallback((e) => {
        setFormInput((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            }
        });
        if (e.target.name === 'realEstatePriceType') {
            setFormInput((prevState) => { 
                return {
                    ...prevState,
                    depositAmount: 0,
                    rentAmount: 0
                }
            });
        }
    }, [realEstate, realEstatePriceType, depositAmount, rentAmount]);

    const onChangeMaintenanceFeeItems = useCallback((e) => {
        setFormInput((prevState) => {
            if (maintenanceFeeItems.includes(e.target.value)) { 
                return {
                    ...prevState,
                    maintenanceFeeItems: maintenanceFeeItems.filter((item) => item !== e.target.value)
                };
            }
            return {
                ...prevState,
                maintenanceFeeItems: [...maintenanceFeeItems, e.target.value]
            }
        });
    }, [maintenanceFeeItems]);

    const onChangeLeasableArea = useCallback((e) => {
        if (e.target.name === 'leasableArea1') {
            setFormInput((prevState) => {
                return {
                    ...prevState,
                    leasableArea1: e.target.value,
                    leasableArea2: e.target.value * 3.31,
                }
            });
        } else {
            setFormInput((prevState) => {
                return {
                    ...prevState,
                    leasableArea1: e.target.value / 3.31,
                    leasableArea2: e.target.value,
                }
            });
        }
    }, [leasableArea1, leasableArea2]);

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
        setFormInput((prevState) => {
            return {
                ...prevState,
                address: fullAddress,
            }
        }); 
        setOnPostcode(false);
    }

    // 필수주소 포커스 이벤트
    const onFocusEvent = useCallback(() => {
        setOnPostcode(true);
    }, [onPostcode]);

    // 다음 포스트 외부 클릭 시
    const onClickOutSide = useCallback((e) => {
        if (e.target !== postcodeRef.current) {
            setOnPostcode(false);
        }
    }, [postcodeRef]);

    // Modal 확인 버튼
    const onClickCheckBtn = useCallback(() => {
        setModalIsOpen(false);
        Router.replace('/');
    }, [modalIsOpen]);

    // 임시 저장 데이터 있을 시 모달 버튼 - 새로작성하기
    const onClickNewWrite = useCallback(() => {
        setSaveDataModalIsOpen(false);
        dispatch(deleteSaveData());
    }, [dispatch, saveDataModalIsOpen]);

    // 임시 저장 데이터 있을 시 모달 버튼 - 이어서 작성하기
    const onClickSaveDatawWrite = useCallback(() => {
        setSaveDataModalIsOpen(false);
        setFormInput({
            address: data.address,
            detailAddress: data.detailAddress,
            realEstate: data.realEstate,
            realEstatePriceType: data.realEstatePriceType,
            maintenanceFee: data.maintenanceFee,
            maintenanceFeeItems: data.maintenanceFeeItems,
            depositAmount: data.depositAmount,
            rentAmount: data.rentAmount,
            floor: data.floor,
            sunlightDirection: data.sunlightDirection,
            leasableArea1: data.leasableArea1,
            leasableArea2: data.leasableArea2,
            pet: data.pet,
        });
    }, [formInput]);

    // Form Submit Event
    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        setModalIsOpen(true);
    }, [formInput]);

    // 임시 저장 시
    const onClickDataSave = useCallback( async () => {
        dispatch(dataPostSave({
            ...formInput,
            leasableArea: leasableArea2,
            thumbnail: 'https://static.zaritalk.com/images/img-default-thumbnail@2x.png',
            canceled: false
        }));
    }, [formInput, leasableArea2]);

    // 다음 주소 찾기 팝업 창 외부 클릭 시 Off
    useEffect(() => {
        document.addEventListener('click', onClickOutSide);
        return () => {
            document.removeEventListener('click', onClickOutSide);
        }
    }, [onClickOutSide]);

    return (
        <FormWrapper>
            <SuccessModal modalIsOpen={modalIsOpen} onClickCheckBtn={onClickCheckBtn} text="매물 등록 완료!" />
            <SaveDataModal saveDataModalIsOpen={saveDataModalIsOpen} onClickNewWrite={onClickNewWrite} onClickSaveDatawWrite={onClickSaveDatawWrite} />
            { onPostcode && <DaumPostcode style={{ marginBottom: '2rem'}} ref={postcodeRef} onComplete={handleComplete} /> }
            <form onSubmit={onSubmitForm}>
                <ul>
                    <Address
                        address={address}
                        detailAddress={detailAddress}
                        onChangeFormInput={onChangeFormInput}
                        inputRef={inputRef}
                        onFocusEvent={onFocusEvent}
                    />
                    <RealEstate
                        realEstate={realEstate}
                        onChangeRealEstate={onChangeRealEstate}
                    />
                    <RealEstatePriceType
                        realEstatePriceType={realEstatePriceType}
                        onChangeRealEstate={onChangeRealEstate}
                    />
                    { realEstatePriceType !== '' &&
                        <DepositAmount
                            realEstatePriceType={realEstatePriceType}
                            depositAmount={depositAmount}
                            rentAmount={rentAmount}
                            onChangeFormInput={onChangeFormInput}
                        />
                    }
                    <MaintenanceFeeBox
                        realEstatePriceType={realEstatePriceType}
                        maintenanceFee={maintenanceFee}
                        maintenanceFeeItems={maintenanceFeeItems}
                        onChangeFormInput={onChangeFormInput}
                        onChangeMaintenanceFeeItems={onChangeMaintenanceFeeItems}
                        checkInputRef={checkInputRef}
                    />
                    <FloorAndSunlight
                        onChangeFormInput={onChangeFormInput}
                        floor={floor}
                        sunlightDirection={sunlightDirection}
                    />
                    <li>
                        <h2>전용면적</h2>
                        <AcreagesBox>
                            <div>
                                <p>평</p>
                                <input type="text" name="leasableArea1" value={leasableArea1} onChange={onChangeLeasableArea} />
                            </div>
                            <div>
                                <p>제곱미터(m2)</p>
                                <input type="text" name="leasableArea2" value={leasableArea2} onChange={onChangeLeasableArea} />
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
                                name="pet"
                                value="POSSIBLE"
                                onChange={onChangeFormInput}
                                checked={pet === 'POSSIBLE'}
                            />
                            <label htmlFor="possible">가능</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="impossible"
                                name="pet"
                                value="IMPOSSIBLE"
                                onChange={onChangeFormInput}
                                checked={pet === 'IMPOSSIBLE'}
                            />
                            <label htmlFor="impossible">불가능</label>
                        </div>
                    </PetCheckbox>
                </li>
                </ul>
                <SubmitButton>
                    <button className="save-btn" type="button" onClick={onClickDataSave}>임시저장</button>
                    <button type="submit">등록완료</button>
                </SubmitButton>
            </form>
        </FormWrapper>
    );
}

export default RegisterForm;