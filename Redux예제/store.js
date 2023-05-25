import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
    name: 'user', 
    //name : state 이름 
    initialState : 'kim'  
    // initialState : 값
                    
})

let cart = createSlice({
    name : 'cart',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ] 
})


export default configureStore({
    reducer:{
        user : user.reducer,
        cart : cart.reducer
    }
})
