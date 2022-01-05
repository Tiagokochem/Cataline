<template>
  <div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
     return {
       message: 'Hello Cataline'
     }
  },
  beforeCreate(){
    console.log('Antes da Criação')
  },
  created(){
    console.log('Depois da Criação!')
  }
})
</script>

<style scoped>

</style>