<template>
  <label class="switch">
    <input type="checkbox" v-model="isChecked" @click="handleCheck">
    <span class="slider round" />
  </label>
</template>

<script>
export default {
  name: 'UiSwitch',
  data: () => ({
    isChecked: false
  }),
  methods: {
    handleCheck () {
      this.$emit('toggle', !this.isChecked)
    }
  }
}
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
  margin-bottom: 0;

  & input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: $blue4;
    }

    &:focus + .slider {
      box-shadow: 0 0 1px $blue4;
    }

    &:checked + .slider:before {
      transform: translateX(22px);
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $grey3;
    transition: .4s;

    /* Rounded sliders */
    &.round {
      border-radius: 30px;
    }

    &.round:before {
      border-radius: 50%;
    }

    &:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 4px;
      background-color: $white;
      transition: .4s;
    }
  }
}
</style>
