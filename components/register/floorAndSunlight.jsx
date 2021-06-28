import React from 'react';
import { FloorAndSunlightBox } from './styles';

const FloorAndSunlight = ({ onChangeFormInput, floor, sunlightDirection }) => {
    return (
        <>
            <li>
                <h2>층수 (택1)</h2>
                <FloorAndSunlightBox>
                    <div>
                        <input type="radio" id="floor" name="floor" value="FLOOR" onChange={onChangeFormInput} checked={floor === 'FLOOR'} />
                        <label htmlFor="floor">1층 ~ 80층</label>
                    </div>
                    <div>
                        <input type="radio" id="rooptop" name="floor" value="ROOPTOP" onChange={onChangeFormInput} checked={floor === 'ROOPTOP'} />
                        <label htmlFor="rooptop">옥탑</label>
                    </div>
                    <div>
                        <input type="radio" id="semi-basement" name="floor" value="SEMI-BASEMENT" onChange={onChangeFormInput} checked={floor === 'SEMI-BASEMENT'} />
                        <label htmlFor="semi-basement">반지하</label>
                    </div>
                </FloorAndSunlightBox>
            </li>
            <li>
                <h2>방향 (택1)</h2>
                <FloorAndSunlightBox>
                    <div>
                        <input type="radio" id="east" name="sunlightDirection" value="EAST" onChange={onChangeFormInput} checked={sunlightDirection === 'EAST'} />
                        <label htmlFor="east">동쪽</label>
                    </div>
                    <div>
                        <input type="radio" id="west" name="sunlightDirection" value="WEST" onChange={onChangeFormInput} checked={sunlightDirection === 'WEST'} />
                        <label htmlFor="west">서쪽</label>
                    </div>
                    <div>
                        <input type="radio" id="south" name="sunlightDirection" value="SOUTH" onChange={onChangeFormInput} checked={sunlightDirection === 'SOUTH'} />
                        <label htmlFor="south">남쪽</label>
                    </div>
                    <div>
                        <input type="radio" id="north" name="sunlightDirection" value="NORTH" onChange={onChangeFormInput} checked={sunlightDirection === 'NORTH'} />
                        <label htmlFor="north">북쪽</label>
                    </div>
                    <div>
                        <input type="radio" id="south-east" name="sunlightDirection" value="SOUTH-EAST" onChange={onChangeFormInput} checked={sunlightDirection === 'SOUTH-EAST'} />
                        <label htmlFor="south-east">남동쪽</label>
                    </div>
                    <div>
                        <input type="radio" id="south-west" name="sunlightDirection" value="SOUTH-WEST" onChange={onChangeFormInput} checked={sunlightDirection === 'SOUTH-WEST'} />
                        <label htmlFor="south-west">남서쪽</label>
                    </div>
                    <div>
                        <input type="radio" id="north-east" name="sunlightDirection" value="NORTH-EAST" onChange={onChangeFormInput} checked={sunlightDirection === 'NORTH-EAST'} />
                        <label htmlFor="north-east">북동쪽</label>
                    </div>
                    <div>
                        <input type="radio" id="north-west" name="sunlightDirection" value="NORTH-WEST" onChange={onChangeFormInput} checked={sunlightDirection === 'NORTH-WEST'} />
                        <label htmlFor="north-west">북서쪽</label>
                    </div>
                </FloorAndSunlightBox>
            </li>
        </>
    )
}

export default FloorAndSunlight;