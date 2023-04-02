import React, {useCallback, useContext} from 'react';
import "./SearchAndSort.css"
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import {fetchBooksFirstTime} from "../../api/fetchingApi";
import SortComponent from "../sortComponent/SortComponent";
import {useNavigate} from "react-router-dom";
import {ReactComponent as SearchLoop} from '../../assets/images/magnifying-glass-solid.svg';
import {Context} from "../../ContextProvider";



const SearchAndSort = observer(() => {

    const {booksStore} = useContext(Context)
    const navigate = useNavigate()
    let bookSearchQuery = booksStore.searchQuery

    const SetDataButton = useCallback((bookSearchQuery:string) => {
        console.log({bookSearchQuery2: bookSearchQuery})
        if (bookSearchQuery) {
            navigate(`/booklist`)
            fetchBooksFirstTime(bookSearchQuery, booksStore,
                booksStore.optionRelevance,booksStore.subjectCategory).then()
        }
    },[])


    const setDataEnter = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log("SetDataEnter")
        if (event.key === "Enter" && bookSearchQuery) {
            navigate(`/booklist`)
            fetchBooksFirstTime(booksStore.searchQuery, booksStore,
                booksStore.optionRelevance,booksStore.subjectCategory).then()
        }
    },[])

    const setSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
             booksStore.setSearchQuery(e.target.value)
    }

    return (
        <div className="search_container">
            <h1 className="position_set row_h1">Search for Books</h1>
            <Row id="row_search" className="position_set">
                <input id="input_search" className="position_set input_search"
                       placeholder={`Поиск..`}
                       value={bookSearchQuery}
                       onChange={setSearchQuery}
                       type="text"
                       onKeyDown={setDataEnter}
                />
                <button id="button_search" aria-label="Поиск..." className="position_set button_search"
                        onClick={()=>SetDataButton(bookSearchQuery)}>
                    <SearchLoop id="search_loop" className="search_loop"/></button>
            </Row>
            <SortComponent/>
        </div>
    );
})

export default SearchAndSort;