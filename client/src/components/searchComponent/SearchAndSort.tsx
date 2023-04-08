import React, {useContext} from 'react';
import "./SearchAndSort.css"
import {observer} from "mobx-react-lite";
import {fetchBooksFirstTime} from "../../api/fetchingApi";
import SortComponent from "../sortComponent/SortComponent";
import {useNavigate} from "react-router-dom";
import {ReactComponent as SearchLoop} from '../../assets/images/magnifying-glass-solid.svg';
import {Context} from "../../ContextProvider";



const SearchAndSort = observer(() => {

    const {booksStore} = useContext(Context)
    const navigate = useNavigate()
    const bookSearchQuery = booksStore.searchQuery

    const SetDataButton = (bookSearchQuery:string) => {
        if (bookSearchQuery) {
            navigate(`/booklist`)
            fetchBooksFirstTime(bookSearchQuery, booksStore,
                booksStore.optionRelevance,booksStore.subjectCategory).then()
        }
    }


    const setDataEnter =
        (event: React.KeyboardEvent<HTMLInputElement>,bookSearchQuery:string) => {
        if (event.key === "Enter" && bookSearchQuery) {
            navigate(`/booklist`)
            fetchBooksFirstTime(booksStore.searchQuery, booksStore,
                booksStore.optionRelevance,booksStore.subjectCategory).then()
        }
    }

    const setSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
             booksStore.setSearchQuery(e.target.value)
    }

    return (
        <div data-testid="search-and-sort" className="search_container">
            <h1 className="position_set row_h1">Search for Books</h1>
            <div id="row_search" className="position_set">
                <input id="input_search" className="position_set input_search"
                       placeholder={`Поиск..`}
                       value={bookSearchQuery}
                       onChange={setSearchQuery}
                       type="text"
                       onKeyDown={(event)=>setDataEnter(event,bookSearchQuery)}
                />
                <button data-testid="button-search" id="button_search" aria-label="Поиск..." className="position_set button_search"
                        onClick={()=>SetDataButton(bookSearchQuery)}>
                    <SearchLoop id="search_loop" className="search_loop"/></button>
            </div>
            <SortComponent/>
        </div>
    );
})

export default SearchAndSort;