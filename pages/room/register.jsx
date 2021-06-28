import React from 'react';
import RegisterForm from '../../components/register/registerForm';
import { RegisterWrapper } from '../../styles';
import wrapper from '../../store/configureStore';
import { getSaveData } from '../../actions/register';

const RoomRegisterPage = ({ isSaveData }) => {
    return (
        <RegisterWrapper>
            <h1>방 등록</h1>
            <RegisterForm isSaveData={isSaveData} />
        </RegisterWrapper>
    )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
    const isSaveData = await store.dispatch(getSaveData());
    return {
        props: {
            isSaveData: Object.keys(isSaveData.payload).length === 0 ? false : true,
        }
    }
});

export default RoomRegisterPage;