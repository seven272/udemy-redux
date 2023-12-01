import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaSpinner } from 'react-icons/fa'

import createBookWithId from '../../utils/createBookWithId'
import { addBook, fetchBook, selectIsLoadingByApi} from '../../redux/slices/booksSlice'
import { setError } from '../../redux/slices/errorSlice'

import booksData from '../../assets/books.json'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  // const [isLoading, setIsLoading] = useState(false)
  const isLoadingApi = useSelector(selectIsLoadingByApi)
  const dispatch = useDispatch()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (title && author) {
      const book = createBookWithId({ title, author }, 'manual')
      dispatch(addBook(book))
      setTitle('')
      setAuthor('')
    } else {
      dispatch(setError('Следует указать автора и название'))
    }
  }

  const handleAddRandomBook = (evt) => {
    evt.preventDefault()

    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    const randomBookWithId = createBookWithId(randomBook, 'random')
    dispatch(addBook(randomBookWithId))
  }

  const handleAddRandomBookViaApi =  (evt) => {
    evt.preventDefault()
    dispatch(
      fetchBook('http://localhost:4000/random-book-delayed')
    )
  }
  return (
    <div className="app-block book-form">
      <h2>add new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(evt) => setAuthor(evt.target.value)}
          />
        </div>
        <button type="submit">ADD BOOK</button>
        <button type="buttom" onClick={handleAddRandomBook}>
          ADD RENDOM
        </button>
        <button
          type="buttom"
          onClick={handleAddRandomBookViaApi}
          disabled={isLoadingApi}
        >
          {isLoadingApi ? (
            <>
              <span>loading book...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            'ADD RENDOM by API'
          )}
        </button>
      </form>
    </div>
  )
}

export default BookForm
