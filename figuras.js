console.group("Cuadrado");

function perimetroDelCuadrado(lado){
 return lado*4;
}

function AreaDelCuadrado(lado){
    return lado*lado;
}


console.groupEnd();
console.group("Triángulo");

function PerimetroTriangulo(lado1,lado2,baseDelTriangulo){
    return lado1+lado2+baseDelTriangulo;
}

function AreaTriangulo(alturaTriangulo,baseDelTriangulo){
     return (alturaTriangulo*baseDelTriangulo)/2;
}
console.groupEnd();

console.group("Circulo");

function diametro(radio){
    return radio*2;
}
const PI=Math.PI;//PI
console.log("Pi es:" + PI);
function perimetroDelCirculo(radio){
    const DiametroCirculo=diametro(radio);
    return DiametroCirculo*PI;
}
function AreaCirculo(radio){
    return (radio*radio)*PI;
}
console.groupEnd();

