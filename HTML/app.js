//var button = document.querySelector('#app button')
//var input = document.querySelector('#app input#idade')


//button.addEventListener('click', function (event) {
  //  event.preventDefault()
 //   console.log(event)
//})

//var element = document.querySelector('div#app')
//element.style.backgroundColor ='#000'
//element.style.height = '200px'
//element.style.width= '220px'

//<a href="https://google.com">Visitar o google</a>

//var link = document.createElement('a')
//var textlink = document.createTextNode ('Visitar Google')
//
//link.setAttribute('href', 'http://google.com')
//link.appendChild(textlink)
//
//app.appendChild(link)


//var link = document.createElement('a')
//var textlink = document.createTextNode('Tiago')
//
//link.setAttribute('href', 'http:tiagoconsultor.com')
//
//link.appendChild(textlink)
//
//app.appendChild(link)

//function doAction(){
//  console.log('executou!')
//}
//
//setInterval(doAction, 2000)
//
//
//localStorage.theme = 'dark'
//
//var voceComprouOsProdutos = new Promise(function (resolve, reject)){
//
//}
//
//voceComprouOsProdutos.then(function(products){
//  console.log(products)
//})
//.catch(function(error){
//  console.log(error)
//})
//

// https://api.github.com/users



// var button = document.querySelector('#app button')

//button.addEventListener('click', function(){
//  var xhr = new XMLHttpRequest()
//
//  xhr.open('GET', 'https://api.github.com/users')
//  xhr.send()
//
//  xhr.onreadystatechange = function(){
//    if(xhr.readyState ===4) {
//      console.log(data[0].login))
//    }
//   }
//})
//
//var button = document.querySelector('#app button')
//
//button.addEventListener('click', function(){
//
//  axios.get('https://api.github.com/users') 
//    .then(function(response)
//      console.log('response')
//    } )
//    .catch(function(error) 
//      console.log('error')
//    )}
//  })
// 


var submiteButton = document.querySelector('#app form button')
var submiteButton = document.querySelector('#app form input')
var submiteButton = document.querySelector('#app main')

submiteButton.addEventListener('click', run)

function run(event){
  event.preventDevault()

  var zipCode = zipCode.value

  zipCode = zipCode.replace(' ', '')
  zipCode = zipCode.replace('-', '')
  zipCode = zipCode.trim()

axios
  .get('https://viacep.com.br/ws/' + zipcode + '/json')
  .then (function (response) {
    if(response.data.erro){
     throw new Error('CEP INVALIDO')
    }
    content.innerHTML = ''
   createLine(responde.data.logradouro)    
   createLine(responde.data.localidade + ' / ' + responde.data.uf)  
   createLine(responde.data.uf) 
   createLine(responde.data.bairro)    
  })
  .catch(function (error){
    content.innerHTML = ''
    createLine('Ops, algo deu errado')
  })
}

function createLine(text){
  var line = document.createElement('p')
  var text = document.createTextNode(text)
  line.appendChild(text)
  content.appendChild(line)

}


