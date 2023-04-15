import {createSlice} from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name:'global',
    initialState:{
        isOpen:true
    },
    reducers:{
        isToggle:(state) => {state.isOpen = !state.isOpen},
        closeSidebar:(state) => {state.isOpen = false}
    }
});

export const {isToggle,closeSidebar} = globalSlice.actions;
export default globalSlice.reducer;