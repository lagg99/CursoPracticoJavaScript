/* Para obtener datos que digite el usuario y poder interactuar con esos datos:
Se debe ejecutar en la consola del navegador el comando document.getElementById("aqui va el id del input")
 */
function PerimetroDelCuadrado(lado){
    return lado*4;
}

function calcularPerimetroCuadrado(){
    const input=document.getElementById("InputCuadrado").value;//Esto permite obtener lo que ingrese el usuario en la etiqueta input
    const value=input.nodeValue;//aquí almacenamos el valor
    
    const perimetro=PerimetroDelCuadrado(input);
    alert(perimetro);

}

function AreaDelCuadrado(lado){
    return lado*lado;
}

function calcularAreaDelCuadrado(){
    const input=document.getElementById("InputCuadrado").value;//se captura y almacena lo que ingresa el usuario
    //const area= AreaDelCuadrado(input);
    const resultado=input*input;
    alert(resultado);
}

function CalcularAlturaTrianguloIsosceles(){
    const lado=document.getElementById("lado").value;
    const base=document.getElementById("base").value;
    const altura= Math.sqrt((Math.pow(lado, 2) - (Math.pow(base,2)/4)));
    if(lado===base){
        alert("Los lados del triangulo que digitas son iguales, por lo tanto no es un isósceles. Es un equilátero");
    }else{
        alert(altura);
    }
  
  
}
