<template>
   <input type="text" @keyup.k="something"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        
    }
    return {
      something(){
        console.log('Hello Cataline')
       }
    }
})
</script>

<style scoped>

</style>