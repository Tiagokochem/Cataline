<template>
  <p> {{company}} é legal</p>
  <p v-text="{{company}}"></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {
            company: 'Cataline'
        }
    }
})
</script>

<style scoped>

</style>