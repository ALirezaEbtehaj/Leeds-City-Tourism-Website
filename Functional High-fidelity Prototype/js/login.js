document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
    // it would check if password and email is the same as you sign up or the example one below
    if ((email === storedEmail && password === storedPassword) || (email == "al@gmail.com" && password == "password")) {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials!");
    }
  });