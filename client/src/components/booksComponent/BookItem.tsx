import React, { Suspense } from 'react';
import "./BooksComponents.css"
import {Card} from "react-bootstrap";
import {fetchOneBook} from "../../api/fetchingApi";
import BooksStore from "../../store/BooksStore";
import {TakeDataBookComponent} from "./TakeDataBookComponent";
import Loader from "../loader/Loader";

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
        <div style={{display:"flex",flexWrap:"wrap"}} data-testid="book-item" onClick={()=> {
            getBookData(book.id,navigate,booksStore)
        }}>
            <Card className="container_books">
                <Suspense fallback={<Loader visible={true}/>}>
                <img className="book_image"
                     src={TakeDataBookComponent("imageBook",book)}
                     alt={""}
                     loading="lazy"
                />
                </Suspense>
                <h2 className="text_decoration category">{TakeDataBookComponent("category",book)}</h2>
                <h1 className="text_decoration name_book"> {TakeDataBookComponent("title",book)}</h1>
                <p className="text_decoration">{TakeDataBookComponent("authors",book)}</p>
            </Card>

        </div>

    );
};

export default BookItem;