import React, {useContext} from 'react';
import {ContainerProps} from "react-bootstrap";
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

    const checkTotalItems = () => {
        return totalItems !== undefined
    }

    return (
        <div data-testid="books-list">
            <div className="booksList_background">
                <div>
                    {checkTotalItems()
                        ? <div className="founded" id="Found">Found {totalItems} results</div>
                        : ""
                    }
                </div>
                <div className="books_list">
                    {booksStore.books.items?.map((book: any) => {
                        return (
                            <BookItem book={book} key={book.id + book.etag}
                                      navigate={navigate} booksStore={booksStore}
                            />)
                    })}
                </div>
            </div>
            {booksStore.isLoading && !checkTotalItems()
                ? <Loader visible={true}/>
                : ""}
            {booksStore.isLoading
                ? <LoadMore className="booksList_background" hidden={true}
                            checkTotalItems={checkTotalItems()} booksStore={booksStore}/>
                : <LoadMore className="booksList_background" hidden={false}
                            checkTotalItems={checkTotalItems()} booksStore={booksStore}/>}
        </div>

    );
});

export default BooksList;