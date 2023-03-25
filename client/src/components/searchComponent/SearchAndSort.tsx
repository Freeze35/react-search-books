import React, {useContext} from 'react';

import "./SearchAndSort.css"
import {observer} from "mobx-react-lite";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Row} from "react-bootstrap";
import {Context} from "../../index";
import {fetchBooks} from "../../api/fetchingApi";
import SortComponent from "../sortComponent/SortComponent";
import {CenterView} from "../view/CenterView";

const SearchAndSort = observer(() => {

    const {booksStore} = useContext(Context)

    const SetDataButton = () => {
        if (booksStore.searchQuery) {
            fetchBooks(booksStore.searchQuery, booksStore,
                booksStore.optionRelevance,booksStore.subjectCategory).then(()=>
                CenterView()
            )
        }
    }


    const SetDataEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && booksStore.searchQuery) {
            fetchBooks(booksStore.searchQuery, booksStore,
                booksStore.optionRelevance,booksStore.subjectCategory).then(()=>
                CenterView()
            )
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
                    <FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </Row>
            <SortComponent/>
        </div>
    );
})

export default SearchAndSort;