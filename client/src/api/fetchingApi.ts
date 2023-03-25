import axios from "axios";
import BooksStore from "../store/BooksStore";

const GOOGLE_KEY:string | undefined = process.env.REACT_APP_SECRET_GOOGLE_API_KEY

export const fetchBooks= async (searchQuery:string, booksStore: BooksStore,
                                orderBy = "relevance",subjectCategory="",
                                maxResults = "10",startIndex="0")=>{

    try {
        booksStore.setBooks({})
        booksStore.setIsLoading(true)

        //set Order by, default:relevance
        let orderByApi:string = `&orderBy=${orderBy}`

        //set Category type
        const setCategory=():string=>{
            return subjectCategory
                ? `+subject:${subjectCategory}`
                : "";
        }

        //set maxResults
        let maxResultsApi = `&maxResults=${maxResults}`

        //set startIndex
        let startIndexApi = `&startIndex=${startIndex}`

        let response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=
            ${searchQuery}${setCategory()}${orderByApi}${maxResultsApi}${startIndexApi}&key=${GOOGLE_KEY}`)
        booksStore.setBooks(response.data)
        booksStore.setIsLoading(false)
    } catch (e) {
        console.log(e)
    }

}

export const fetchAddingBooks = async (searchQuery:string, booksStore: BooksStore,
                                orderBy = "relevance",subjectCategory="",
                                maxResults = "10",startIndex="10")=>{

    try {
        booksStore.setIsLoading(true)

        //set Order by, default:relevance
        let orderByApi:string = `&orderBy=${orderBy}`

        //set Category type
        const setCategory=():string=>{
            return subjectCategory
                ? `+subject:${subjectCategory}`
                : "";
        }

        //set maxResults
        let maxResultsApi = `&maxResults=${maxResults}`

        //set startIndex
        let startIndexApi = `&startIndex=${startIndex}`

        let response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=
            ${searchQuery}${setCategory()}${orderByApi}${maxResultsApi}${startIndexApi}&key=${GOOGLE_KEY}`)

        response.data.items =  [...<[]>booksStore.books.items, ...response.data.items]
        booksStore.setBookChangeList(response.data)

        //change to number(STartIndex and maxResults) our Start Index and set new Index
        booksStore.setStartIndexFetchApi(`${Number(booksStore.startIndexFetchApi) + Number(maxResults)}`)
        booksStore.setIsLoading(false)
    } catch (e) {
        console.log(e)
    }
}
