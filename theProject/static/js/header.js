document.addEventListener("DOMContentLoaded", () => {
    fetch("header")
        .then(response => response.text())
        .then(data => {
            // إدخال محتوى الهيدر في العنصر
            const headerContainer = document.getElementById("header");
            headerContainer.innerHTML = data;

            // تحديد العناصر من داخل #header فقط
            const searchInput = headerContainer.querySelector(".search-container .search-input");
            const searchButton = headerContainer.querySelector(".search-container .search-button");
            const searchDropdown = headerContainer.querySelector(".search-container .search-dropdown");

            // تأكد من وجود العناصر قبل محاولة إضافة الأحداث
            if (searchInput && searchButton && searchDropdown) {
                searchButton.addEventListener("click", () => {
                    const searchTerm = searchInput.value.toLowerCase();
                    const category = searchDropdown.value.toLowerCase();
                    const books = JSON.parse(localStorage.getItem("books")) || [];

                    if (!books || books.length === 0) {
                        alert("No books found! Please add some books to the library.");
                        return;
                    }

                    if (searchTerm === "") {
                        alert("Please enter a search term.");
                        return;
                    }

                    const results = books.filter(book => {
                        const titleMatch = book.title.toLowerCase() === searchTerm;
                        const authorMatch = book.author && book.author.toLowerCase() === searchTerm;
                        if (category === "all") return titleMatch || authorMatch;
                        if (category === "books") return titleMatch;
                        if (category === "authors") return authorMatch;
                        return false;
                    });

                    if (results.length === 0) {
                        alert("No matching books found!");
                        return;
                    }

                    localStorage.setItem("searchResults", JSON.stringify(results));
                    searchInput.value = "";
                    window.location.href = "book-details.html?id=" + results[0].id;
                });
            } else {
                console.warn("Search elements not found in header.");
            }

            // عرض أيقونة الإضافة فقط إذا كان المستخدم Admin
            const isAdmin = localStorage.getItem("loggedInUser") === "Admin";
            if (isAdmin) {
                const ulI = headerContainer.querySelector("header .iaBar .container ul i");
                const liI = headerContainer.querySelector("header .iaBar .container ul li");
                const liIS = headerContainer.querySelector("header .iaBar .container ul .Signup");
                
                if (ulI) ulI.style.display = "block";
                if (liI) liI.style.display = "none";
                if (liIS) liIS.style.display = "none";
            }
        })
        .catch(error => console.error('Error fetching header:', error));
});
