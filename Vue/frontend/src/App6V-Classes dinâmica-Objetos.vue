<template>
    <hi class="static" :class="{active: isActive, 'text-danger' : hasError}">
        Cataline
    </hi>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {
            isActive: true,
            hasError: false
        }
    }
})
</script>

<style scoped>

</style>