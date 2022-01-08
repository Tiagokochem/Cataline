<template>
  <button @click="show !show">Toogle</button>

  <transition >

    enter-active-class="animate__slideInLeft"
    leave-active-class="animate__slideInRight"

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
       }
        
    })
</script>

<style scoped>





</style>

