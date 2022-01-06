<template>
   <h1 :class="['static', {'text-danger': hasError}, className]">
       Cataline
   </h1>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'

    export default defineComponent({
        data(){
            isActive: true,
            hasError: true,
            className: 'yung-silva'
        }
        
    })
</script>

<style scoped>

</style>