import React, {useContext} from 'react';
import {Col, ContainerProps, Row} from "react-bootstrap";
import "../BooksComponents.css"
import BookItem from "../BookItem";
import {observer} from "mobx-react-lite";
import Loader from "../../loader/Loader";
import LoadMore from "./LoadMore";
import {useNavigate} from "react-router-dom";
import {Context} from "../../../ContextProvider";

const BooksList: React.FC<ContainerProps> = observer(() => {
    const {booksStore} = useContext(Context)
    const navigate = useNavigate()
    const totalItems = booksStore.books.totalItems

    let checkTotalItems = () => {
        return totalItems !== undefined
    }

    return (<>
        <Col className="booksList_background">
            <Row>
                {checkTotalItems()
                    ? <div className="founded" id="Found">Found {totalItems} results</div>
                    : ""
                }
            </Row>
            <Row className="books_list" xs="auto">
                {booksStore.books.items?.map((book: any) => {
                    return (
                        <BookItem book={book} key={book.id + book.etag}
                                  navigate={navigate} booksStore={booksStore}
                        />)
                })}
            </Row>
        </Col>
            {booksStore.isLoading && !checkTotalItems()
                ? <Loader visible={true}/>
                : ""}
            {booksStore.isLoading
                ?<LoadMore className="booksList_background" hidden={true}
                           checkTotalItems={checkTotalItems()} booksStore={booksStore}/>
                :<LoadMore className="booksList_background" hidden={false}
                           checkTotalItems={checkTotalItems()} booksStore={booksStore}/>}
        </>

    );
});

export default BooksList;