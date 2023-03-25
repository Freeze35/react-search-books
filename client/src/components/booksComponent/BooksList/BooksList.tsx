import React, {useContext} from 'react';
import {Col, ContainerProps, Row} from "react-bootstrap";
import "../BooksComponents.css"
import BookItem from "../BookItem";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import Loader from "../../loader/Loader";
import LoadMore from "./LoadMore";

const BooksList: React.FC<ContainerProps> = observer(() => {
    const {booksStore} = useContext(Context)

    let checkTotalItems = () => {
        return booksStore?.books.totalItems !== undefined
    }

    return (<>
        <Col className="booksList_background">
            <Row>
                {checkTotalItems()
                    ? <div className="founded" id="Found">Found {booksStore.books.totalItems} results</div>
                    : ""
                }
            </Row>
            <Row className="books_list" xs="auto">
                {booksStore.books.items?.map((book: any) => {
                    return (
                        <BookItem book={book} key={book.id}/>)
                })}
            </Row>
        </Col>
            {booksStore.isLoading && !checkTotalItems()
                ? <Loader visible={true}/>
                : ""}
            {booksStore.isLoading
                ?<LoadMore className="booksList_background" hidden={true} checkTotalItems={checkTotalItems()} booksStore={booksStore}/>
                :<LoadMore className="booksList_background" hidden={false} checkTotalItems={checkTotalItems()} booksStore={booksStore}/>}
        </>

    );
});

export default BooksList;