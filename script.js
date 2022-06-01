const btnMenu = document.getElementById("teste");

btnMenu.addEventListenner('click', botaClasse);

function botaClasse(){
    btnMenu.classList.toggle("testes");
    alert("Hello!")
}

