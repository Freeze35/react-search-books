import React, {useContext} from 'react';
import {ContainerProps} from "react-bootstrap";
import BooksSelector from "../selector/BooksSelector";
import "./OptionSelector.css"
import {OptionsDataInterface} from "../types/types";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchBooks} from "../../api/fetchingApi";


const SortComponent: React.FC<ContainerProps> = observer(() => {

    //Category options
    let optionMassive: OptionsDataInterface[] = [
        {name: "relevance ", value: "relevance"},
        {name: "newest ", value: "newest"},
    ]

    //Sorting by options
    let categoryMassive: OptionsDataInterface[] = [
        {name: "all ", value: ""},
        {name: "art", value: "art"},
        {name: "biography", value: "biography"},
        {name: "computers", value: "computers"},
        {name: "history", value: "history"},
        {name: "medical", value: "medical"},
        {name: "poetry", value: "poetry"},
    ]

    const {booksStore} = useContext(Context)

    //Sorting our data {relevance,newest}
    const sortData = (sortType: string) => {
        if (booksStore.searchQuery) {
            booksStore.setOptionRelevance(sortType)
            fetchBooks(booksStore.searchQuery, booksStore, sortType, booksStore.subjectCategory).then()
        } else {
            booksStore.setOptionRelevance(sortType)
        }
    }

    const categorySelector = (category: string) => {
        if (booksStore.searchQuery) {
            booksStore.setSubjectCategory(category)
            fetchBooks(booksStore.searchQuery, booksStore, booksStore.optionRelevance, category).then()
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