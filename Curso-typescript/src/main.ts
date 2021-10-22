//interface Veiculo {
//    rodas: number
//    acelerar?: () => void
//    frear?: () => void
//}
//
//interface Moto extends Veiculo{
//    capacete: boolean
//    empinar?: () => void
//}
//
//class novoVeiculo implements Veiculo{
//    rodas: number
//
//    constructor(rodas: number){
//        this.rodas = rodas
//    }
//
//    let hornit: Moto 
//
//    hornit.rodas.toString(12312)
//}
//
//interface Post{
//    id: number
//    title: string
//    description: string
//}
//
//
//type PostPreview = Pick<Post1, 'id' | 'title'>
//
//let post1: PostPreview
//
//post1.id.console.log(123)
//
//post.

//import { sum } from './calculator.js'
//console.log(sum(1, 5))
//

import axios from 'axios'
import Simplebar from 'simplebar'


axios.get('/todos', {data? })


const simplebar = new Simplebar()