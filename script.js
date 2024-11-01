"use strict";

function login() {
  const password = document.getElementById("password").value;
  const errorElement = document.getElementById("error");
  if (password === "karp") {
    document.getElementById("login").style.display = "none";
    document.getElementById("scan").style.display = "block";
    errorElement.textContent = "";

    setTimeout(() => {
      document.getElementById("scan").style.display = "none";
      document.getElementById("balance").style.display = "block";
    }, 5000);
  } else {
    errorElement.textContent = "Invalid password, please try again.";
  }
}

function falseLogin() {
  const password = document.getElementById("password").value;
  const errorElement = document.getElementById("error");
  if (password === "karp") {
    document.getElementById("login").style.display = "none";
    document.getElementById("scan").style.display = "block";
    errorElement.textContent = "";

    setTimeout(() => {
        document.getElementById("scan").style.display = "none";
        document.getElementById("scan-fail").style.display = "block";
        document.getElementById("scan-fail").textContent = "Retina authentication failed.";
    }, 5000);
  } else {
    errorElement.textContent = "Invalid password, please try again.";
  }
}

function logout() {
  document.getElementById("balance").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("password").value = "";
}
