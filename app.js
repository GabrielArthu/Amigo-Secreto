let amigos = [];
let showResetBtn = document.querySelector('#button-reset')
amigosListados = document.getElementById("listaAmigos");
listaAmigos = document.getElementById("resultado");

function adicionarAmigo(){
    let amigo = document.querySelector("input").value;

    if(amigo == "" || amigo == " " || amigo == null){

        alert(" O campo de amigo não pode ser vazio");
        
    }else{
        console.log(amigo);
        amigos.push(amigo);
        addfriend(amigo);
        clearSet();
    }

}

function clearSet(){
    document.querySelector("input").value = '';
}

function addfriend(amigo){
    
    amigosListados.innerHTML=amigos
}


function sortearAmigo(){

    if(amigos.length == 0 ){

        alert("Não existe nenhum amigo na lista");

    }else{

    randomNuber = Math.floor(Math.random() * amigos.length);
    listaAmigos.innerHTML=`O amigo sorteado é: ${amigos[randomNuber]}`;
    amigos.splice(randomNuber,1);
    console.log(amigos);
    amigosListados.innerHTML=amigos
    showResetBtn.style.display = "flex";
    }
    
}


function reiniciar(){
    amigos = [];
    amigosListados.innerHTML="";
    listaAmigos.innerHTML = "";
    showResetBtn.style.display = "none";
    clearSet();
    
}
