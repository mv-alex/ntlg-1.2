interface Books{
    title: string;
    description: string;
    authors: string;
}

class Book{
    title: string;
    description: string;
    authors: string;
    createBook(book: Book){/* ... */} 
    getBook(id: number){/* ... */} 
    getBooks(id: number){/* ... */} 
    updateBook(id: number){/* ... */} 
    deleteBook(id: number){/* ... */} 
}