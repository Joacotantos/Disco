const myFormulario = document.getElementById('formulario');
const appendFromForm = document.getElementById('append')

myFormulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    let form = e.target;
    let inputA = form.children[1].value; 
    let inputB = form.children[3].value; 
    let boton = form.children[4]; 

    if ((inputA && inputB) === '') {
        alert('Ambos campos son Obligatorios.!!');
    } else {
        boton.style.backgroundColor = 'white';
        boton.style.color = 'black';

        usuarios = JSON.parse(localStorage.getItem('usuarios'))
        if (usuarios==null) {
            usuarios = []
        }
        usuarios.push({usuario: inputA , contraseña: inputB})
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        window.location.href = "../index.html"
    }
}