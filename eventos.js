function saludar(event) {
    event.stopPropagation(); 
    alert('Hola!');
}

const divContenedor = document.querySelector('.contenedor');

divContenedor.addEventListener('click', function() {
    alert('Hola! Soy el div');
});