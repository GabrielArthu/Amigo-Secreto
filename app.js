let amigos = [];

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
    listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML=amigos
}


function sortearAmigo(){
    listnumber = amigos.length; 
    randomNuber = Math.floor(Math.random() * listnumber);

    listaAmigos = document.getElementById("resultado");
        listaAmigos.innerHTML=`O amigo sorteado é: ${amigos[randomNuber]}`;

    
}
