import  {configureStore} from '@reduxjs/toolkit'
import { type } from '@testing-library/user-event/dist/type'
import blogReducer from './pages/blog/blog.reducer'
export const store = configureStore({
  reducer : { blog : blogReducer}
})  

//Lấy RootState và AppDispatch từ store của chúng ta
// Đây là kiểu dữ liệu biểu diễn cho toàn bộ trạng thái của ứng dụng, được trả về từ hàm getState() của store.
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch