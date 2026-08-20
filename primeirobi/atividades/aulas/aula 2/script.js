const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    if (nome === "") {
        alert("Informe seu nome.");
        return;
    }

    if (email === "") {
        alert("Informe seu e-mail.");
        return;
    }

    if (senha === "") {
        alert("Informe sua senha.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha precisa ter pelo menos 6 caracteres.");
        return;
    }

    // Guarda o nome para podermos mostrar na próxima tela
    localStorage.setItem("nomeUsuario", nome);

    // Vai para a próxima página
    window.location.href = "home.html";
});