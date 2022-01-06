<template>
  <buttonStyked text="Facebook">
     <template v-slot:before>
          <i class="<i class="fab fa-facebook"></i>
     </template>

  </buttonStyked>

</template>

<script lang="ts">
    import Vue from 'vue'
import ButtonStyled from './ButtonStyled.vue'

    export default Vue.extend({
  components: { ButtonStyled },
        
    })
</script>

<style scoped>

</style>