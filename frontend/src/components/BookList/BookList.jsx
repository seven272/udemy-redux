import React from 'react'
import { useSelector } from 'react-redux'

import './BookList.css'

const BookList = () => {
  const books = useSelector((state) => {
    return state.books
  })
  return (
    <div className="app-block book-list">
      <h2>Список книг</h2>
      {books.length === 0 ? (
        <h3>Саисок книг пуcт</h3>
      ) : (
        <ul>
          {books.map((book, inx) => {
            return (
              <li key={inx}>
                <div className="book-info">
                  {inx + 1}. {book.title} by <strong>{book.author}</strong>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default BookList
