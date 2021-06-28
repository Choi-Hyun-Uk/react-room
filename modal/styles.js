import styled from 'styled-components';

// 모달 공통
export const ModalContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.2);
    overflow: hidden;
`
// 작업 완료 시 모달 박스
export const SuccessModalBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 0.25rem;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    & .check-icon {
        font-size: 4rem;
        color: #4263eb;
        padding: 2rem;
    }
    & .modal-text {
        color: #4263eb;
        font-size: 1.25rem;
        padding: 0 6rem;
        margin-bottom: 2rem;
    }
    & .modal-btn {
        margin-bottom: 2rem;
        & button {
            cursor: pointer;
            padding: 0.5rem 1.5rem;
            background: #4263eb;
            color: white;
            border-radius: 0.25rem;
        }
    }
`

// 임시저장 데이터 불러오기 유무 모달 박스
export const SaveDataModalBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 0.25rem;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    & h2 {
        color: #4263eb;
        font-size: 1.25rem;
        padding: 2rem 4rem;
        text-align: center;
        line-height: 1.5;
        & strong {
            font-weight: bold;
        }
    }
    & span {
        color: #e64980;
    }
    & button {
        cursor: pointer;
        margin: 2rem 1rem;
        padding: 0.5rem 1.5rem;
    }
    & .new-write {
        border: 1px solid #4263eb;
        color: #4263eb;
        border-radius: 0.25rem;
    }
    & .save-data-write {
        background-color: #4263eb;
        color: #fff;
        border-radius: 0.25rem;
    }
`