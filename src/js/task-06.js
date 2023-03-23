const input = document.querySelector('input')

input.addEventListener('blur', validarSimbolo)

function validarSimbolo() {
    let cantidadSimbolos = this.value.length;
    let reglaCantidadSimbolos = this.dataset.length;
    if(cantidadSimbolos == reglaCantidadSimbolos){
        input.setAttribute('class', 'valid')
        // this.Style.borderColor = '#4caf50'
    }
     else{
        input.setAttribute('class', 'invalid')
        }
        console.log(cantidadSimbolos);

}