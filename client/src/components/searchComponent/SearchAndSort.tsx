import React, {useContext} from 'react';
import "./SearchAndSort.css"
import {observer} from "mobx-react-lite";
import {fetchBooksFirstTime} from "../../api/fetchingApi";
import {useNavigate} from "react-router-dom";
import {ReactComponent as SearchLoop} from '../../assets/images/magnifying-glass-solid.svg';
import {Context} from "../../ContextProvider";
import {Suspense} from 'react';
import SmallLoader from '../loaders/SmallLoader';
import {checkTotalItems} from "../helpers/checkExistsBooks";
import {closeAfterSubmitSearch} from "../helpers/closeAfterSubmitSearch";


const SortComponent = React.lazy(() => import('../sortComponent/SortComponent'));

const SearchAndSort = observer(() => {

    const {booksStore} = useContext(Context)
    const navigate = useNavigate()
    const bookSearchQuery = booksStore.searchQuery

    const SetDataButton = (bookSearchQuery: string) =>
    {
        if (bookSearchQuery) {
            navigate(`/booklist`)
            fetchBooksFirstTime(bookSearchQuery, booksStore,
                booksStore.optionRelevance, booksStore.subjectCategory)
                .then(
                    ()=>{
                        closeAfterSubmitSearch()
                    })
        }

    }

    const setDataEnter =
        async (event: React.KeyboardEvent<HTMLInputElement>, bookSearchQuery: string) =>
        {
            if (event.key === "Enter" && bookSearchQuery) {
                navigate(`/booklist`)
                fetchBooksFirstTime(booksStore.searchQuery, booksStore,
                    booksStore.optionRelevance, booksStore.subjectCategory)
                    .then(
                        ()=>{
                            closeAfterSubmitSearch()
                        })
            }
        }

    const setSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        booksStore.setSearchQuery(e.target.value)
    }

    return (
        <Suspense fallback={<SmallLoader className="search_container"/>}>
            <input id="inside_opening" type="checkbox"/>
            <div data-testid="search-and-sort" className="search_container">
                <h1 className="position_set row_h1">Search for Books</h1>
                <div id="row_search" className="position_set">
                    <input id="input_search" className="position_set input_search"
                           placeholder={`Поиск..`}
                           value={bookSearchQuery}
                           onChange={setSearchQuery}
                           type="text"
                           onKeyDown={(event) => setDataEnter(event, bookSearchQuery)}
                    />
                    <button data-testid="button-search" id="button_search" aria-label="Поиск..."
                            className="position_set button_search"
                            onClick={() => SetDataButton(bookSearchQuery)}>
                        <SearchLoop id="search_loop" className="search_loop"/></button>
                </div>
                <SortComponent/>
            </div>
            {checkTotalItems()
                ? <div className="open_search_block" id="open_search_block" >
                    <label htmlFor="inside_opening"
                           className="open_search_text_button"
                           id="open_search_text_button"
                    >
                        Search
                    </label>
                    <label htmlFor="inside_opening"
                           className="open_button_line"
                    />
                    <div className="shadow"></div>
                  </div>
                : ""
            }
        </Suspense>
    );
})

export default SearchAndSort;