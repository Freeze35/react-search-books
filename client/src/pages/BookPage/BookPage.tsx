import React, {useContext} from 'react';

import "./BookPage.css"
import {Context} from "../../index";
import {TakeDataBookComponent} from "../../components/booksComponent/TakeDataBookComponent";

const BookPage = () => {


    const {booksStore} = useContext(Context)






    return (
        <div className="book_container">
            <div style={{display: "flex"}}>
                <div>
                    <div className="image_back">
                        <img className="book_image_page"
                             src={TakeDataBookComponent("imageBook", booksStore.oneBookData)}
                             alt={""}></img>
                    </div>
                </div>
                <div className="info_book_block">
                    <h2 className="text_decoration category_page">
                        {TakeDataBookComponent("category_all", booksStore.oneBookData)}</h2>
                    <h1 className="text_decoration name_book"> {TakeDataBookComponent("title", booksStore.oneBookData)}</h1>
                    <p className="text_decoration authors_page">{TakeDataBookComponent("authors", booksStore.oneBookData)}</p>
                    <div className="description_block">
                        {TakeDataBookComponent("description", booksStore.oneBookData)}
                    </div>
                </div>
                {/*<div style={{background: "red", width: "auto", height: "auto"}}
                     onClick={() => console.log(booksStore.oneBookData)}
                >asdaasd
                </div>*/}
            </div>
        </div>
    );
};

export default BookPage;