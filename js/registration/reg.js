function validateForm() {
  var username = document.getElementById("login-name").value;
  var password = document.getElementById("login-pass").value;
  var usernameError = document.getElementById("username-error");
  var passwordError = document.getElementById("password-error");

  usernameError.innerHTML = "";
  passwordError.innerHTML = "";
  if (username === "") {
    usernameError.innerHTML = "Please enter a username";
    return false;
  }
  if (password === "") {
    passwordError.innerHTML = "Please enter a password";
    return false;
  }

  //   fetch("http://45.132.18.157:5000/users/registration", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: username,
  //       password: password,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.authenticated) {
  //         // Save username and role status to local storage
  //         localStorage.setItem("id", username);
  //         localStorage.setItem("status", data.status);
  //         // Redirect to users.html
  //         window.location.href = "users.html";
  //       } else {
  //         alert("Неверный логин или пароль");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error registering user:", error);
  //     });
}
