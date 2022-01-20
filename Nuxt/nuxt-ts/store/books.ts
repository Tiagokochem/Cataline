import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'
import { Book } from '@/models'

@Module( naome: 'books', stateFactory: true, namespace: true)
export default class Books extends VuexModule {
  private books = [] as Book[]
  private book = {} as Book

  
 public get $all(){
  return this.books
 }

 public get $single(){
  return this.books
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

 }
 