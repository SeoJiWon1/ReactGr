// store.js에서 state값을 수정할 때 사용

import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice'




let cart = createSlice({
    name : 'cart',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
    reducers: {
        increase(state, action){
            state[action.payload].count += 1
            // state에 action으로 둘 째 파라미터 작명 가능 action.payload로 많이 작명 
        }
    }
// reducers에 state 변경 함수 정의
})
export let { increase } = cart.actions
// 변경 함수 export 


export default configureStore({
    reducer:{
        user : user.reducer,
        cart : cart.reducer
    }
})
