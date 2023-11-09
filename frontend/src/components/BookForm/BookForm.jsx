import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { addBook } from '../../redux/books/actionCreators'
import booksData from '../../assets/books.json'
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
        id: uuidv4()
      }
      dispatch(addBook(book))
      setTitle('')
      setAuthor('')
    }
  }

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]

    const randomBookWithId = {
      ...randomBook,
      id: uuidv4()
    }

    dispatch(addBook(randomBookWithId))
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
        <button type="buttom" onClick={handleAddRandomBook}>ADD RENDOM</button>
      </form>
    </div>
  )
}

export default BookForm
