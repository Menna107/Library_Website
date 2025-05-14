document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Toggle the eye icon
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
});

const passwordInput = document.getElementById("password");

// Form validation and login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Admin login
    if (email === "admin@gmail.com" && password === "Admin123*") {
        alert("Login successful as an admin!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInUser", "Admin");
        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 100);
        return;
    } 
    
    // Regular user login
    const storedUserData = JSON.parse(localStorage.getItem("userDataList"));
    if (storedUserData) {
        const user = storedUserData.find(user => user.email === email && user.password === password);
        if (user) {
            alert("Login successful!");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("loggedInUser", user.username);
            window.location.href = "index.html"; 
        } else {
            alert("Invalid email or password.");
        }
    } else {
        alert("No user found. Please sign up first.");
    }
});