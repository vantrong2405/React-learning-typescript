import { createAction, createReducer, current, createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import { initialPostList } from '../../constant/blog'
import { Post } from '../../@types/blog'
import PostList from './components/PostList'

interface BlogState {
  postList: Post[]
  editing: Post | null
}

const initialState: BlogState = {
  postList: initialPostList,
  editing: null
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    deletePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList.splice(index, 1)
          return true
        }
        return false
      })
    },
    startEditing: (state, action: PayloadAction<string>) => {
      const postId = action.payload
      state.postList.some((post) => {
        if (post.id === postId) {
          state.editing = post
          return true
        }
        return false
      })
    },
    finishEditing: (state, action: PayloadAction<Post>) => {
      const { payload } = action
      console.log(payload)

      state.postList.some((post, index) => {
        if (payload.id === post.id) {
          state.postList[index] = payload
          state.editing = null
          return true
        }
        return false
      })
    },
    cancelEditing: (state) => {
      state.editing = null
    },
    addPost: {
      reducer: (state, action: PayloadAction<Post>) => {
        const { payload } = action
        state.postList.push(payload)
      },
      prepare: (post: Omit<Post, 'id'>) => {
        console.log('>>>>>', post);

        return {
          payload: {
            ...post,
            id: nanoid()
          }
        }
      }
    }
  },
  extraReducers(builder) {
    builder
      .addMatcher((action) => action.type.includes('cancel'), (state, action) => {
        console.log("matchar đã chạy");

        console.log(current(state));
      })
      .addDefaultCase((state, action) => {
        console.log(`action type : ${action.type}`, current(state));
      })
  }
})

export const { addPost, cancelEditing, finishEditing, startEditing, deletePost } = blogSlice.actions
export default blogSlice.reducer
