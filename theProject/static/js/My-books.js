window.onload = function () {
    const twoDays =   2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds

    let hasBooks = false;
    const borrows = JSON.parse(localStorage.getItem("borrows")) || {};
    const container = document.getElementById("bookList");

    for (let bookId in borrows) {
        const book = borrows[bookId];
        if (!book) continue;
        const now = Date.now(); // Get the current time
        const borrowedTime = Number(book.timestamp);
        const timePassed = now - borrowedTime;
        const remainingTime = twoDays - timePassed;

        // If 2 days have passed, remove the book
        if (remainingTime <= 0) {
            delete borrows[bookId];
            continue;
        }

        hasBooks = true;

        const bookDiv = document.createElement("div");
        bookDiv.id = `book-${bookId}`;
        bookDiv.innerHTML = `
            <img src="${book.image}" width="100"><br>
            <strong>${book.title}</strong><br>
            <small>Borrowed on: ${book.date}</small><hr>
        `;
        container.appendChild(bookDiv);

        
        setTimeout(() => {
            const updated = JSON.parse(localStorage.getItem("borrows")) || {};
            delete updated[bookId];
            localStorage.setItem("borrows", JSON.stringify(updated));
            const el = document.getElementById(`book-${bookId}`);
            if (el) el.remove();
            if (Object.keys(updated).length === 0) {
                container.innerHTML = "<p>You have not borrowed any books yet.</p>";
            }
        }, remainingTime);
    }

    
    if (hasBooks) {
        localStorage.setItem("borrows", JSON.stringify(borrows));
    } else {
        container.innerHTML = "<p>You have not borrowed any books yet.</p>";
        localStorage.removeItem("borrows");
    }
};