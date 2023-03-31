import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
const books = [
  {
    id: '1',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/81N7FmJhbhL._AC_UL600_SR600,400_.jpg',
    title: 'Life is Amazing',
    author: 'Gopal Das'
  }, {
    id: '2',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/81N7FmJhbhL._AC_UL600_SR600,400_.jpg',
    title: 'Life is Amazing 2 ',
    author: 'Gopal Das'
  }
]
const BookList = () => {
  return (
    <section className='bookList'>
      {
        books.map((book) => {
          return (
            <Book key={book.id} {...book} />
          )
        })
      }
    </section>
  )
}

const Book = ({ img, title, author }) => {

  return <article className='book'>
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4 style={{ color: "green" }}>{author}</h4>
    
  </article>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)