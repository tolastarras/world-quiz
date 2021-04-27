<template>
  <div class="d-flex">
    <span class="mx-3 text-uppercase">{{ leftText }}</span>
    <label class="switch">
      <input type="checkbox" v-model="isChecked" @click="handleCheck">
      <span class="slider round" />
    </label>
    <span class="mx-3 text-uppercase">{{ rightText }}</span>
  </div>
</template>

<script>
export default {
  name: 'UiSwitch',
  data: () => ({
    isChecked: false
  }),
  props: {
    autoPlay: {
      type: Boolean,
      required: true
    },
    leftText: {
      type: String,
      default: 'off'
    },
    rightText: {
      type: String,
      default: 'on'
    }
  },
  mounted () {
    this.isChecked = this.autoPlay
  },
  methods: {
    handleCheck () {
      this.$emit('toggle-switch', !this.isChecked)
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

span {
  font-family: 'Press Start 2P', courier;
}

.switch {
  position: relative;
  display: inline-block;
  width: 100%;
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
      transform: translateX(58px);
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
      content: '';
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
