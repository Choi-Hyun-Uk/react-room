import React from 'react';
import RegisterForm from '../../components/register/registerForm';
import { RegisterWrapper } from '../../styles';
import wrapper from '../../store/configureStore';
import { getSaveData, dataGetItem } from '../../actions/register';

const RoomRegisterPage = ({ isSaveData, isUpdate }) => {
    return (
        <RegisterWrapper>
            <h1>방 등록</h1>
            <RegisterForm isSaveData={isSaveData} isUpdate={isUpdate} />
        </RegisterWrapper>
    )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ ...etc }) => {
    if (etc.query) {
        const { id } = etc.query;
        await store.dispatch(dataGetItem(id));
    }
    const isSaveData = await store.dispatch(getSaveData());
    return {
        props: {
            isSaveData: Object.keys(isSaveData.payload).length === 0 ? false : true,
            isUpdate: etc.query.id ? true : false,
        }
    }
});

export default RoomRegisterPage;