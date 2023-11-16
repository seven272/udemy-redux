import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import { selectTitleFilter, selectAuthorFilter } from '../../redux/slices/filterSlice'

import {
  deleteBook,
  toggleFavorite,
} from '../../redux/books/actionCreators'
import './BookList.css'

const BookList = () => {
  const dispatch = useDispatch()
  const books = useSelector((state) => {
    return state.books
  })

  

  const titleFilter = useSelector(selectTitleFilter)

  const authorFilter = useSelector(selectAuthorFilter)

  const handleRemoveBook = (id) => {
    dispatch(deleteBook(id))
  }

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())

      const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())
      // console.log(matchesTitle)
      // const result = []
      // if (matchesTitle === false && matchesAuthor === false) {
      //   result = [...matchesTitle, ...matchesAuthor]
      // } else if (matchesTitle === false &&  matchesAuthor === true) {
      //   result = [...matchesTitle]
      // } else if (matchesTitle === true &&  matchesAuthor === false) {
      //   result = [...matchesAuthor]
      // } 
      // const result = [...matchesTitle, ...matchesAuthor]
      // return result
      // return matchesAuthor
    return matchesTitle && matchesAuthor
  })
  return (
    <div className="app-block book-list">
      <h2>Список книг</h2>
      {books.length === 0 ? (
        <h3>Саисок книг пуcт</h3>
      ) : (
        <ul>
          {filteredBooks.map((book, inx) => {
            return (
              <li key={book.id}>
                <div className="book-info">
                  {inx + 1}. {book.title} by{' '}
                  <strong>{book.author}</strong>
                </div>
                <div className="book-actions">
                  <span onClick={() => handleToggleFavorite(book.id)}>
                    {book.isFavorite ? (
                      <BsBookmarkStarFill className="star-icon"></BsBookmarkStarFill>
                    ) : (
                      <BsBookmarkStar className="star-icon"></BsBookmarkStar>
                    )}
                  </span>
                  <button onClick={() => handleRemoveBook(book.id)}>
                    Delete
                  </button>
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
