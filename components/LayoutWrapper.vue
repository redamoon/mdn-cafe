<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style scoped>
.wrapper {
  //padding-top: 80px;
  @media (min-width: 768px) {
    padding-top: 0;
  }
}
</style>
