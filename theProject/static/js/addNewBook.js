document.getElementById("addBookForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const category = document.getElementById("category").value;
        const description = document.getElementById("description").value;
	const coverImage = document.getElementById("coverImage").value;
	const message = document.getElementById("message");
	if (title && author && category && description && coverImage) {
		message.innerText = "Book added successfully!";
		message.style.color = "green";
		this.reset();
	} else {
		message.innerText = "Please fill in all fields!";
		message.style.color = "red";
		}
        });
