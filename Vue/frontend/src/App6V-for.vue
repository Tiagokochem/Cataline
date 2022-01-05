<template>
    <div>
        <ul>
        <h1 
        <li v-for="product in products" v-bind:key="product.id">
            
            {{product.name}}

        </li>
</ul>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        

        return { 
            products: [
  { id: 1, name: 'Camisa', stock: true },
  { id: 2, name: 'Bota', stock: false },
  { id: 3, name: 'Chapéu', stock: false },
  { id: 4, name: 'Cinto', stock: true }
]
         }
    }
})
</script>

<style scoped>

</style>