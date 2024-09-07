import { createSlice } from "@reduxjs/toolkit";


const appSlice= createSlice({
    name:'app',
    initialState:{
        isMenuOpen:true,
        videoList:[],
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        addVideoList:(state,action)=>{
            state.videoList=action.payload;
        },
    }
})

export const {toggleMenu, addVideoList} =appSlice.actions;

export default appSlice.reducer;