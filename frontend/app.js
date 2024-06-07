document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    fetch('http://127.0.0.1:8000/books/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched data:', data);
            const booksContainer = document.getElementById('books-container');
            booksContainer.innerHTML = '';  // Clear any existing content
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
