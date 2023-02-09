const myBooks = [
    {
        bookTitle: "Seawolf",
        pageNum: 1000
    },
    {
        bookTitle: "Starship Troopers",
        pageNum: 2050
    }
];

myBooks.forEach(book => {
    console.log(`Here's the title of this book: ${book.bookTitle}`);
});