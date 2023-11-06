import React, { useState } from 'react'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (title && author) {
console.log(title, author)
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
