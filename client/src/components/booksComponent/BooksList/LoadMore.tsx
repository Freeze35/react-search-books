import React from 'react';
import {Row} from "react-bootstrap";
import BooksStore from "../../../store/BooksStore";
import {fetchAddingBooks} from "../../../api/fetchingApi";
import {CenterView} from "../../view/CenterView";
import Loader from "../../loader/Loader";

interface LoadMoreInterface{
    checkTotalItems:boolean
    booksStore:BooksStore
    hidden:boolean
    className?:string
}

const LoadMore:React.FC<LoadMoreInterface> = ({checkTotalItems,booksStore,hidden,className}) => {

    const loadMoreBooks = () => {
        fetchAddingBooks(booksStore.searchQuery, booksStore,
            booksStore.optionRelevance,booksStore.subjectCategory,"30",booksStore.startIndexFetchApi)
            .then(()=> {
                    CenterView()
                    hidden = false
                }
            )
        //console.log(booksStore)

    }

    return (
        <div>
            {checkTotalItems ?
                <Row  className={`load_more ${className}`} onClick={()=>loadMoreBooks()}>
                    {booksStore.isLoading
                        ? <Loader visible={true}/>
                        : ""}
                    <div hidden={hidden} className="load_more_box" >Load more books</div>
                </Row>
                : ""
            }
        </div>
    );
};

export default LoadMore;