<template>
   <p v-once>Estoque Inicial: {{stock}}</p>
   <p>Estoque Atualizado: {{stock}}</p>

   <button @click="stock++">Aumentar estoque</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {
            stock: 1
        }
    }
})
</script>

<style scoped>

</style>