import React, { Suspense } from 'react';
import "./BooksComponents.css"

import {fetchOneBook} from "../../api/fetchingApi";
import BooksStore from "../../store/BooksStore";
import {TakeDataBookComponent} from "./TakeDataBookComponent";
import SmallLoader from '../loaders/SmallLoader';
import {LazyLoadImage} from "react-lazy-load-image-component";


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
        <div className="upper_container_books" data-testid="book-item">
            <div className="container_books" onClick={()=> {
                getBookData(book.id,navigate,booksStore)
            }}>
                <Suspense fallback={<SmallLoader/>}>
                    <LazyLoadImage className="book_image"
                        alt={""}
                        src={TakeDataBookComponent("imageBook",book)} // use normal <img> attributes as props
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