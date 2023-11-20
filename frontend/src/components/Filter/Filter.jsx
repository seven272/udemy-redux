import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  setTitleFilter,
  selectTitleFilter,
  resetFiltres,
  setAuthorFilter,
  selectAuthorFilter,
  setOnlyFavoriteBooks,
  selectOnlyFavoriteBooks,
} from '../../redux/slices/filterSlice'
import './Filter.css'
const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteBooks = useSelector(selectOnlyFavoriteBooks)

  const handleTitleFilterChange = (evt) => {
    dispatch(setTitleFilter(evt.target.value))
  }

  const handleAuthorFilterChange = (evt) => {
    dispatch(setAuthorFilter(evt.target.value))
  }

  const handleResetFiltres = () => {
    dispatch(resetFiltres())
  }

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteBooks())
  }

  return (
    <div className="app-block book-form">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="filter by author..."
            value={authorFilter}
            onChange={handleAuthorFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="filter by title..."
            value={titleFilter}
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteBooks}
              onChange={handleOnlyFavoriteFilterChange}
            />
            Только избранные
          </label>
        </div>
        <button type="button" onClick={handleResetFiltres}>
          Cбросить
        </button>
      </div>
    </div>
  )
}

export default Filter
