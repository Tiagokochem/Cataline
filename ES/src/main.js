//const showProduct = (product, price) => {
//    console.log('O valor de ${product} é R$ ${Math.round(price), pode comprar!} ')
//}
//
//
//showProduct('Camisa', 20.2)
//
//
//const showFullName =({firstName, secondName }) => {
//    console.log('${firstNaome} ${secondName} ')
//}
//
//showFullName(person)


//const numbers = [1,2,3,4,5]
//
//const [first, second, ...rest] = numbers
//
//console.log(rest)
//

//function Car(brand, price){
//    this.brand = brand
//    this.price = price
//}
//
//const civic = new Car('honda', 130)
//const hb20 = new Car('Hyndai' 80)
//
//console.log(civic)
//console.log(hb20)

//class Car{
//    constructor(brand, price){
//        this.brand = brand
//        this.price = price
//    }
//}
//
//run(){
 //   console.log(correr)
//}
//
//const civic = new Car('Honda', 130)
//civic.run()


//class Person{
//    constructor(name) {
//        this._name = name
//    }
//
//    get name(){
//        return this.name
//    }
//
//    set name(newName){
//        this._name= newName
//    }
//}
//
//const person = new Person('Yung Silva')
//
//person.name = 'João Silva'
//
//console.log(person.name)

//class Veiculo{
//    constructor(rodas){
//        this.rodas = rodas
//    }
//    acelerar(){
//        console.log('acelerou')
//    }
//}
//
//class Moto extends Veiculo{
//    constructor(rodas, capacete){
//        super(rodas) // new Veiculo(2)
//        this.capacete = capacete
//    }
//
//    emprinar(){
//        console.log(`empinou com ${this.rodas} rodas`)
//    }
//
//    taUsandoCapacete(){
//        console.log(this.capacete)
//    }
//}
//
//const bross = new Moto(2, false)

// console.log('Hello World')

// import* as calculator from './calculator'

// console.log(calculator.sum(5,5))

const myPromise = () => new Promise((resolve, reject) => 
{ return setTimeout() => { reject('ok')}, 2000})

//myPromise().then((responde)=> {
//    console.log('primeira vez')
//}).cath((error) => {
//    console.warn(error)
//})


async function exec(){
    const response = await myPromise()
    console.log(response)
}


const exec = async () => {
    try{
        await myPromise()
        console.log('primeira vez')
    } catch (error) {
        console.warn(error)
    }finally{
        console.log('finalizou')
    }
}

exec()