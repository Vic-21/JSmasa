let peso, altura; //declaro variables
peso= prompt ("Ingrese su peso"); //asigno valores
altura= prompt ("Ingrese su altura"); //asigno valores

function IMC (peso, altura){
    let resultado = peso/(altura^2);
     document.write("Su índice de masa corporal es= " + resultado);
}
IMC(peso,altura);