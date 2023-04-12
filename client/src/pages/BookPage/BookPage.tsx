import {Suspense, useContext} from 'react';
import "./BookPage.css"
import {TakeDataBookComponent} from "../../components/booksComponent/TakeDataBookComponent";
import {Context} from "../../ContextProvider";
import SmallLoader from "../../components/loaders/SmallLoader";
import {LazyLoadImage} from "react-lazy-load-image-component";

const BookPage = () => {

    const {booksStore} = useContext(Context)

    /*const getHash = async () => {
        try {
            setHash(await encodeImageToBlurhash(TakeDataBookComponent("imageBookPage", booksStore.oneBookData)))
        } catch (e) {
            console.log("No Image", e)
        }
    }
    getHash()*/

    return (

        <div data-testid="book-page" className="book_container">
            <div>
                <div className="image_back">
                    <Suspense fallback={<SmallLoader/>}>
                        <LazyLoadImage
                            className="book_image_page"
                            alt={""}
                            src={TakeDataBookComponent("imageBookPage", booksStore.oneBookData)} // use normal <img> attributes as props
                        />
                    </Suspense>
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

    );
};

export default BookPage;