//ELEMENTOS INVOCADOS
const var1 = document.querySelector('#valor1');
const var2 = document.querySelector('#valor2');
const btn = document.querySelector('#botonCalculo');
const pResult = document.querySelector('#result');
//ELEMENTOS INVOCADOS

//EVENTOS
btn.addEventListener('click', operacion);
//EVENTOS

//FUNCIONES
function operacion(){
    const seleccionUsuario = Number(prompt('Seleccione el tipo de operacion que quiera realizar:\n 1.SUMA\n 2.RESTA\n 3.DIVISION\n 4.MULTIPLICACION'));

    if(seleccionUsuario == 1){
        const num1 = Number(var1.value);
        const num2 = Number(var2.value);
        const result = (num1 + num2);

        pResult.innerText = "Resultado: " + result;
        return;
    } else if(seleccionUsuario == 2){
        const num1 = Number(var1.value);
        const num2 = Number(var2.value);
        const result = (num1 - num2);

        pResult.innerText = "Resultado: " + result;
        return;
    } else if(seleccionUsuario == 3){
        const num1 = Number(var1.value);
        const num2 = Number(var2.value);
        const result = (num1 / num2);

        pResult.innerText = "Resultado: " + result;
        return;
    } else if(seleccionUsuario == 4){
        const num1 = Number(var1.value);
        const num2 = Number(var2.value);
        const result = (num1 * num2);

        pResult.innerText = "Resultado: " + result;
        return;
    } else{
        alert('Ingresa alguno de los numeros indicados');
        operacion();
        return
    }
}