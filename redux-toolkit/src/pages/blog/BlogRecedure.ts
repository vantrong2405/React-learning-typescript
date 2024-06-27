import { createAction, createReducer, current } from '@reduxjs/toolkit'
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

export const addPost = createAction<Post>('blog/addPost')
export const deletePost = createAction<string>('blog/deletePost')
export const startEditing = createAction<string>('blog/startEditing')
export const finishEditing = createAction<Post>('blog/finishEditing')
export const cancelEditing = createAction('blog/cancelEditing')

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addPost, (state, action) => {
      const { payload } = action
      state.postList.push(payload)
    })
    .addCase(deletePost, (state, action) => {
      const postId = action.payload
      state.postList.some((post, index) => {
        if (post.id === postId) {
          state.postList.splice(index, 1)
          return true
        }
        return false
      })

    })
    .addCase(startEditing, (state, action) => {
      const postId = action.payload
      state.postList.some((post) => {
        if (post.id === postId) {
          state.editing = post
          return true
        }
        return false
      })
    })
    .addCase(finishEditing, (state, action) => {
      const { payload } = action
      console.log(payload);

      state.postList.some((post, index) => {
        if (payload.id === post.id) {
          state.postList[index] = payload
          state.editing = null
          return true
        }
        return false
      })
      console.log(">>>>>", current(state.postList));
    })
    .addCase(cancelEditing, (state, action) => {
      state.editing = null
    })
})

export default blogReducer
