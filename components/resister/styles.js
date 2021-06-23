import styled from 'styled-components';

export const FormWrapper = styled.div`
    & li {
        margin-bottom: 4rem;
        & h2 {
            font-weight: bold;
            font-size: 1rem;
            margin-bottom: 1rem;
        }
    }
    & .form-address {
        display: flex;
        flex-direction: column;
        & div:first-of-type {
            margin-bottom: 1rem;
        }
        & input {
            width: 100%;
            font-size: 1rem;
            padding: 1rem;
            box-sizing: border-box;
            border: 1px solid #ccc;
        }
    }
`
// 매매종류
export const SellTypeRadioBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & div {
        width: 180px;
        text-align: center;
    }
    & label {
        display: block;
        cursor: pointer;
        padding: 0.75rem;
        border: 1px solid #4263eb;
        color: #4263eb;
    }
    & input:checked+label {
        background-color: #4263eb;
        color: white;
    }
    & input {
        display: none;
    }
`
// 가격종류
export const PriceTypeRadioBtnBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & div {
        width: 180px;
        text-align: center;
    }
    & label {
        display: block;
        cursor: pointer;
        padding: 0.75rem;
        border: 1px solid #4263eb;
        color: #4263eb;
    }
    & input:checked+label {
        background-color: #4263eb;
        color: white;
    }
    & input {
        display: none;
    }
`
// 가격정보
export const AmountInfoBox = styled.div`
    & div {
        display: flex;
        flex-direction: row;
        padding-bottom: 1.25rem;
        margin-bottom: 1.25rem;
        border-bottom: 1px solid #ccc;
        align-items: center;
        &:last-of-type {
            margin-bottom: 0;
        }
        & p {
            width: 120px;
        }
        & input {
            flex: 1;
            border: 1px solid #ccc;
            padding: 1rem;
        }
    }
`
// 관리비
export const AdminExpense = styled.li`
    & div {
        display: flex;
        flex-direction: row;
        padding-bottom: 1.25rem;
        border-bottom: 1px solid #ccc;
        align-items: center;
        & p {
            width: 120px;
        }
        & input {
            flex: 1;
            border: 1px solid #ccc;
            padding: 1rem;
        }
    }
`
// 관리비용 선택
export const AdminExpenseCheckBox = styled.li`
    display: flex;
    flex-direction: column;
    & .checkbox {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        & div {
            width: 120px;
            text-align: center;
        }
    }
    & label {
        display: block;
        line-height: 46px;
        cursor: pointer;
        padding: 0 0.75rem;
        border: 1px solid #4263eb;
        color: #4263eb;
    }
    & input:checked+label {
        background-color: #4263eb;
        color: white;
    }
    & input {
        display: none;
    }
`
// 층수, 방향
export const FloorViewCheckbox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & div {
        width: 180px;
        text-align: center;
    }
    & label {
        display: block;
        cursor: pointer;
        padding: 0.75rem;
        border: 1px solid #4263eb;
        color: #4263eb;
    }
    & input:checked+label {
        background-color: #4263eb;
        color: white;
    }
    & input {
        display: none;
    }
`
// 전용면적
export const AcreagesBox = styled.div`
    & div {
        display: flex;
        flex-direction: row;
        padding-bottom: 1.25rem;
        margin-bottom: 1.25rem;
        border-bottom: 1px solid #ccc;
        align-items: center;
        &:last-of-type {
            margin-bottom: 0;
        }
        & p {
            width: 120px;
        }
        & input {
            flex: 1;
            border: 1px solid #ccc;
            padding: 1rem;
        }
    }
`
// 애완동물
export const PetCheckbox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & div {
        width: 180px;
        text-align: center;
    }
    & label {
        display: block;
        cursor: pointer;
        padding: 0.75rem;
        border: 1px solid #4263eb;
        color: #4263eb;
    }
    & input:checked+label {
        background-color: #4263eb;
        color: white;
    }
    & input {
        display: none;
    }
`
// 완료 버튼
export const SubmitButton = styled.div`
    margin-top: 4rem;
    padding-top: 4rem;
    border-top: 2px solid #222;
    text-align: center;
    & button {
        background-color: #12b886;
        color: white;
        border-radius: 0.25rem;
        padding: 1rem 1.75rem;
        cursor: pointer;
    }
`