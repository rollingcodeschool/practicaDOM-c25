function cambiarTexto(){
    console.log('Este mensaje es de la funcion cambiarTexto')
    // const parrafo = document.getElementById('parrafo')
    // const parrafo = document.getElementsByClassName('lead')
    // const parrafo = document.getElementsByTagName('p')
    const parrafo = document.querySelector('#parrafo')
    // const parrafo = document.querySelectorAll('.lead')
    console.log(parrafo)
    // parrafo.textContent = 'Mundial 2026 ⚽'
     parrafo.innerHTML = '<strong class="color-parrafo">Mundial</strong> 2026 ⚽'
}

const ocultarParrafo = ()=>{
    const parrafoOculto =  document.getElementById('parrafo-oculto')
    const botonOcultar = document.querySelectorAll('button')

    if(botonOcultar[3].textContent === 'Ocultar'){
        parrafoOculto.classList.add('d-none')
        // parrafoOculto.className = 'd-none'
        botonOcultar[3].textContent = 'Mostrar'
        botonOcultar[3].classList.replace('btn-danger','btn-success')
    }else{
        parrafoOculto.classList.remove('d-none')
        botonOcultar[3].textContent = 'Ocultar'
        botonOcultar[3].classList.replace('btn-success','btn-danger')
    }
}

const eliminarParrafo = ()=>{
    const parrafo = document.getElementById('parrafo-eliminar')
    //eliminar un elemento del html
    parrafo.remove()
    botonEliminar.classList.add('disabled')
}

const crearTarea = (e)=>{
    e.preventDefault()
    //tomar el texto del input
    //? opcion 1
    const inputTarea = document.querySelector('#tarea').value
    const ul = document.querySelector('#listaTareas');
    const regExp = /^[a-zA-Z0-9ñÑ ]+$/
    console.log(regExp.test(inputTarea))
    //!false
    if(!regExp.test(inputTarea)){
        return alert('valor invalido')
    }
    //crear el li
    // const li = document.createElement('li'); //<li> </li>
    //estilizar el li
    // li.textContent = inputTarea;//<li>hola </li>
    // li.classList.add('list-group-item') //<li class='list-group-item'>hola </li>
    // ul.appendChild(li)

    //?opcion 2
    ul.innerHTML += `<li class='list-group-item'>${inputTarea}</li>`

    formularioTarea.reset()
}

const botonEliminar = document.querySelector('#btnEliminar')
const formularioTarea = document.querySelector('#formTarea')


botonEliminar.addEventListener('click', eliminarParrafo )
formularioTarea.addEventListener('submit', crearTarea)
// como llamar a una funcion si tiene uno o mas parametros
// botonEliminar.addEventListener('click', ()=> eliminarParrafo('hola mundo') )