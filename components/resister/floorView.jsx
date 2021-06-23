import React from 'react';
import { FloorViewCheckbox } from './styles';

const FloorViewRadioButton = ({ onChangeCheckedFloorType, floorCheckedRadio, onChangeCheckedViewType, viewCheckedRadio }) => {
    return (
        <>
            <li>
                <h2>층수 (택1)</h2>
                <FloorViewCheckbox>
                    <div>
                        <input type="radio" id="floor" name="floor-type" value="FLOOR" onChange={onChangeCheckedFloorType} checked={floorCheckedRadio === 'FLOOR'} />
                        <label htmlFor="floor">1층 ~ 80층</label>
                    </div>
                    <div>
                        <input type="radio" id="rooptop" name="floor-type" value="ROOPTOP" onChange={onChangeCheckedFloorType} checked={floorCheckedRadio === 'ROOPTOP'} />
                        <label htmlFor="rooptop">옥탑</label>
                    </div>
                    <div>
                        <input type="radio" id="semi-basement" name="floor-type" value="SEMI-BASEMENT" onChange={onChangeCheckedFloorType} checked={floorCheckedRadio === 'SEMI-BASEMENT'} />
                        <label htmlFor="semi-basement">반지하</label>
                    </div>
                </FloorViewCheckbox>
            </li>
            <li>
                <h2>방향 (택1)</h2>
                <FloorViewCheckbox>
                    <div>
                        <input type="radio" id="east" name="view-type" value="EAST" onChange={onChangeCheckedViewType} checked={viewCheckedRadio === 'EAST'} />
                        <label htmlFor="east">동쪽</label>
                    </div>
                    <div>
                        <input type="radio" id="west" name="view-type" value="WEST" onChange={onChangeCheckedViewType} checked={viewCheckedRadio === 'WEST'} />
                        <label htmlFor="west">서쪽</label>
                    </div>
                    <div>
                        <input type="radio" id="south" name="view-type" value="SOUTH" onChange={onChangeCheckedViewType} checked={viewCheckedRadio === 'SOUTH'} />
                        <label htmlFor="south">남쪽</label>
                    </div>
                    <div>
                        <input type="radio" id="north" name="view-type" value="NORTH" onChange={onChangeCheckedViewType} checked={viewCheckedRadio === 'NORTH'} />
                        <label htmlFor="north">북쪽</label>
                    </div>
                    <div>
                        <input type="radio" id="south-east" name="view-type" value="SOUTH-EAST" onChange={onChangeCheckedViewType} checked={viewCheckedRadio === 'SOUTH-EAST'} />
                        <label htmlFor="south-east">남동쪽</label>
                    </div>
                    <div>
                        <input type="radio" id="south-west" name="view-type" value="SOUTH-WEST" onChange={onChangeCheckedViewType} checked={viewCheckedRadio === 'SOUTH-WEST'} />
                        <label htmlFor="south-west">남서쪽</label>
                    </div>
                    <div>
                        <input type="radio" id="north-east" name="view-type" value="NORTH-EAST" onChange={onChangeCheckedViewType} checked={viewCheckedRadio === 'NORTH-EAST'} />
                        <label htmlFor="north-east">북동쪽</label>
                    </div>
                    <div>
                        <input type="radio" id="north-west" name="view-type" value="NORTH-WEST" onChange={onChangeCheckedViewType} checked={viewCheckedRadio === 'NORTH-WEST'} />
                        <label htmlFor="north-west">북서쪽</label>
                    </div>
                </FloorViewCheckbox>
            </li>
        </>
    )
}

export default FloorViewRadioButton;