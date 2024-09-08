function saludar(event) {
    event.stopPropagation(); 
    alert('Hola!');
}

const divContenedor = document.getElementById('contenedor');

divContenedor.addEventListener('click', function() {
    alert('Hola! Soy el div');
});