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