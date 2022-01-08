<template>
  <ul>
    <li @click="CurrentView= 'Home'">Home</li>
    <li @click="CurrentView= 'About'">Sobre</li>
    <li @click="CurrentView= 'Contect'">Contato</li>

  </ul>

  <component :is="currentView" />


          
</template>


<script lang="ts">
    import {{defineComponent}} from 'vue'
    import Home from '@/pages/Home.vue'
    import About from '@/pages/About.vue'
    import Contect from '@/pages/Contect.vue'

    export default Vue.extend({
        components: {Home, About, Contect},
        data(){
          return{
            currentView: 'Home'
          }
        }
        
    })
</script>

<style scoped>

</style>