// Javascript externo

// criar uma variável para armazenaro elemento dúvida.

const elementoDuvida = document.querySelectorAll(".cuidador");

elementoDuvida.forEach(function(duvida) {
    duvida.addEventListener("click", function() {
        duvida.classList.toggle("ativa");
    });
});