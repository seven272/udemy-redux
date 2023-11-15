import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  setTitleFilter,
  selectTitleFilter,
  resetFiltres,
} from '../../redux/slices/filterSlice'
import './Filter.css'
const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)

  const handleTitleFilterChange = (evt) => {
    dispatch(setTitleFilter(evt.target.value))
  }

  const handleResetFiltres = () => {
    dispatch(resetFiltres())
  }

  return (
    <div className="app-block book-form">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="filter by title..."
            value={titleFilter}
            onChange={handleTitleFilterChange}
          />
        </div>
        <button type='button' onClick={handleResetFiltres}>Cбросить</button>
      </div>
    </div>
  )
}

export default Filter
