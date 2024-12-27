import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    setRef: false,
    setRef2: false,
    setRef3: false,
    setBoxRef: false,
    val: false
}

export const landingPageSlice = createSlice({ 
    name: 'home',  
    initialState, 
    reducers: {
        setShowCards: (state,action) => { 
             state.setRef = action.payload.setRef; 
             state.setRef2 = action.payload.setRef2;
             state.setRef3 = action.payload.setRef3;  
             state.setBoxRef = action.payload.setBoxRef;
            },
            
        setVal: (state)=>{ 
            state.val = !state.val 
        },

        clickWorkHandler: (state)=>{
                state.setBoxRef.current.style.display = "block";
        }, 
    }
}) 

export const { setShowCards,clickWorkHandler,setVal} = landingPageSlice.actions 

export default landingPageSlice.reducer 