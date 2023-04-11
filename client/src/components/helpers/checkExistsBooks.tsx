
import {useContext} from "react";
import {Context} from "../../ContextProvider";


export const checkTotalItems = () => {
    const {booksStore} = useContext(Context)
    const totalItems = booksStore.books.totalItems
    return totalItems !== undefined && totalItems>0
}