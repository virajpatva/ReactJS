import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const BookList = () => {
  return (
    <section className='bookList'>
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return <article className='book'>
    <img src="https://images-eu.ssl-images-amazon.com/images/I/81N7FmJhbhL._AC_UL600_SR600,400_.jpg" alt="" />
    <h1>Life is Amazing</h1>
    <h4 style={{ color: "green" }}>Gaur Gopal Das</h4>
  </article>
}

ReactDOM.render(<BookList />, document.getElementById('root'))