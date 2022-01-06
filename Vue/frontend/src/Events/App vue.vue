<template>
  <buttonStyled text="Botão" @passarinho="action($event" />
          
     </template>


<script lang="ts">
    import {{defineComponent}} from 'vue'
import ButtonStyled from '@components/Events/ButtonStyled.vue'

    export default Vue.extend({
        components: {ButtonStyled},
        methods:{
            action(event: string){
                console.log('event')
            }
        }
        
    })
</script>

<style scoped>

</style>