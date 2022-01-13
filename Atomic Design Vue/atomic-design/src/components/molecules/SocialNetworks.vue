<template>
  <div class="social-networks">

  <SocialLink name="Github" to="http://github.com/tiagokochem" icon="github.svg" />
    <SocialLink name="Twitter" to="http://Twitter.com" icon="twitter.svg" />
    <SocialLink name="Facebook" to="http://facebook.com/" icon="facebook.svg" />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {{ SocialNetworks }} from '@/components/molecules'

export default defineComponent({
    components: {{ SocialNetworks }}
})
</script>

<style lang="scss" scoped>
.social-networks {
  display: grid;
  grid-gap: 1rem;
}
</style>