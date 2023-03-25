import React from 'react';
import "./BooksComponents.css"
import {Card, Col} from "react-bootstrap";

interface BookInterface {
    book: any
}

const BookItem = ({book}: BookInterface) => {

    //switch on our request (imageBook,category,NameOfBook,Author)
    //checking exists category's or not
    const takeDataBook = (typeValue: string) => {

        switch (typeValue) {

            case "imageBook":
                return book.volumeInfo?.imageLinks?.thumbnail !== undefined
                    ? book.volumeInfo.imageLinks.thumbnail
                    : book.volumeInfo?.imageLinks?.smallThumbnail !== undefined
                        ? book.volumeInfo.imageLinks.smallThumbnail
                        : ""

            case "category":
                //check if our category exists and then remove another category separated(split) by regexp "., -"
                return book.volumeInfo?.categories !== undefined
                    ? book.volumeInfo.categories[0].split(/[.,\/ -]/)[0]
                    : ""

            case "title":
                return book.volumeInfo?.title !== undefined
                    ? book.volumeInfo.title
                    : ""

            case "authors":
                return book.volumeInfo?.authors !== undefined
                    ? book.volumeInfo.authors.map((author:string)=>author).join(", ")
                    : ""
        }
    }

    return (
        <Col md={3} className="d-flex">
            <Card className="container_books" onClick={()=>console.log(`ds`)}>
                <img className="book_image" src={takeDataBook("imageBook")} alt={""}></img>
                <h2 className="text_decoration category">{takeDataBook("category")}</h2>
                <h1 className="text_decoration name_book"> {takeDataBook("title")}</h1>
                <p className="text_decoration">{takeDataBook("authors")}</p>
            </Card>

        </Col>

    );
};

export default BookItem;