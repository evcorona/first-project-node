//Ejercicio instalacion de librerias
//const moment = require('moment')
//console.log('hola koders',moment(new Date(),'yyyy-mm-dd hh:mm').toString())
const colors = require('colors')
console.log('Hola Veronica Corona'.rainbow); // rainbow

/**
Ejercicio
Crear un script que nos diga si una letra esta repetida en un arreglo 
y cuantas veces se repite la primera letra repetida de izq a derecha
*/
const letras = [ 'a', 'b', 'c', 'e', 'b', 'd', 'b', 'z' ]
// si al menos una letra se repite = true o false 
// la letra que se repite es b y aparece 3 veces
let repeatFlag = false
let summary = []
letras.forEach( (value,index) =>{
  let repeat = 0
  letras.forEach( val2 => {
    value === val2 ? repeat++ : repeat 
  })
  if(summary.indexOf(value)== -1) {
    summary.push(value) 
    summary.push(repeat)
  }
  repeat > 1 ? repeatFlag = true : repeatFlag
})

console.log("************Ejercicio************".rainbow)
console.log("Del siguiente arreglo".bold,letras)
console.log("¿Las letras se repitieron?".bold.white,repeatFlag)

for(i=0;i<summary.length;i++){
  console.log("La letra",summary[i].bold.magenta,"aparece",summary[i+1],"veces")
  i=i+1
}