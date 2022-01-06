<template>
   <ButtonStyled text="Cadastro" color="primay" :user="user">
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
    components: { ButtonStyled },
    data(){
        return {
            user:{}
        }
    }
})
</script>

<style scoped>

</style>