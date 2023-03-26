import React from 'react';
import {Row} from "react-bootstrap";
import BooksStore from "../../../store/BooksStore";
import {fetchAddingBooks} from "../../../api/fetchingApi";
import {CenterView} from "../../view/CenterView";
import Loader from "../../loader/Loader";

interface LoadMoreInterface {
    checkTotalItems: boolean
    booksStore: BooksStore
    hidden: boolean
    className?: string
}

const LoadMore: React.FC<LoadMoreInterface> = ({checkTotalItems, booksStore, hidden, className}) => {

    //axios request
    const chunkRequest15 = (): Promise<any> => {
        return fetchAddingBooks(booksStore.searchQuery, booksStore,
            booksStore.optionRelevance, booksStore.subjectCategory, "15", booksStore.startIndexFetchApi)
    }
    //Load by 15 books request 2 time
    //it's this will speed up the rendering of elements but Google API limit 1000 per day
    const loadMoreBooks = () => {
        chunkRequest15().then(() => {
            chunkRequest15().then(() => {
                CenterView()
                hidden = false
            })
        })

    }

    return (
        <div>
            {checkTotalItems ?
                <Row className={`load_more ${className}`} onClick={() => loadMoreBooks()}>
                    {booksStore.isLoading
                        ? <Loader visible={true}/>
                        : ""}
                    <div hidden={hidden} className="load_more_box">Load more books</div>
                </Row>
                : ""
            }
        </div>
    );
};

export default LoadMore;