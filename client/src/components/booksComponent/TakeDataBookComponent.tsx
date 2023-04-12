export const TakeDataBookComponent = (typeValue: string, book: any) => {

    //switch on our request (imageBook,category,NameOfBook,Author)
    //checking exists category's or not

    switch (typeValue) {

        case "imageBook":
            //image optimization for small device
            if (window.innerWidth < 500) {
                return book.volumeInfo?.imageLinks?.smallThumbnail !== undefined
                    ? book.volumeInfo.imageLinks.smallThumbnail
                    : ""
            } else {
                return book.volumeInfo?.imageLinks?.thumbnail !== undefined
                    ? book.volumeInfo.imageLinks.thumbnail
                    : book.volumeInfo?.imageLinks?.smallThumbnail !== undefined
                        ? book.volumeInfo.imageLinks.smallThumbnail
                        : ""
            }

        case "imageBookPage":
            //image for About Book Page small device
            return book.volumeInfo?.imageLinks?.thumbnail !== undefined
                ? book.volumeInfo.imageLinks.thumbnail
                : book.volumeInfo?.imageLinks?.smallThumbnail !== undefined
                    ? book.volumeInfo.imageLinks.smallThumbnail
                    : ""

        case "category":
            //check if our category exists and then remove another category separated(split) by regexp "., -"
            // Change word to lower.Making a word that starts with a capital letter
            return book.volumeInfo?.categories !== undefined
                ? (book.volumeInfo.categories[0].split(/[., -]/)[0].toLowerCase())[0].toUpperCase()
                + book.volumeInfo.categories[0].split(/[., -]/)[0].toLowerCase().slice(1)
                : ""

        case "category_all":
            return book.volumeInfo?.categories !== undefined
                ? book.volumeInfo.categories[0]
                : ""

        case "title":
            return book.volumeInfo?.title !== undefined
                ? book.volumeInfo.title
                : ""

        case "authors":
            return book.volumeInfo?.authors !== undefined
                ? book.volumeInfo.authors
                : ""

        //change our decoding text \u003cp\u003e to tage and return parsing text
        case "description":
            if (book.volumeInfo?.description !== undefined) {
                const parser = new DOMParser()
                const parseDocument = parser.parseFromString(book.volumeInfo.description, "text/html")
                return parseDocument.children[0].textContent
            }

    }
}

