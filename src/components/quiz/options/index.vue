<template>
  <div class="text-center">
    <button-continents />
    <button-categories />
  </div>
</template>

<script>
import ButtonContinents from './ButtonContinents'
import ButtonCategories from './ButtonCategories'

export default {
  components: {
    ButtonContinents,
    ButtonCategories
  }
}
</script>

<style lang="scss">
button i {
  font-size: .85em;
  font-style: normal;
}
.dropdown-menu {
  padding: 0 8px;
  width: 100%;

  > li {
    border-bottom: 1px solid $color4;
    padding: 6px;

    &:hover {
      cursor: pointer;
      color: $color2;
    }

    &:last-child {
      border: none;
    }
  }
}

@media screen and (max-width: 760px) {
  .btn-group {
    width: 100%;

    button {
      width: 100%;
      margin-right: 0 !important;
    }
  }
}

@media screen and (max-width: 320px) {
  button {
    font-size: 1.1em !important;
  }
}
</style>
