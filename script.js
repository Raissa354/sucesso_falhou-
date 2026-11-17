const usuarioCorreto = "aluno2026";
const senhaCorreta = "Senai@2026";

document.getElementById("formLogin").addEventListener("submit", function(evento) {

    evento.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    if (usuario === usuarioCorreto && senha === senhaCorreta) {

        window.location.href = "sucesso.html";

    } else {

        window.location.href = "falhou.html";

    }

});