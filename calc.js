const display = document.querySelector('.input')

const calcButton = document.querySelectorAll('.buttons');

let expression = '';

calcButton.forEach(buttons => {
  buttons.addEventListener('click', () => {
    const value = buttons.dataset.value;

    if(value === '=') {
      try{
        expression = eval(expression);
        display.value = expression;
      } catch {
        display.value = 'Error';
        expression = '';
      }
    } else if ( value === 'DEL') {
      expression = expression.slice(0, -1);
      display.value = expression;
    } else if (value === 'AC') {
      expression = '';
      display.value = expression;
    } else {
      expression += value;
      display.value = expression;
    }
  });
}
);

