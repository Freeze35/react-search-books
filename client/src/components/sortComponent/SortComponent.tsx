import React, {useContext} from 'react';
import {ContainerProps} from "react-bootstrap";
import "./OptionSelector.css"
import {observer} from "mobx-react-lite";
import {fetchBooksFirstTime} from "../../api/fetchingApi";
import {Context} from "../../ContextProvider";
import {categoryMassive, optionMassive} from "./optionsMassive";

const BooksSelector = React.lazy(() => import('../selector/BooksSelector'));

const SortComponent: React.FC<ContainerProps> = observer(() => {

    const {booksStore} = useContext(Context)

    //Sorting our data {relevance,newest}
    const sortData = (sortType: string) => {
        if (booksStore.searchQuery) {
            booksStore.setOptionRelevance(sortType)
            fetchBooksFirstTime(booksStore.searchQuery, booksStore, sortType, booksStore.subjectCategory).then()
        } else {
            booksStore.setOptionRelevance(sortType)
        }
    }

    const categorySelector = (category: string) => {
        if (booksStore.searchQuery) {
            booksStore.setSubjectCategory(category)
            fetchBooksFirstTime(booksStore.searchQuery, booksStore, booksStore.optionRelevance, category).then()
        } else {
            booksStore.setSubjectCategory(category)
        }
    }

    return (
        <div className="position_set position_set_sort">
            <h1 className="selector_name">Category </h1>
            <BooksSelector value={booksStore.optionRelevance} onChange={sortData}
                           options={optionMassive} className="option_selector">
            </BooksSelector>
            <h1 className="selector_name">Sorting by</h1>
            <BooksSelector value={booksStore.subjectCategory} onChange={categorySelector}
                           options={categoryMassive} className="option_selector">
            </BooksSelector>
        </div>
    );
});

export default SortComponent;