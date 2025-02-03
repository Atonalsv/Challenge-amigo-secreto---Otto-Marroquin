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

