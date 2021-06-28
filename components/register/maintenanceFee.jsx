import React from 'react';
import { MaintenanceFee, MaintenanceFeeItems } from './styles';

const MaintenanceFeeBox = ({ realEstatePriceType, maintenanceFee, maintenanceFeeItems, onChangeFormInput, onChangeMaintenanceFeeItems }) => {
    return (
        <>
        {
            realEstatePriceType !== 'SELLING' && (
                <>
                    <MaintenanceFee>
                        <h2>관리비</h2>
                        <div>
                            <p>관리비용</p>
                            <input type="text" name="maintenanceFee" value={maintenanceFee} onChange={onChangeFormInput} />
                        </div>
                    </MaintenanceFee>
                    <MaintenanceFeeItems>
                        <h2>관리비 항목(중복 선택)</h2>
                        <div className="checkbox">
                            <div>
                                <input type="checkbox" id="electric" name="maintenanceFeeItems" checked={maintenanceFeeItems?.includes("ELECTRIC")} value="ELECTRIC" onChange={onChangeMaintenanceFeeItems} />
                                <label htmlFor="electric">전기</label>
                            </div>
                            <div>
                                <input type="checkbox" id="gas" name="maintenanceFeeItems" checked={maintenanceFeeItems?.includes("GAS")} value="GAS" onChange={onChangeMaintenanceFeeItems} />
                                <label htmlFor="gas">가스</label>
                            </div>
                            <div>
                                <input type="checkbox" id="waterworks" name="maintenanceFeeItems" checked={maintenanceFeeItems?.includes("WATERWORKS")} value="WATERWORKS" onChange={onChangeMaintenanceFeeItems} />
                                <label htmlFor="waterworks">수도</label>
                            </div>
                            <div>
                                <input type="checkbox" id="internet" name="maintenanceFeeItems" checked={maintenanceFeeItems?.includes("INTERNET")} value="INTERNET" onChange={onChangeMaintenanceFeeItems} />
                                <label htmlFor="internet">인터넷</label>
                            </div>
                            <div>
                                <input type="checkbox" id="tv" name="maintenanceFeeItems" checked={maintenanceFeeItems?.includes("TV")} value="TV" onChange={onChangeMaintenanceFeeItems} />
                                <label htmlFor="tv">TV</label>
                            </div>
                        </div>
                    </MaintenanceFeeItems>
                </>
            )
        }
        </>
    )
}

export default MaintenanceFeeBox;