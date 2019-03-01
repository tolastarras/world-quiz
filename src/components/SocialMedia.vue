<template>
  <div class="social-buttons mb-2">
    <a href="#">Instagram</a> |
    <a href="#">Twitter</a> |
    <a href="#">Facebook</a> |
    <a href="#">Google+</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.social-buttons {
  font-size: 1rem;

  a {
    color: $color3;
    padding: 0 0.5rem;

    &:hover {
      color: $color2;
      text-decoration: none;
    }
  }
}
</style>
