<template>
  <a 
    v-bind:href="product.url"
    v-bind:class="productClass"
    >
    {{product.name}}
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
     return {
         product: {
             name: 'Camisa',
             url: 'http:tiago.com',
             stock: true
         }
     }
  },
  computed: {
      productClass(): string {
          return this.product.stock ? 'sucess' : 'danger'
      }
  }
})
</script>

<style>

.sucess {
    color: green;
}

.danger {
    color: red;
}


</style>