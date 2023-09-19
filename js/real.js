const iniciarsecion = document.getElementById('iniciarsecion') // Boton
const usuario = document.getElementById('usuario')
const contraseña = document.getElementById('contraseña') 
const cabeza = document.head
const titulo = document.createElement('title')
const h1 = document.getElementsByTagName('h1')[0]
const registrarse = document.getElementById('registrarse') // Boton
const darkMode = document.getElementById('darkmode') // Boton
titulo.innerText = 'DISCO'
cabeza.appendChild(titulo)
let usuarios = JSON.parse(localStorage.getItem('usuarios'))

h1.style.color = 'blue'
h1.style.fontSize ="30px"

iniciarsecion.addEventListener('click', hizoClick);
function hizoClick() {
    if (usuarios != null) {
        for (user of usuarios){
            if (user["usuario"]==usuario.value & user["contraseña"]==contraseña.value){
                console.log('El Usuario iniciarsecion');
                window.location.href = "./Html/principal.html";
            }
        }
    }
    Toastify({
        text: 'Inicio de sesion invalido',
        duration: 300,
        gravity: 'top',
        destination: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        stopOnFocus: true,
        position: 'left',
        close: true,
        style: {
            background: "linear-gradient(to right, #ff5004, #ff1115)",
        }}).showToast();
}


registrarse.addEventListener('click', hizoClick2)
function hizoClick2() {
    window.location.href = "./Html/registrarse.html"
}

darkMode.addEventListener('click', toggleMode)
function toggleMode() {
    let element = document.body;
    element.classList.toggle("dark");

    let element2 = document.getElementsByTagName('header')[0];
    element2.classList.toggle("dark");
}

const diaDeHoy = new Date()
const body = document.body
const footer = document.createElement('footer')
footer.innerHTML = `<footer>
        <h3>All rights are reserved to DISCO ltd © ${diaDeHoy.getFullYear()}</h3>
    </footer>`
body.append(footer)