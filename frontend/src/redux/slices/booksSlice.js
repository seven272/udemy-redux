import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from '../../utils/createBookWithId'
import { setError } from './errorSlice'

const initialState = {
  books: [],
  errorMsg: '',
  isLoadingApi: false,
}
export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      throw error
    }
  }
)
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    toggleBook: (state, action) => {
      state.books = state.books.map((book) => {
        return book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      })
    },
    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((elem) => {
          return elem.id !== action.payload
        }),
      }
    },
  },
  extraReducers: {
    [fetchBook.pending]: (state) => {
      state.isLoadingApi = true
    },
    [fetchBook.fulfilled]: (state, action) => {
      state.isLoadingApi = false
      if (action.payload.title && action.payload.author) {
        const newBook = createBookWithId(action.payload, 'API')
        state.books.push(newBook)
      }
    },
    [fetchBook.rejected]: (state) => {
      state.isLoadingApi = false
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(fetchBook.fulfilled, (state, action) => {
  //     if (action.payload.title && action.payload.author) {
  //       const newBook = createBookWithId(action.payload, 'API')
  //       state.books.push(newBook)
  //     }
  //   })
  // },
})

export const { deleteBook, toggleBook, addBook } = booksSlice.actions
export const  selectBooks = (state) => {
  return state.books.books
}
export const  selectIsLoadingByApi = (state) => {
  return state.books.isLoadingApi
}
export default booksSlice.reducer
