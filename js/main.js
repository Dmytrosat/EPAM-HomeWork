let login = prompt("Введіть логін:", "");

if (login === "Admin") {
  let password = prompt("Введіть пароль:", "");

  if (password === "12345") {
    alert("Ласкаво просимо!");
  } else if (password === null || password === "") {
    alert("Доступ заборонено");
  } else {
    alert("Невірний пароль");
  }
} else if (login === null || login === "") {
  alert("Доступ заборонено");
} else {
  alert("Доступ заборонено");
}
