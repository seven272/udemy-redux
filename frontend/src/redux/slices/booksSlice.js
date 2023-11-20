import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books: []
}
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
      state.books = state.books.filter((elem) => {
        return elem.id !== action.payload
      })
    },
  },
})

export const {
  deleteBook,
  toggleBook,
  addBook
} = booksSlice.actions

export default booksSlice.reducer