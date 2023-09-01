const navContent = document.getElementById('header')
const navBar = document.createElement('nav')
const navDir = document.createElement('div')
const navUl = document.createElement('ul')
const h1 = document.getElementsByTagName('h1')[0]

const navLinks = [
                    {
                        page: 'index',
                        link: 'Iniciar secion'
                    }
                ]

navBar.classList = 'navbar navbar-expand-lg navbar-light bg-light'
navDir.classList = 'container-fluid'
navUl.classList = 'navbar-nav'


navContent.append(navBar)
navBar.appendChild(navDir)
navDir.appendChild(navUl)

navLinks.forEach((name) =>{
    navUl.innerHTML += `<li class='nav-item'>
                            <a class="nav-link" href="../${name.page}.html">${name.link}</a>
                        </li>
                        `})

                        h1.style.color = 'blue'
                        h1.style.fontSize ="30px"

eventos = JSON.parse(localStorage.getItem('eventos'))
if (eventos == null) {
    eventos = []
    if(document.getElementById('placeholder') == null) {document.getElementById('grid').innerHTML += `<h2 id="placeholder">Aun no hay eventos</h2>`}
}
if (eventos != [] && document.getElementById('placeholder') != null){document.getElementById('placeholder').remove()}
for(evento of eventos){
    document.getElementById('grid').innerHTML += `
    <div class="card-body">
        <h2 class="card-title">${evento.nombre}</h5>
        <h3 class="card-text">${evento.ubicacion}</p>
        <h3 class="card-text">${evento.fecha}</p>
        <h3 class="card-text">${evento.precioMinimo}</p>
        <h3 class="card-text">${evento.edadMinima}</p>
        <h3 class="card-text">${evento.cantidadDeEntradas}</p>
        <a href="./comprar.html"><img class="berenjena" src="https://i.pinimg.com/736x/7c/b1/d0/7cb1d04035d1342804428b8f80133e3d.jpg" alt="Comprar">Comprar</a>
    </div>
    `
}