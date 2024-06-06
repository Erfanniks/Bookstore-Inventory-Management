document.addEventListener('DOMContentLoaded', () => {
    fetch('http://127.0.0.1:8000/books/')
        .then(response => response.json())
        .then(data => {
            const booksContainer = document.getElementById('books-container');
            data.forEach(book => {
                const bookElement = document.createElement('div');
                bookElement.className = 'book';
                bookElement.innerHTML = `
                    <h2>${book.title}</h2>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <p><strong>Price:</strong> $${book.price}</p>
                    <p><strong>Stock:</strong> ${book.stock}</p>
                `;
                booksContainer.appendChild(bookElement);
            });
        })
        .catch(error => console.error('Error fetching books:', error));
});
