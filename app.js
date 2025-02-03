// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//creacion array
let amigos = []

//funcion que agrega amigos al array > muestra alerta > remueve valor del input
function agregarAmigo() {
    let input = document.getElementById('amigo').value;
    if (input === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(input);
    }
    document.getElementById('amigo').value = '';
    actualizarLista();
    console.log(amigos);
    return
}

//funcion que actualiza amigos
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    return
}

//funcion para sortear amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        let resultadoVacio = document.getElementById('resultado');
        resultadoVacio.innerHTML = 'ya se han sorteado todos los amigos'
    } else if (amigos.length == amigos.length) {
        let amigoSorteado = Math.floor(Math.random()*amigos.length);
        nombreAmigo = amigos[amigoSorteado];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `${nombreAmigo}`;
    }
    actualizarLista();
    return;
}
