const myFormulario = document.getElementById('formulario');


myFormulario.addEventListener('submit', validarFormulario);
function validarFormulario(e) {
    e.preventDefault();

    let form = e.target;
    let nombre = form.children[1].value; 
    let ubicacion = form.children[3].value; 
    let fecha = form.children[5].value; 
    let precioMinimo = form.children[7].value; 
    let edadMinima = form.children[9].value; 
    let cantidadDeEntradas = form.children[11].value; 
    let boton = form.children[12]; 

    if ((nombre && ubicacion && fecha && precioMinimo && edadMinima && cantidadDeEntradas) === '') {
        Swal.fire({title: 'Error', text: 'Por favor complete todos los campos', icon: 'error', confirmButtonText: 'Ok'});
    } else {
        boton.style.backgroundColor = 'white';
        boton.style.color = 'black';

        precioMinimo = parseInt(precioMinimo)
        edadMinima = parseInt(edadMinima)
        cantidadDeEntradas = parseInt(cantidadDeEntradas)
        if (isNaN(precioMinimo) || precioMinimo == null){
            Swal.fire({title: 'Error', text: 'El precio minimo debe ser un numero entero', icon: 'error', confirmButtonText: 'Ok'});
        } else if (isNaN(edadMinima) || edadMinima == null){
            Swal.fire({title: 'Error', text: 'La edad minima debe ser un numero entero', icon: 'error', confirmButtonText: 'Ok'});
        } else if (precioMinimo < 0 ) {
            Swal.fire({title: 'Error', text: 'Mira que si pones negativo vas a estar haciendo caridad', icon: 'error', confirmButtonText: 'Ok'});
        } else if (edadMinima < 0 ) {
            Swal.fire({title: 'Error', text: 'Si con menores estas en un quilombo, no me quiero imaginar con fetos', icon: 'error', confirmButtonText: 'Ok'});
        } else if (edadMinima > 100 ) {
            Swal.fire({title: 'Error', text: 'Es un funeral acaso?', icon: 'error', confirmButtonText: 'Ok'});
        } else {
            eventos = JSON.parse(localStorage.getItem('eventos'))
            if (eventos==null) {eventos = []}
            eventos.push({nombre: nombre, ubicacion: ubicacion, fecha: fecha, precioMinimo: precioMinimo, edadMinima: edadMinima, cantidadDeEntradas: cantidadDeEntradas})
            localStorage.setItem("eventos", JSON.stringify(eventos))
            console.log(eventos)
            Swal.fire({title: 'Evento creado', text: 'El evento \"' + nombre + '\" se creo correctamente', icon: 'success', confirmButtonText: 'Ok'});
            setTimeout(() => {window.location.href = "./principal.html"}, 3000)
        }
    }
}