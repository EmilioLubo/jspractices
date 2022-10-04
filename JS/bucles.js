/* 1
const n = Number(prompt('Ingrese un número'))
for(i = 1; i <= 10; i++){
    console.log(`${n} x ${i} = ${n * i}`)
} */
/* 2
let acumulado = 0
let n = Number(prompt('Ingrese un número'))
while(n !== 0){
    n = Number(prompt('Ingrese un número'))
    acumulado += n
}
console.log(acumulado) */
/* 3
const numeroIncognita = 45
let contador = 1
let ingreso = Number(prompt('Ingrese un número'))
while(ingreso !== numeroIncognita){
    contador++
    if(ingreso < numeroIncognita){
        console.log('El número ingresado es menor')
    } else{
        console.log('El número ingresado es mayor')
    }
    ingreso = Number(prompt('Ingrese un número'))
}
alert(`¡Felicitaciones!, lo has adivinado en ${contador} intentos.`) */
/* 4
const numero = 4
let contador = 0
for(let i = 2; i <= numero/2; i++){
    if(numero % i === 0){
    contador++
    }
}
if(contador === 0){
    alert(`${numero} es primo`)
} else{
    alert(`${numero} no es primo`)
} */
/* 5
const num = 120
const divisores = []
for(let i = 1; i <= num/2; i++){
    if(num % i === 0){
        divisores.push(i)
    }
}
console.log(divisores) */
/* 6
const personajes = ['Spiderman', 'Superman', 'Batman', 'Hulk', 'Capitán América', 'Linterna Verde', 'Venom', 'Thor', 'Dr. Strange', 'Carnage']
for(let personaje of personajes){
    console.log(`Esta vez será ${personaje}`)
} */
let numeros = [12, 34, 45, 13, 23, 62, 84, 12, 10, 23]
/* 7
for(let numero of numeros){
    console.log(2 * numero)
} */
/* 8
const familia = [
    {
        nombre: 'Emilio',
        rol: 'Padre',
        edad: 34,
        color: 'Amarillo'
    },
    {
        nombre: 'Ayelen',
        rol: 'Madre',
        edad: 27,
        color: 'Fuxia'
    },
    {
        nombre: 'Lautaro',
        rol: 'Hijo',
        edad: 10,
        color: 'Azul'
    },
    {
        nombre: 'Juana',
        rol: 'Hija',
        edad: 4,
        color: 'Rosa'
    },
    {
        nombre: 'Bella',
        rol: 'Mascota',
        edad: 3,
        color: 'Blanco'
    },
]
for(let integrante of familia){
    console.log(`${integrante.nombre} es ${integrante.rol} en esta familia, tiene ${integrante.edad} años y su color favorito es ${integrante.color}`)
} */
/* 9
for(let num of numeros){
    if(num % 2 !== 0){
        console.log(num)
    }
} */
/* 10
let pares = 0
let impares = 0
let n = Number(prompt('Ingrese un número'))
while(n !== 0){
    if(n % 2 === 0){
        pares += n
    } else{
        impares += n
    }
    n = Number(prompt('Ingrese un número'))
}
console.log(`Los pares suman ${pares}, los impares ${impares}`) */
/* 11
let mayor = 0
for(let numA of numeros){
    if(numA > mayor){
        mayor = numA
    }
}
12
let menor = mayor
for(let numA of numeros){
    if(numA < menor){
        menor = numA
    }
}
console.log(menor) */
/* 13
const jugador1 = prompt('Ingrese nombre del primer jugador')
const jugador2 = prompt('Ingrese el nombre del jugador 2')
let pje1 = 0
let pje2 = 0
let elec1
let elec2
while(pje1 !== 2 && pje2 !== 2){
    elec1 = prompt(`¿Piedra, papel o tijera? (${jugador1})`)
    elec2 = prompt(`¿Piedra, papel o tijera? (${jugador2})`)
    switch(elec1.toUpperCase()){
        case "PIEDRA": switch(elec2.toUpperCase()) {
                            case "PIEDRA":
                            console.log('empate')
                            break
                            case "PAPEL":
                            pje2++
                            console.log(`Gana ${jugador2}`)
                            break
                            case "TIJERA":
                            pje1++
                            console.log(`Gana ${jugador1}`)
                            break
                        }
        break
        case "PAPEL": switch(elec2.toUpperCase()) {
                            case "PIEDRA":
                            pje1++
                            console.log(`Gana ${jugador1}`)
                            break
                            case "PAPEL":
                            console.log('empate')
                            break
                            case "TIJERA":
                            pje2++
                            console.log(`Gana ${jugador2}`)
                            break
                        }
        break
        case "TIJERA": switch(elec2.toUpperCase()) {
                            case "PIEDRA":
                            pje2++
                            console.log(`Gana ${jugador2}`)
                            break
                            case "PAPEL":
                            pje1++
                            console.log(`Gana ${jugador1}`)
                            break
                            case "TIJERA":
                            console.log('empate')
                            break
                        }
        break
    }
}
if(pje1 > pje2){
    alert(`Ganó ${jugador1}`)
} else{
    alert(`Ganó ${jugador2}`)
} */
/* 14
let parte = ''
for(i = 0; i < 5; i++){
    parte += '*'
    console.log(parte)
}
15
for(i = 5; i > 0; i--){
    parte = parte.substring(0, parte.length - 1)
    console.log(parte)
} */
16
const arrayOrdenado = []
let mayor = 0
for(i = 0; i < numeros.length++; i++){
    for(let num of numeros){
        if(num > mayor){
            mayor = num
        }
    }
    arrayOrdenado.unshift(mayor)
    let index = numeros.indexOf(mayor)
    numeros.splice(index, 1)
    mayor = 0
}
console.log(arrayOrdenado)