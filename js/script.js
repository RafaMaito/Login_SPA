window.addEventListener("load", () => {
  const menu = document.getElementById("menu"),
    login = document.getElementById("login"),
    content = document.getElementById("content"),
    inputLogin = document.getElementById("inputLogin"),
    inputPassword = document.getElementById("inputPassword"),
    buttonLogged = document.getElementById("buttonLogged"),
    buttonHide = document.getElementById("buttonHide"),
    buttonLogin = document.getElementById("buttonLogin");

  oldUsers();
  hiddenMenu();
});
const listUsers = [...users];

function hiddenMenu() {
  let hide = localStorage.getItem("logged");
  if (hide === "true") {
    menu.style.display = "block";
    content.style.display = "block";
    login.style.display = "none";
    buttonHide.style.display = "none";
  } else {
    menu.style.display = "none";
    content.style.display = "none";
    login.style.display = "block";
    buttonHide.style.display = "none";
  }
}

buttonLogin.addEventListener("click", () => {
  let login = inputLogin.value;
  let pass = inputPassword.value;
  compareLogin(login, pass);
});

buttonLogged.addEventListener("click", () => {
  let displayHide = buttonHide.style.display;
  if (displayHide === "block") {
    buttonHide.style.display = "none";
  } else {
    buttonHide.style.display = "block";
  }
});

buttonHide.addEventListener("click", () => {
  localStorage.setItem("logged", false);
  inputLogin.value = "";
  inputPassword.value = "";
  buttonHide.style.display = "none";
  hiddenMenu();
});

function oldUsers() {
  localStorage.setItem("listUsers", JSON.stringify(listUsers));
}

function compareLogin(login, pass) {
  let teste = 0;
  for (userLocal of users) {
    if (login === userLocal.id && pass === userLocal.password) {
      logged();
      return;
    } else {
      teste = 1;
    }
  }
  if (teste === 1) {
    alert("Login/Senha Inválido");
    inputLogin.value = "";
    inputPassword.value = "";
  }
}
function logged() {
  localStorage.setItem("logged", true);
  hiddenMenu();
}
