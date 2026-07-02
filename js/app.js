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