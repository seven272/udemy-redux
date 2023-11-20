import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // можно возвращать новое состояние, а можно мутировать благодаря встроенной библиотеке. классический подход это формирование нового состояния через return. но дальше будем мутирвоат
      state.title = action.payload
      // return {...state, title: action.payload}
    },
    setAuthorFilter: (state, action) => {
      return { ...state, author: action.payload }
    },
    setOnlyFavoriteBooks: (state) => {
      return { ...state, onlyFavorite: !state.onlyFavorite }
    },
    resetFiltres: () => {
      return { ...initialState }
    },
  },
})

export const {
  setTitleFilter,
  resetFiltres,
  setAuthorFilter,
  setOnlyFavoriteBooks,
} = filterSlice.actions
export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectOnlyFavoriteBooks = (state) =>
  state.filter.onlyFavorite
export default filterSlice.reducer
