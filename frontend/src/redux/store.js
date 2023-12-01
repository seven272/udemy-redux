import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './slices/errorSlice.js'
import filterReducer from './slices/filterSlice.js'
import booksReducer from './slices/booksSlice.js'

const store = configureStore({
    reducer: {
        error: errorReducer,
        filter: filterReducer,
        books: booksReducer
    },
})

export default store