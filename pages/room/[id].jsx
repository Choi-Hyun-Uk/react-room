import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import RoomDetail from '../../components/detail';
import { DetailPageWrapper } from '../../styles';

const RoomDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <DetailPageWrapper>
            <RoomDetail id={id} />
            <div className="room-register-btn">
                <Link href="/room/register"><a>방 등록하기</a></Link>
            </div>
        </DetailPageWrapper>
    )
}

export default RoomDetailPage;