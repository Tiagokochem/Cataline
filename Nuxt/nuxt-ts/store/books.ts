import { Module, VuexModule } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

@Module( naome: 'books', stateFactory: true, namespace: true)
export default class Books extends VuexModule {
  count = 0 
 get $count(){
   return this.count
 }

}