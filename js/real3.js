const myFormulario = document.getElementById('formulario');
const appendFromForm = document.getElementById('append')
const btn = document.getElementById('button');

myFormulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    btn.value = 'Sending...';

    const serviceID = 'service_t7nk8cn';
    const templateID = 'template_pp4zacy';

    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
       btn.value = 'Send Email';
       alert('Sent!');
     }, (err) => {
       btn.value = 'Send Email';
       alert(JSON.stringify(err));
     });

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

const diaDeHoy = new Date()
const body = document.body
const footer = document.createElement('footer')
footer.innerHTML = `<footer>
        <h3>All rights are reserved to DISCO ltd © ${diaDeHoy.getFullYear()}</h3>
    </footer>`
body.append(footer)