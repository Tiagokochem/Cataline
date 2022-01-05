<template>
    <div>
        <h1 v-if="sex ==='Masculino'">Masculino</h1>
        <h1 v-else-if="sex ==='Feminino'">Masculino</h1>
        <h1 v-else="sex ==='outro'">Masculino</h1>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return { sex:> 'Masculino' }
    }
})
</script>

<style scoped>

</style>