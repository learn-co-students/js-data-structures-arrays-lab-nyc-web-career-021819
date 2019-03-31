// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendDriver(name) {
   drivers.push("Ralph")
 }

function destructivelyPrependDriver(name){
  drivers.unshift('Bob')
}
 function destructivelyRemoveLastDriver(){
   drivers.pop()
 }
 function destructivelyRemoveFirstDriver(){
   drivers.shift()
 }
 function appendDriver(name){
  const newDrive =  [...drivers.slice(), name]
  return newDrive
 }
 function prependDriver(name){
  const newDrive =  [name,...drivers.slice()]
  return newDrive
 }

function removeLastDriver(){
  const newDrive = drivers.slice(0, -1)
  return newDrive
}

function removeFirstDriver(){
  const newDrive = drivers.slice(1)
  return newDrive
}
