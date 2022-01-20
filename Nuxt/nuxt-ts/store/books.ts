import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'
import { Book } from '@/models'

interface Show {
  id: Book['id']
}

@Module( name: 'books', stateFactory: true, namespace: true)
export default class Books extends VuexModule {
  private books = [] as Book[]
  private book = {} as Book

  
 public get $all(){
  return this.books
 }

 public get $single(){
  return this.book
 }

@Mutation
private SET_ALL(books: Book[]){
  this.books = books
}

@Mutation
private SET_SINGLE(book: Book){
  this.book = book
}


@Action
public async index(){
  const books =  await $axios.$get('/books')
  this.context.comit('SET_ALL', books)
}


@Action
public async show({ id}: Show ){
  const book =  await $axios.$get('/books/${id}')
  this.context.comit('SET_SINGLE', book)
}


 }
 