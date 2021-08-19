//Código del cuadrado
console.group("Cuadrado");
const ladoDelcuadrado = 5;
console.log("Los lados del cuadrado mide: "+ ladoDelcuadrado+" cm");

const perimetroDelCuadrado=ladoDelcuadrado*4;
console.log("El perimetro del cuadrado es: "+ perimetroDelCuadrado+" cm");

const AreaDelCuadrado=ladoDelcuadrado*ladoDelcuadrado;
console.log("El área del cuadrado es: "+ AreaDelCuadrado+ " cm^2" );

console.groupEnd();
console.group("Triángulo");
//Codigo del Triangulo

const lado1=6;
const lado2=6;
const baseDelTriangulo=4;
const alturaTriangulo=5.5;
console.log("La altura del triangulo es: "+ alturaTriangulo + " cm");
console.log("Los lados del Triangulo son: "+lado1+"cm, "+lado2+ "cm, "+baseDelTriangulo+"cm");

const PerimetroTriangulo=baseDelTriangulo+lado2+lado1;
console.log("El perímetro del Triágulo es: "+PerimetroTriangulo+"cm");
const AreaTriangulo=((alturaTriangulo*baseDelTriangulo)/2);
console.log("El área del Triángulo es: "+AreaTriangulo+"cm^2");

console.groupEnd();

console.group("Circulo");

const radio=4;
console.log("El Radio del circulo es: "+radio+" cm");
const diametro=radio*2;
console.log("El Diametro del circulo es: "+diametro+" cm");
const PI=Math.PI;//PI
console.log("Pi es:" + PI);
const perimetro=PI*diametro;
console.log("El Perimetro del circulo es: "+perimetro+" cm");
const AreaCirculo=(radio*radio)*PI;
console.log("El Área del circulo es: "+AreaCirculo+" cm^2");
console.groupEnd();

