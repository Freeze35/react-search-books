import axios from "axios";
import BooksStore from "../store/BooksStore";

const GOOGLE_KEY: string | undefined = process.env.REACT_APP_SECRET_GOOGLE_API_KEY

interface returnFetchVaribles {
    maxResultsApi: string,
    startIndexApi: string,
    setCategory: () => string,
    orderByApi: string

}

//create global Variables
const fetchVariables = (booksStore: BooksStore, maxResults: string, startIndex: string,
                        subjectCategory: string, orderBy: string): returnFetchVaribles => {

    //calculate our maxResults if request are low
    // (for example: 47 books all, we call them by our maxRequest,
    // but our first enter it's maxRequest=15 for correct we calculate)
    const newMaxIndex = () => {
        if (Number(booksStore.books.totalItems) - Number(maxResults) - Number(startIndex) < 0) {
            console.log(Number(booksStore.books.totalItems) - Number(startIndex))
            return maxResults = `${Number(booksStore.books.totalItems) - Number(startIndex)}`
        } else {
            return maxResults
        }
    }
    //set Category type
    const setCategory = (): string => {
        return subjectCategory
            ? `+subject:${subjectCategory}`
            : "";
    }

    newMaxIndex()
    //set api maxResults
    const maxResultsApi = `&maxResults=${maxResults}`
    //set api startIndex
    const startIndexApi = `&startIndex=${startIndex}`
    //set Order by, default:relevance
    const orderByApi = `&orderBy=${orderBy}`
    return {maxResultsApi, startIndexApi, setCategory, orderByApi} as returnFetchVaribles
}

//Create our GoogleAPI request using axios and return our response
//Beginning setLoader
const setLineRequestAndGetData = async (searchQuery: string, booksStore: BooksStore,
                                        orderBy: string, subjectCategory: string,
                                        maxResults: string, startIndex: string) => {

    const fetchVars = fetchVariables(booksStore, maxResults, startIndex, subjectCategory, orderBy)

    //Return our response => on out change data(response.data) //(use +`${}` for better reading)
    return await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=`
        + `${searchQuery}`
        + `${fetchVars.setCategory()}`
        + `${fetchVars.orderByApi}`
        + `${fetchVars.maxResultsApi}`
        + `${fetchVars.startIndexApi}`
        + `&key=${GOOGLE_KEY}`)
}

//call our books first time 10 books 1 request
export const fetchBooksFirstTime = async (searchQuery: string, booksStore: BooksStore,
                                          orderBy = "relevance", subjectCategory = "",
                                          maxResults = "10", startIndex = "0") => {

    try {

        booksStore.setIsLoading(true)
        //cleanup our list of books
        booksStore.setBooks({})
            //call our delegation function and get response data back
            setLineRequestAndGetData(searchQuery, booksStore, orderBy, subjectCategory, maxResults, startIndex)
                .then(response => {
                        booksStore.setBooks(response.data)
                        booksStore.setIsLoading(false)
                    }
                )

    } catch (e) {
        console.log(e)
    }

}

//Add book to our exists 10 books
export const fetchAddingBooks = async (searchQuery: string, booksStore: BooksStore,
                                       orderBy = "relevance", subjectCategory = "",
                                       maxResults = "10", startIndex = "10") => {

    try {
        booksStore.setIsLoading(true)

        if (Number(booksStore.books.totalItems) - Number(startIndex)>0) {

            //call our delegation function and get response data back
            setLineRequestAndGetData(searchQuery, booksStore, orderBy, subjectCategory, maxResults, startIndex)
                .then(response => {
                        //spread old list and add new list then push new data to Store. Mobx set new Proxy for elements
                        response.data.items = [...booksStore.books.items as [], ...response.data.items]
                        booksStore.setBookChangeList(response.data)

                        //change to number(STartIndex and maxResults) our Start Index and set new Index
                        booksStore.setStartIndexFetchApi(`${Number(booksStore.startIndexFetchApi) + Number(maxResults)}`)
                        booksStore.setIsLoading(false)
                    }
                )
        } else {
            booksStore.setIsLoading(false)
        }
    } catch (e) {
        console.log(e)
    }
}

// getting on book by id using it for render BookPage
export const fetchOneBook = async (BookId: string | undefined) => {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes/
            ${BookId}?key=AIzaSyBGsfkXWsf_vXKf3SrvDmjByo0XQ3LvZuM`)
        return (response.data)
    } catch (e) {
        console.log(e)
    }
}
