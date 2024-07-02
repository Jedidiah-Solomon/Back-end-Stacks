document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const searchType = document.getElementById("searchType");
    const booksContainer = document.getElementById("booksContainer");

    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const query = searchInput.value.trim();
        const type = searchType.value;

        if (query) {
            fetch(`/books/search?${type}=${query}`)
                .then((response) => response.json())
                .then((books) => {
                    booksContainer.innerHTML = "";
                    if (books.length === 0) {
                        const noResultsMessage = document.createElement("div");
                        noResultsMessage.className = "no-book-found";
                        noResultsMessage.textContent = "Book(s) Not Found";
                        booksContainer.appendChild(noResultsMessage);
                    } else {
                        books.forEach((book) => {
                            const bookElement = document.createElement("div");
                            bookElement.className = "book";
                            bookElement.innerHTML = `
                                <img src="${book.imgUrl}" alt="${book.title}">
                                <div>
                                    <h2>${book.title}</h2>
                                    <p>Author: ${book.author}</p>
                                    <p>Publisher: ${
                                        book.publication.publisher
                                    }</p>
                                    <p>Year: ${book.publication.year}</p>
                                    <p>Location: ${
                                        book.publication.location
                                    }</p>
                                    <p>Genres: ${book.genres.join(", ")}</p>
                                    <p>ID: ${book.custom_id}</p> 
                                </div>
                            `;
                            booksContainer.appendChild(bookElement);
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    booksContainer.innerHTML = "<p>Error fetching books.</p>";
                });
        }
    });
});
