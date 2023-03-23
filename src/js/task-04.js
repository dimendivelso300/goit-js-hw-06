let counterValue = 0;
const valueSpan = document.getElementById('value');
  valueSpan.textContent = counterValue;

  // Agregar escuchadores de eventos a los botones
  const incrementButton = document.querySelector('[data-action="increment"]');
  const decrementButton = document.querySelector('[data-action="decrement"]');
incrementButton.addEventListener('click', funcion());
// decrementButton.addEventListener('click', decremento());

  function incremento(){
    counterValue++;
    valueSpan.textContent = counterValue;
  }
  function decremento(){
    counterValue--;
    valueSpan.textContent = counterValue;
  };
