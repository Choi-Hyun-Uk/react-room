import React from 'react';
import { ModalContainer, SaveDataModalBox } from './styles';

const SaveDataModal = ({ saveDataModalIsOpen, onClickNewWrite, onClickSaveDatawWrite }) => {

    if (saveDataModalIsOpen === false) return null;

    return (
        <ModalContainer>
            <SaveDataModalBox>
                <h2>임시 저장된 데이터가 존재합니다.<br /><strong>이어서 작성 하시겠습니까?</strong></h2>
                <span>새로 작성 시 임시 저장된 데이터는 소멸됩니다.</span>
                <div>
                    <button className="new-write" onClick={onClickNewWrite}>새로 작성하기</button>
                    <button className="save-data-write" onClick={onClickSaveDatawWrite}>이어서 작성하기</button>
                </div>
            </SaveDataModalBox>
        </ModalContainer>
    )
}

export default SaveDataModal;