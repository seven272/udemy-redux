import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addBook } from '../../redux/books/actionCreators'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (title && author) {
      const book = {
        title,
        author,
      }
      dispatch(addBook(book))
      setTitle('')
      setAuthor('')
    }
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
      </form>
    </div>
  )
}

export default BookForm
