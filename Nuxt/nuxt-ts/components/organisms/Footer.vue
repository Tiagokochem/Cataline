<template>
    <footer class="footer">
        <Container>
            <Logo />
            <p>Copyright &copy; 2021 ibook</p>
        </Container>
    </footer>
</template>

<script>
import Container from '../bosons/Container.vue'
export default {
  computed: {
      currentYear(){
        return new Date().getFullYear()
      }
  } 
  
  

  </script>

<style lang="scss" scoped>

.footer {
  width: 100%;
  height: 110px;
  background: color(dark, darkest);
  .container {
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    p {
      color: color('light', 'darkest');
    }
  }
}

</style>