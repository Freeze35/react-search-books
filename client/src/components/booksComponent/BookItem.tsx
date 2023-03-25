import React from 'react';
import "./BooksComponents.css"
import {Card, Col} from "react-bootstrap";
import {fetchOneBook} from "../../api/fetchingApi";
import BooksStore from "../../store/BooksStore";
import {TakeDataBookComponent} from "./TakeDataBookComponent";



interface BookInterface {
    book: any
    navigate:any
    booksStore:BooksStore
}

const BookItem:React.FC<BookInterface> = ({book,navigate,booksStore}) => {

    //fetch one book by id and move to BookPage
    const getBookData=(id:string,navigate:any) =>{
        fetchOneBook(id)
            .then(res => {
                    booksStore.setOneBookData(res)
                    navigate(`/page/${book.id}`)
                }
            )
    }

    return (
        <Col md={3} className="d-flex" onClick={()=> {
            getBookData(book.id,navigate)
        }}>
            <Card className="container_books">
                <img className="book_image" src={TakeDataBookComponent("imageBook",book)} alt={""}></img>
                <h2 className="text_decoration category">{TakeDataBookComponent("category",book)}</h2>
                <h1 className="text_decoration name_book"> {TakeDataBookComponent("title",book)}</h1>
                <p className="text_decoration">{TakeDataBookComponent("authors",book)}</p>
            </Card>

        </Col>

    );
};

export default BookItem;