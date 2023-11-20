import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteBooks,
} from '../../redux/slices/filterSlice'

// import {
//   deleteBook,
//   toggleFavorite,
// } from '../../redux/books/actionCreators'
import {
  deleteBook,
  toggleBook,
} from '../../redux/slices/booksSlice'

import './BookList.css'

const BookList = () => {
  const dispatch = useDispatch()
  const books = useSelector((state) => {
    return state.books.books
  })

  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteBooks)

  const handleRemoveBook = (id) => {
    dispatch(deleteBook(id))
  }

  const handleToggleFavorite = (id) => {
    console.log(id)
    dispatch(toggleBook(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())

    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())

    const matchesFavorite = onlyFavoriteFilter
      ? book.isFavorite
      : true

    return matchesTitle && matchesAuthor && matchesFavorite
  })

  const highLightMatch = (text, filter) => {
    if (!filter) {
      return text
    }
    const regex = new RegExp(`(${filter})`, 'gi')

    return text.split(regex).map((substring, inx) => {
      if(substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={inx} className='highlight'>{substring}</span>
        )
      }
      return substring
    })
  }
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
                  {inx + 1}. {highLightMatch(book.title, titleFilter)} by{' '}
                  <strong>{highLightMatch(book.author, authorFilter)}</strong>
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
