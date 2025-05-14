let currentBook;

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('id'), 10);
    const cameFromMyBooks = urlParams.get('from') === 'mybooks';

    const books = JSON.parse(localStorage.getItem("books")) || [];
    const borrows = JSON.parse(localStorage.getItem("borrows")) || {};
    const book = books.find(b => b.id === bookId);

    if (book) {
        currentBook = book;

        document.getElementById("bookTitle").innerText = book.title;
        document.getElementById("bookAuthor").innerText = book.author || "Unknown Author";
        document.getElementById("bookCategory").innerText = book.category || "Unknown Category";
        document.querySelector(".bookDescriptionText").innerText = book.description || "No description available.";
        document.querySelector(".bookImage").src = book.image || "path/to/default-image.jpg";

        if (cameFromMyBooks && borrows[bookId]) {
            const borrowBtn = document.querySelector(".buyNowBtn");
            borrowBtn.disabled = true;
            borrowBtn.innerText = "Already Borrowed";
            borrowBtn.style.backgroundColor = "#ccc";
            borrowBtn.style.cursor = "not-allowed";
        }

        // Check if user is admin
        const isAdmin = localStorage.getItem("loggedInUser") === "Admin";            
        if (isAdmin) {
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete Book";
            deleteBtn.className = "deleteBtn";
            deleteBtn.style.backgroundColor = "#ff4444";
            deleteBtn.style.color = "white";
            deleteBtn.style.padding = "10px";
            deleteBtn.style.borderRadius = "5px";
            deleteBtn.style.border = "none";
            deleteBtn.style.cursor = "pointer";
            deleteBtn.style.marginTop = "10px";

            deleteBtn.addEventListener("click", deleteBook);

            const buttonGroup = document.querySelector(".button-group");
            buttonGroup.appendChild(deleteBtn);
        }
    }

    // Function to delete book
    function deleteBook() {
        const books = JSON.parse(localStorage.getItem("books")) || [];
        const updatedBooks = books.filter(book => book.id !== currentBook.id);
        localStorage.setItem("books", JSON.stringify(updatedBooks));

        alert("Book deleted successfully!");
        window.location.href = "borrow books.html";
    }
});


function borrowBook() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (!isLoggedIn) {
        alert("You must be logged in to borrow a book.");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 100);
        return;
    }

    if (!currentBook) {
        alert("Book data not loaded.");
        return;
    }

    const confirmBorrow = confirm(`Do you want to borrow "${currentBook.title}"?`);
    if (confirmBorrow) {
        const borrows = JSON.parse(localStorage.getItem("borrows")) || {};
        borrows[currentBook.id] = {
            title: currentBook.title,
            image: currentBook.image,
            date: new Date().toLocaleString(),
            timestamp: Date.now()
        };
        localStorage.setItem("borrows", JSON.stringify(borrows));
        alert(`You borrowed "${currentBook.title}"`);
    }
}
