import React from 'react';

import RoomDetail from '../../components/detail';
import { dataGetItem } from '../../actions/register';
import wrapper from '../../store/configureStore';

const RoomDetailPage = () => {
    return (
        <RoomDetail />
    )
}

export const getServerSideProps = wrapper.getServerSideProps((context) =>  async ({ ...etc }) => {
    const { id } = etc.query;
    await context.dispatch(dataGetItem(id));
    return {
        props: {}
    }
});

export default RoomDetailPage;