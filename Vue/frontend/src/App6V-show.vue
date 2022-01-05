<template>
    <div>
        <h1 v-show="sex ==='Masculino'">Masculino</h1>


    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return { sex: 'Masculino' }
    }
})
</script>

<style scoped>

</style>