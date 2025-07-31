// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista donde se guardarán los nombres
const listaAmigos = [];

//esta funcion es para agregar un amigo.
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor ingresa un nombre válido');
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    input.value = '';
}
//esta funcion es para mostrar la lista en pantalla: Mostrar la lista en pantalla
function actualizarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    listaAmigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}


//Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Agrega al menos un amigo para hacer el sorteo');
        return;
    }

    const indice = Math.floor(Math.random() * listaAmigos.length);
    const elegido = listaAmigos[indice];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${elegido}</strong></li>`;
}

//me apoye de las funciones que ya estaban llamadas
//  en el one click del html asi que pude entender que es lo que tenia que hacer