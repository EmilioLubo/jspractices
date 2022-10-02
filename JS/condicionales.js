/* 
const num1 = prompt("Ingrese un número")
const num2 = prompt("Ingrese un número")
const num3 = prompt("Ingrese un número") */
/*1
if(num1 > num2){
    console.log(`${num1} es mayor que ${num2}`)
} else{
    console.log(`${num1} no es mayor que ${num2}`)
}*/
/*2
if(num1 === num2){
    console.log(`${num1} es igual que ${num2}`)
} else{
    console.log(`${num1} no es igual que ${num2}`)
}*/
/*3
if(num1 > num2){
    console.log(`${num1} es mayor que ${num2}`)
} else if(num2 > num1){
    console.log(`${num2} no es mayor que ${num1}`)
} else if(num1 === num2){
    console.log('Los números son iguales')
}*/
/*4
if(num1 < num2 && num1 < num3){
    console.log(`${num1} es el número mas chico`)
} else if( num2 < num1 && num2 < num3){
    console.log(`${num2} es el número mas chico`)
} else if(num3 < num2 && num3 < num1){
    console.log(`${num3} es el número mas chico`)
}*/
/*5
const persona1 = {
    nombre: "Carlos",
    edad: 34,
    altura: 1.70
}
const persona2 = {
    nombre: "Miguel",
    edad: 54,
    altura: 1.60
}
if(persona1.edad > persona2.edad && persona1.altura > persona2.altura){
    console.log(`${persona1} es mayor y más alto que ${persona2}`)
} else if(persona1.edad > persona2.edad && persona1.altura < persona2.altura){
    console.log(`${persona1} es mayor y ${persona2} es más alto`)
}else if(persona1.edad < persona2.edad && persona1.altura < persona2.altura){
    console.log(`${persona2} es mayor y más alto que ${persona1}`)
} else if(persona1.edad < persona2.edad && persona1.altura > persona2.altura){
    console.log(`${persona2} es mayor y ${persona1} es más alto`)
}*/
/*6
const nombre = prompt("Ingrese su nombre")
const edad = Number(prompt("Ingrese su edad"))
const altura = Number(prompt("Ingrese su altura"))
const vision = Number(prompt("Ingrese su nivel de visión"))
if(edad >= 18 && altura > 1.5 && vision >= 8){
    console.log(`${nombre} está capacitado para conducir.`)
} else{
    console.log(`${nombre} no está capacitado para conduicir, verifique los datos.`)
}*/
/*7
const nombre = prompt("Ingrese su nombre")
const pase = prompt("Ingrese su tipo de pase")
const entrada = prompt("¿Tiene entrada?")
if(nombre.toUpperCase() === "EMILIO" || pase.toUpperCase() === "VIP"){
    console.log("Bienvenido")
} else if(entrada.toUpperCase() === "SI"){
    let usaEntrada = prompt("¿Desea utilizarla?")
    if(usaEntrada.toUpperCase() === "SI"){
        console.log("Bienvenido")
    } else{
        console.log("adios")
    }
} else{
    let compraEntrada = prompt("¿Desea comprar una entrada?")
    let dinero = Number(prompt("Ingrese monto disponible"))
    if(compraEntrada.toUpperCase() === "SI"){
        if(dinero >= 1000){
            console.log("Entrada emitida, bienvenido.")
        } else{
            console.log("Monto insuficiente")
        }
    } else{
        console.log("adios")
    }
}*/
/*8
const numeroIncognita = 6
const numeroIngresado = prompt("Adivine el número")
if(numeroIngresado < numeroIncognita){
    console.log("El número ingresado es menor, vuelve a intentarlo")
    numeroIngresado = prompt("Adivine el número")
    if(numeroIngresado < numeroIncognita){
        console.log("El número ingresado es menor, vuelve a intentarlo")
        numeroIngresado = prompt("Adivine el número")
        if(numeroIngresado === numeroIncognita){
            console.log("acertaste")
        }
    } else if(numeroIngresado > numeroIncognita){
        console.log("El número ingresado es mayor, vuelve a intentarlo")
        numeroIngresado = prompt("Adivine el número")
        if(numeroIngresado === numeroIncognita){
            console.log("acertaste")
        }
    } else if(numeroIngresado === numeroIncognita){
        console.log("acertaste")
    }
} else if(numeroIngresado > numeroIncognita){
    console.log("El número ingresado es mayor, vuelve a intentarlo")
    numeroIngresado = prompt("Adivine el número") 
    if(numeroIngresado < numeroIncognita){
        console.log("El número ingresado es menor, vuelve a intentarlo")
        numeroIngresado = prompt("Adivine el número")
        if(numeroIngresado === numeroIncognita){
            console.log("acertaste")
        }
    } else if(numeroIngresado > numeroIncognita){
        console.log("El número ingresado es mayor, vuelve a intentarlo")
        numeroIngresado = prompt("Adivine el número")
        if(numeroIngresado === numeroIncognita){
            console.log("acertaste")
        }
    } else if(numeroIngresado === numeroIncognita){
        console.log("acertaste")
    }
} else if(numeroIngresado === numeroIncognita){
    console.log("acertaste")
}*/
/* 9
const edad = Number(prompt("Ingrese su edad"))
if(edad >= 0 && edad <= 12){
    console.log("Eres un infante.")
} else if(edad <= 18){
    console.log("Eres adolescente.")
} else if( edad <= 45){
    console.log("Eres un mayor joven.")
} else if(edad <= 100){
    console.log("Eres anciano")
} else{
    console.log("¿En serio tienes esa edad?")
} */
/* 10
const jugador1 = prompt("piedra, papel o tijera")
const jugador2 = prompt("piedra, papel o tijera")
if(jugador1.toUpperCase() === "PIEDRA"){
    if(jugador2.toUpperCase() === "PIEDRA"){
        console.log("Empate")
    }else if(jugador2.toUpperCase() === "PAPEL"){
        console.log("Gana jugador 2")
    } else if(jugador2.toUpperCase() === "TIJERA" ){
        console.log("Gana jugador 1")
    } else{
        console.log("Jugador 2 hizo trampa.")
    }
} else if(jugador1.toUpperCase() === "PAPEL"){
    if(jugador2.toUpperCase() === "PIEDRA"){
        console.log("Gana jugador 1")
    }else if(jugador2.toUpperCase() === "PAPEL"){
        console.log("Empate")
    } else if(jugador2.toUpperCase() === "TIJERA" ){
        console.log("Gana jugador 2")
    } else{
        console.log("Jugador 2 hizo trampa.")
    }
} else if(jugador1.toUpperCase() === "TIJERA"){
    if(jugador2.toUpperCase() === "PIEDRA"){
        console.log("Gana jugador 2")
    }else if(jugador2.toUpperCase() === "PAPEL"){
        console.log("Gana jugador 1")
    } else if(jugador2.toUpperCase() === "TIJERA" ){
        console.log("Empate")
    } else{
        console.log("Jugador 2 hizo trampa.")
    }
} else{
    console.log("Jugador 1 hizo trampa.")
} */
/* 11
const color = prompt("Ingrese un color")
switch(color.toUpperCase()){
    case "BLANCO": console.log("Falta de color.")
    break
    case "NEGRO":console.log("Falta de color.")
    break
    case "VERDE": console.log("El color de la naturaleza.")
    break
    case "AZUL": console.log("El color del agua")
    break
    case "AMARILLO": console.log("El color del sol")
    break
    case "ROJO": console.log("El color del fuego")
    break
    case "MARRON": console.log("El color de la tierra")
    break
    default: console.log("Excelente elección, no lo teníamos pensado")
} */
/* 12
const n1 = Number(prompt("Ingrese un número"))
const n2 = Number(prompt("Ingrese un número"))
const op = prompt("Ingrese una operación")
switch(op.toUpperCase()){
    case "SUMA": console.log(n1 + n2)
    break
    case "RESTA": console.log(n1 - n2)
    break
    case "MULTIPLICACION": console.log(n1 * n2)
    break
    case "DIVISION": if( n2 !== 0){
        console.log(n1 / n2)
        }else{
            console.log("Error. El divisor ingresado es 0")
        }
    break
    default: console.log("Error en los ingresos")
} */
13
const nombre = prompt("Ingrese su nombre")
const apellido = prompt("Ingrese su apellido")
const dni = prompt("Ingrese su dni")
const fDeNac = prompt("Ingrese su fecha de nacimiento")
const domicilio = prompt("Ingrese su domicilio")
const aval = prompt(`
                     Nombre = ${nombre}
                     Apellido = ${apellido}
                     Dni = ${dni}
                     Fecha de Nacimiento = ${fDeNac}
                     Domicilio = ${domicilio}
                     ¿Los datos son correctos?`)
if(aval.toUpperCase() === "SI"){
    const DNI = {
        nombre: nombre,
        apellido: apellido,
        dni : dni,
        fDeNac: fDeNac,
        domicilio: domicilio
    }
    console.table(DNI)
    alert("¡Registro exitoso!")
} else{
    alert("Vuelva a intentarlo en un mes.")
}