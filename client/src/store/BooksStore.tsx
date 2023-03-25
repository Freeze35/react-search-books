import {makeAutoObservable} from "mobx";
import React from "react";


export default class BooksStore {

    private _isLoading: boolean = false;
    private _books: any[] = []
    private _optionRelevance: string = "relevance"
    private _searchQuery: string = ""
    private _subjectCategory: string = ""
    private _startIndexFetchApi:string = "10"

    constructor() {
        makeAutoObservable(this)
    }

    setIsLoading = (loading: boolean) => {
        this._isLoading = loading
    }

    get isLoading(): boolean {
        return this._isLoading
    }

    setBooks = (books: []) => {
        this._books = books
    }

    get books() {
        return this._books

    }

    setSearchQuery = (searchQuery: string) => {
        this._searchQuery = searchQuery
    }

    get searchQuery() {
        return this._searchQuery

    }

    setOptionRelevance = (optionRelevance: string) => {
        this._optionRelevance = optionRelevance
    }

    get optionRelevance() {
        return this._optionRelevance
    }

    setSubjectCategory = (subjectCategory: string) => {
        this._subjectCategory = subjectCategory
    }

    get subjectCategory() {
        return this._subjectCategory
    }
    setStartIndexFetchApi = (startIndexFetchApi: string) => {
        this._startIndexFetchApi = startIndexFetchApi
    }

    get startIndexFetchApi() {
        return this._startIndexFetchApi
    }
}


