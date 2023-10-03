let miRefran;
miRefran = "la vida es como una bicicleta, para mantener el equilibrio hay que seguir adelante";

let longitudRefran = miRefran.length;

let novenaLetra = miRefran.charAt(8);

let ultimaLetra = miRefran.charAt(miRefran.length - 1);

let indicePalabra = miRefran.indexOf("que");

if (indicePalabra < 0) {
  indicePalabra = miRefran.indexOf("en");
}

miRefran = miRefran.replace("en", "xxx");

miRefran = miRefran.toUpperCase();

console.log(miRefran); 

console.log(longitudRefran);

console.log(novenaLetra);

console.log(ultimaLetra);

console.log(indicePalabra);