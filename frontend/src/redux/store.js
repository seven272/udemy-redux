import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/reducer'

const store = configureStore({
    reducer: {
        books: booksReducer
    },
})
console.log(store)
export default store