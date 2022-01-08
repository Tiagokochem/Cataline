<template>
  <button @click="show !show">Toogle</button>

  <transition name="fade">
      <h1 v-if="show">Cataline</h1>
  </transition>


          
</template>


<script lang="ts">
    import {{defineComponent}} from 'vue'


    export default Vue.extend({
       
        
    })
</script>

<style scoped>


.fade-enter-from, fade.leader-to{
    opacity: 0
}

fade-enter-active, .fade-leade-active{
    transition: : opacity 0.5;
}


</style>


/* 
v-enter-from (de onde estar vindo)
v-enter-active (como vai acontecer)
v-enter-to (para onde está indo)

v-leave-from (de onde estar vindo)
v-leave-active (como vai acontecer)
v-leave-to (para onde está indo)

O nome inicial `v` depende do atributo `name`
*/