// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];  // Inicializa el array

function agregarAmigo() {

    let amigo = document.getElementById('amigo').value.trim().toLowerCase();
    if (!/^[a-zA-Z\s]+$/.test(amigo)) {
        alert("Por favor, ingresa solo letras y espacios.");
        limpiarInput();
        return;
    }

    if(amigo == '') {
        alert("Digite un nombre.")
        return;
    }else if(listaAmigos.includes(amigo)){
        alert('El amigo ya esta en la lista');
        limpiarInput();
        return;
    }else{
        listaAmigos.push(amigo);
        document.getElementById('ButtonLimpiar').removeAttribute('disabled');
        limpiarInput();
        limpiarAmigos();
        limpiarResultado();

        for(let nombre of listaAmigos){
            let li = document.createElement('li');
            li.textContent = nombre;
            document.getElementById('listaAmigos').appendChild(li);
        }
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}

function limpiarAmigos(){
    document.getElementById("listaAmigos").innerHTML = '';
}

function limpiarInput(){
    document.getElementById("amigo").value = '';
}

function limpiarResultado(){
    document.getElementById("resultado").innerHTML = '';
}

function limpiarLista() {
    listaAmigos = []; 
    document.getElementById("listaAmigos").innerHTML = ''; 
    limpiarResultado(); 
    document.getElementById("ButtonLimpiar").setAttribute('disabled', true); 
}
