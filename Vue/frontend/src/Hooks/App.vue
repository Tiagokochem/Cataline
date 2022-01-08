<template>
  <button @click="show !show">Toogle</button>

  <transition   enter-active-class="animate__animate  animate__slideInLeft"
    leave-active-class="animate__animate  animate__slideInRight" 
    @after-enter="beforeEnter"
    >

  

      <h1 v-if="show">Cataline</h1>
  </transition>


          
</template>


<script lang="ts">
    import {{defineComponent}} from 'vue'
    import 'animate.css'
import { defineComponent } from '@vue/runtime-core'


    export default defineComponent({
       data(){
           return{
               show: false
           }
       },

       methods: {
           beforeEnter(element: HTMLElement){
               element.classList.add('test')
           }
       }
        
    })
</script>

<style scoped>


.test{
    background: green;
}


</style>

