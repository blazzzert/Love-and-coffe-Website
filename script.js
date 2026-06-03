// Функция, которая срабатывает при нажатии на кнопку "Войти"
function loginUser() {
    // Берем то, что пользователь написал в поле "никнейм"
    let username = document.getElementById("username").value;
    
    if (username === "") {
        alert("Пожалуйста, введи никнейм!");
        return; // Останавливаем код, если поле пустое
    }

    localStorage.setItem("playerName", username);
    
    // Запускаем проверку
    checkLogin();
}

// Функция, которая проверяет, вошел ли человек
function checkLogin() {
    let savedName = localStorage.getItem("playerName");
    
    if (savedName) {
        // Если имя есть в памяти, прячем форму входа
        document.getElementById("login-box").style.display = "none";
        // Показываем блок приветствия
        document.getElementById("welcome-box").style.display = "block";
        // Пишем туда имя
        document.getElementById("welcome-text").innerText = "Привет, " + savedName + "!";
    }
}

// Функция выхода
function logoutUser() {
    // Удаляем имя из памяти
    localStorage.removeItem("playerName");
    // Перезагружаем страницу
    location.reload();
}

checkLogin();