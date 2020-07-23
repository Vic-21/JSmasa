//Taller 26
var cuenta={
   titular:"Alex",
   saldo: 0 ,

   ingresar: function (ingreso){
       console.log ("Se ha consignado:" + ingreso + "euros");
       return this.saldo+ingreso;
   },
   retirar: function (egreso){
      console.log("Se ha descontado:"+ egreso);
      return this.saldo-egreso
   },
   informe: function(estado){
    console.log("Nombre del Titular:", this.titular);
    console.log("El saldo actual de su cuenta es:", this.saldo);
   }
}
console.log (cuenta.titular);
console.log (cuenta.saldo);
console.log ("-----------");
let ingreso=prompt("Digite el valor a consignar");
cuenta.ingresar(ingreso);
let retiro=prompt("Digite el valor a retirar");
cuenta.retirar(retiro);
cuenta.informe();

//Taller 25 en el otro repositorio
///Taller 24
let peso, altura; //declaro variables
peso= prompt ("Ingrese su peso"); //asigno valores
altura= prompt ("Ingrese su altura"); //asigno valores

function IMC (peso, altura){
    let resultado = peso/(altura^2);
     document.write("Su índice de masa corporal es= " + resultado);
}
IMC(peso,altura);