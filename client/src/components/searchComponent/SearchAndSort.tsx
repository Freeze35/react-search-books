import React, {useContext} from 'react';
import "./SearchAndSort.css"
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import {Context} from "../../index";
import {fetchBooksFirstTime} from "../../api/fetchingApi";
import SortComponent from "../sortComponent/SortComponent";

import {useNavigate} from "react-router-dom";
import {ReactComponent as SearchLoop} from '../../assets/images/magnifying-glass-solid.svg';

const SearchAndSort:React.FC = observer(() => {

    const {booksStore} = useContext(Context)
    const navigate = useNavigate()

    const SetDataButton = () => {
        if (booksStore.searchQuery) {
            navigate(`/booklist`)
            fetchBooksFirstTime(booksStore.searchQuery, booksStore,
                booksStore.optionRelevance,booksStore.subjectCategory).then()
        }
    }


    const SetDataEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && booksStore.searchQuery) {
            navigate(`/booklist`)
            fetchBooksFirstTime(booksStore.searchQuery, booksStore,
                booksStore.optionRelevance,booksStore.subjectCategory).then()
        }
    }

    return (
        <div className="search_container">
            <h1 className="position_set row_h1">Search for Books</h1>
            <Row id="row_search" className="position_set">
                <input id="input_search" className="position_set input_search"
                       placeholder={`Поиск..`}
                       value={booksStore.searchQuery}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => booksStore.setSearchQuery(e.target.value)}
                       type="text"
                       onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => SetDataEnter(e)}
                ></input>
                <button id="button_search" className="position_set button_search"
                        onClick={() => SetDataButton()}>
                    <SearchLoop id="search_loop" className="search_loop"/></button>
            </Row>
            <SortComponent/>
        </div>
    );
})

export default SearchAndSort;