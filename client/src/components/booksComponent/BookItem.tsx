import React, { Suspense } from 'react';
import "./BooksComponents.css"

import {fetchOneBook} from "../../api/fetchingApi";
import BooksStore from "../../store/BooksStore";
import {TakeDataBookComponent} from "./TakeDataBookComponent";
import SmallLoader from '../loaders/SmallLoader';

interface BookInterface {
    book: any
    navigate:any
    booksStore:BooksStore
}

const BookItem:React.FC<BookInterface> = ({book,navigate,booksStore}) => {

    //fetch one book by id and move to BookPage
    const getBookData=(id:string,navigate:any,booksStore:any) =>{
        fetchOneBook(id)
            .then(res => {
                    booksStore.setOneBookData(res)
                    navigate(`/page/${book.id}`)
                }
            )
    }



    return (
        <div className="upper_container_books" data-testid="book-item" onClick={()=> {
            getBookData(book.id,navigate,booksStore)
        }}>
            <div className="container_books">
                <Suspense fallback={<SmallLoader/>}>
                <img className="book_image"
                     src={TakeDataBookComponent("imageBook",book)}
                     alt={""}
                     loading="lazy"
                />
                </Suspense>
                <h2 className="text_decoration category">{TakeDataBookComponent("category",book)}</h2>
                <h1 className="text_decoration name_book"> {TakeDataBookComponent("title",book)}</h1>
                <p className="text_decoration">{TakeDataBookComponent("authors",book)}</p>
            </div>

        </div>

    );
};

export default BookItem;