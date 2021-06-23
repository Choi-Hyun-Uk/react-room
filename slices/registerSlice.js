import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    registerIsSave: false,
    registerState : {
        address: '',
        detailAddress: '',
        realEstate: null,
        realEstatePriceType: null,
        depositAmount: null,
        rentAmount: null,
        maintenanceFee: null,
        maintenanceFeeItems: [],
        floor: null,
        sunlightDirection: null,
        leasableArea: null,
        pet: false,
    }
}

const registerSlice = createSlice({
    name: 'room',
    initialState,
    reducer: {

    }
});

export default registerSlice;