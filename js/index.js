var raiz = document.querySelector(".raiz");
var esquerda = false;
var direita = false;
// var centro = true;

function mover_direita() {
    if (!direita) {
        raiz.classList.add("movendo_esquerda")
        raiz.classList.remove("movendo_esq_centro")

        raiz.classList.remove("movendo_direita")
        raiz.classList.remove("movendo_dir_centro")

        direita=true;
    } else {
        raiz.classList.add("movendo_esq_centro")
        raiz.classList.remove("movendo_esquerda")

        raiz.classList.remove("movendo_direita")
        raiz.classList.remove("movendo_dir_centro")

        direita=false;
    }
}

function mover_esquerda() {
    if (!esquerda) {
        raiz.classList.add("movendo_direita")
        raiz.classList.remove("movendo_dir_centro")

        raiz.classList.remove("movendo_esq_centro")
        raiz.classList.remove("movendo_esquerda")

        esquerda=true;
    } else {
        raiz.classList.add("movendo_dir_centro")
        raiz.classList.remove("movendo_direita")

        raiz.classList.remove("movendo_esq_centro")
        raiz.classList.remove("movendo_esquerda")

        esquerda=false;
    }
}