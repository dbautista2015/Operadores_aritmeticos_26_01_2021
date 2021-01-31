//Operacion de concatenacion 

let nombre = "Diana Patricia";
let edad = 37;
let altura = 1.63;
let profesor = false;

// Primara manera de concatenar
console.log(nombre+edad); //una de las variables tiene que ser de tipo string

// segunda manera de concatenar
console.log(""+edad+altura);// Al principio del texto tiene que llevar 
                            // la inicializacion de tipo de datos estring 
                            // **Ejemplo las comillas**  
                            // (""), ('') que identifican que el tipo de dato 
                            // es string

// tercera manera de concatenar
console.log(nombre.concat(edad));//Usando el metodo **concat** 
                                // podemos concatener cualquier 
                                // tipo de datos siempre que la variable 
                                // sea de tipo string

// cuarta manera de concatenar
console.log(nombre, edad, profesor);  //Podemos concatenar las variables con **,** 
                            // pero al momento de visualizar toda la cadena 
                            // cambia **Ejemplo** si mesclamos un strin con 
                            // un numbre y un booleaon se mostrar en la pantall 
                            // pero se pordra diferenciar uno de otro ya que el 
                            // mensaje no se comportara como si guera un string 
                            // si un ropecabezas de cada tipo de dato en este 
                            // caso unsando **console.log()** no generar ningun 
                            // error pero al moneto de usar **document.write()** 
                            // no se vera el resulta deseado se mopstrar las 
                            // variables de tipo string pero las demos mostrara 
                            // el tipo de datp que conforma la variable y en 
                            // caso del evento **alert()** solo se podra usa 
                            // el simblo **+** para concatenar

// quinta manera de concatenar
console.log(`${nombre} ${edad}`);//Usando las comillas Backticks podemos 
                                // identificar cada variable de una manera 
                                // mas comda y la validacion del tipo de dato 
                                // de cada una sera mas comoda

//Operación de decremento
let x = 10;
//x -= 2; cuando se quiere incrementar de dos en dos o más
x--;
console.warn("Operacion de decremento", x);

//Operación de división
let u=10;
// u/2; 
console.warn(`Operación de división ${u/2} valor inicial ${u}`);

//Operación de exponenciación
let z =10;

console.warn(`Operación de exponenciación ${z**6} valor inicial ${z}`);

//Operación incremento
let o = 10;
o++;
console.warn(`Operación incremento ${o}`);

//operación multiplicación
let h =10;
console.warn(`operación de multiplicación ${h*6} valor inicial ${h}`);

//operación módulo
let c = 10;
console.warn()


//Operacion de resta
let g = 10;
console.warn(`Operación resta ${g-2} valor inicial ${g}`);

//**Ley de signos**
//   +  +  + = +
//   -  +  - = +
//   -  +  + = -
//   +  +  - = -

//Operacion de unaria negativo
let p = 10;
//let v =-p;
console.warn(`Operacion de unaria negativo ${-p}`);

//Operacion de unaria más (plus)

let f = 10;
console.warn(`Operacion de unaria más ${+f}`);