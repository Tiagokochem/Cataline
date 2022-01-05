<template>
  <p v>Acesse: <span v-html="link"/></span></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {
            link: '<a href="http:tiagoconsultor.com">Tiago</a>'
        }
    }
})
</script>

<style scoped>

</style>