import React from 'react';
import RegisterForm from '../../components/resister/registerForm';
import { RegisterWrapper } from '../../styles';

const RoomRegisterPage = () => {
    return (
        <RegisterWrapper>
            <h1>방 등록</h1>
            <RegisterForm />
        </RegisterWrapper>
    )
}

export default RoomRegisterPage;