import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src="https://m.media-amazon.com/images/I/71PjIDe6FLL._SY466_.jpg" alt="Theo of Golden: A Novel"/>;
const Title = () => {
  return <h2>Theo of Golden: A Novel </h2>;
};
const Author = () => <h4 style={{ color: '#16324c', fontSize: '1rem', marginTop: '0.5rem' }}>Allen Levi</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);