// varaibles
var variable = "soy una variable" //esta obsoleta, no se una
const constante = "soy una varible especial" //es incambiable
let constante1 = "soy otra variable" //es una variable que ahorra recursos, no recomendada cuando puedes usar const
// operaciones algebraicas + - * /

const valor1 = 5
const valor2 = 10

console.log(valor1 + valor2)
console.log(valor1 - valor2)
console.log(valor1 * valor2)
console.log(valor1 / valor2)

// igual que
const esIgualQue = valor1 == valor2
console.log(esIgualQue)
// diferente que

const esDiferenteQue = valor1 !== valor2
console.log(esDiferenteQue)

if (valor1 == valor2)
    {console.log("chanchito feliz")}
else
    {console.log("chanchito triste")}

//menor que y mayor que

//mayor que
const mayorQue = valor1 > valor2
    console.log(mayorQue)

//menor que
const menorQue = valor1 < valor2
    console.log(menorQue)

//mini proyecto
//de dia, tarde, noche
const tiempoActual = 25
if (tiempoActual < 5)
    {console.log("es de madrugada")}
    else if (tiempoActual < 12)
        {console.log("es de dia")}
    else if (tiempoActual < 18)
        {console.log("es la tarde")}
    else if (tiempoActual <= 24)
        {console.log("es de noche")}
    else 
        {console.log("el dia solo tiene 24 horas")}    