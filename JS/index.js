/* let miNombre = prompt('Ingrese su nombre')
let miApellido = prompt('Ingrese su apellido')
let miEdad = Number(prompt('Ingrese su edad'))
let miMascota = prompt('Ingrese el nombre de su mascota')
let edadMascota = Number(prompt('Ingrese la edad de su mascota'))
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)
let nombreCompleto = miNombre + ' ' + miApellido
let textoPresentacion = 'Mi nombre es ' + nombreCompleto + '. Tengo ' + miEdad + ' anios y una mascota llamada ' + miMascota + ' de ' + edadMascota + ' anios'
console.log(textoPresentacion)
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota
console.log(sumaEdades)
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdades) */
const alumno = {
    nombre: "Pablo",
    apellido: "Marmol",
    edad: 23,
    nacionalidad: "Argentina",
    estudios: "secundario"
}
console.table(alumno)
console.table(alumno.nombre)
console.table(alumno.apellido)
console.table(alumno.edad)
console.table(alumno.nacionalidad)
console.table(alumno.estudios)
const frutas = ['Manzana', 'Pera', 'Naranja', 'Pomelo', 'Sandía']
console.table(frutas)
console.table(frutas[0])
console.table(frutas[1])
console.table(frutas[2])
console.table(frutas[3])
console.table(frutas[4])
const numeros = [23, 34, 56, 7, 10]
console.table(numeros)
console.table(numeros[0])
console.table(numeros[1])
console.table(numeros[2])
console.table(numeros[3])
console.table(numeros[4])
const familia = [
    {
        rol: "Padre",
        nombre: "Juan"
    },
    {
        rol: "Madre",
        nombre: "Ana"
    },
    {
        rol: "Hija",
        nombre: "Josefina"
    },
    {
        rol: "Hijo",
        nombre: "Bruno"
    },
    {
        rol: "Hijo",
        nombre: "Nahuel"
    }
]
console.table(familia)
console.table(familia[0])
console.table(familia[1])
console.table(familia[2])
console.table(familia[3])
console.table(familia[4])
const textoAleatorio = `Me gusta la ${frutas[1]}, comería ${numeros[3]}, mi ${familia[4].rol} ${familia[4].nombre} está cansado de que se la ofrezca`
console.log(textoAleatorio)