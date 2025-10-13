document.body.innerHTML = `
    <h2>Авторизация</h2>
    <form id="authForm">
        <input type="text" id="login" placeholder="Логин" required>
        <input type="password" id="password" placeholder="Пароль" required>
        <button type="submit">Войти</button>
    </form>
    <div id="message" class="message"></div>
`;

const users = [
    { login: "Yusupov_F@iuca.kg", 
      password: "12345678", 
      name: "Farhad" },

    { login: "Aby-beka", 
      password: "87654321", 
      name: "Bekrahun" },

    { login: "lilisov", 
      password: "11002299", 
      name: "Azim" },

      { login: "Medixanov", 
      password: "44775566", 
      name: "Arman" },

    { login: "Sultan", 
      password: "33994488", 
      name: "Tsimer" }
];

document.getElementById('authForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    const user = users.find(u => u.login === login && u.password === password);
    
    if (user) {
        message.textContent = `Привет, ${user.name}!`;
        message.className = 'message success';
    } else {
        message.textContent = 'Ошибка авторизации!';
        message.className = 'message error';
    }

    document.getElementById('authForm').reset();
});