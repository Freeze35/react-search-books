import React from 'react';
import {Row} from "react-bootstrap";
import BooksStore from "../../../store/BooksStore";
import {fetchAddingBooks} from "../../../api/fetchingApi";
import Loader from "../../loader/Loader";

interface LoadMoreInterface {
    checkTotalItems: boolean
    booksStore: BooksStore
    hidden: boolean
    className?: string
}

const LoadMore: React.FC<LoadMoreInterface> = ({checkTotalItems, booksStore, hidden, className}) => {

    const totalItemsBook = booksStore.books.totalItems
    const startIndexFetchApi = booksStore.startIndexFetchApi
    //axios request
    const chunkRequest15 = (): Promise<any> => {
        return fetchAddingBooks(booksStore.searchQuery, booksStore,
            booksStore.optionRelevance, booksStore.subjectCategory, "15", startIndexFetchApi)
    }
    //Load by 15 books request 2 time = 30 books in full request
    //it's this will speed up the rendering of elements but Google API limit 1000 per day
    const loadMoreBooks = () => {
        chunkRequest15().then(() => {
            chunkRequest15().then(() => {
                hidden = false
            })
        })

    }
    //text number of unloaded books
    let unloaded = Number(totalItemsBook) - Number(startIndexFetchApi)

    return (
        <div>
            {checkTotalItems ?
                <Row className={`load_more_button ${className}`} onClick={() => loadMoreBooks()}>
                    {booksStore.isLoading
                        ? <Loader visible={true}/>
                        : ""}
                    <p hidden={hidden} className="load_more_text">
                        Load more books<br/>
                        {
                        unloaded>=0
                            ? `Remaining unloaded books: 
                            ${Number(totalItemsBook) - Number(startIndexFetchApi)}`
                            : `No more books`
                        }
                    </p>
                </Row>
                : ""
            }
        </div>
    );
};

export default LoadMore;