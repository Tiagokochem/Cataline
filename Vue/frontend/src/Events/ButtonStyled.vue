<template>
  <button class="buitton-styled" @click="$action('passarinho', 'calopsita')> 
      {{text}}
      </button>>
     <template>
          
     </template>

  </buttonStyked>

</template>

<script lang="ts">
    import Vue from 'vue'


    export default defineComponent({
        propos: {
            text: {
                type: [String, Number],
                required: true
            }
        }
        }
        
    })
</script>

<style scoped>

</style>