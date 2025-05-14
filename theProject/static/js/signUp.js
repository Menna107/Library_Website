document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Toggle the eye icon
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
});

document.getElementById("toggleConfirmPassword").addEventListener("click", function () {
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const type = confirmPasswordInput.type === "password" ? "text" : "password";
    confirmPasswordInput.type = type;
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
});

document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!username || !confirmPassword || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!strongPasswordRegex.test(password)) {
        alert("Password must be at least 6 characters long and include uppercase, lowercase, number, and special character.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const existingData = localStorage.getItem("userDataList");
    const userList = existingData ? JSON.parse(existingData) : [];

    const emailExists = userList.some(user => user.email === email);
    if (emailExists) {
        alert("Email already exists. Please use a different email.");
        return;
    }


    // Add new user
    const newUser = {
        username: username,
        email: email,
        password: password
    };

    userList.push(newUser);
    localStorage.setItem("userDataList", JSON.stringify(userList));

    alert("Sign up successful! You can now log in.");
    setTimeout(() => {
        window.location.href = "login.html"; 
    }, 100);
});
