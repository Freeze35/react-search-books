import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BooksStore from "./store/BooksStore";



//Linking our store's using Context.Provider
export const Context = createContext<null|any>(null)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Context.Provider value={{
        booksStore: new BooksStore()
    }}>
        <App />
    </Context.Provider>
);
