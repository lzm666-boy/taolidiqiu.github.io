document.addEventListener("DOMContentLoaded", () => {
    // 模拟登录功能
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (loginForm) {
        loginForm.addEventListener("submit", () => {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // 简单校验
            if (username === "admin" && password === "123456") {
                alert("登录成功！");
                window.location.href = "index.html";
            } else {
                alert("用户名或密码错误！");
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", () => {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            if (password !== confirmPassword) {
                alert("两次密码输入不一致！");
                return;
            }

            alert("注册成功！请登录。");
            window.location.href = "login.html";
        });
    }
});
