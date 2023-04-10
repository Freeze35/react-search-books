import SmallLoader from "@/components/loaders/SmallLoader";
import React, { Suspense } from "react";

const BooksList = React.lazy(() => import('../components/booksComponent/BooksList/BooksList'));

const BooksListPage = () => {
    return (
        <Suspense fallback={<SmallLoader/>}>
            <BooksList/>
        </Suspense>
    );
};

export default BooksListPage;