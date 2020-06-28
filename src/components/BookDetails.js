import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';


export const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext)
  
  const removeBook = (id) => {
    dispatch( { 
      type: 'REMOVE_BOOK', 
      book: { id } 
      })
  }

  return ( 
    <li onClick = {() => {removeBook(book.id)}}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
   );

}
 