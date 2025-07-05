<script setup lang="ts"></script>

<template>
  <div class="page-header">
    <div class="container-fluid">
      <h1 class="h3"><slot></slot></h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .page-header {
    padding-top: calc(80px + 168px);
    padding-bottom: 80px;
    background-color: rgba($black, 0.5);
    @media (max-width: $media_xl) {
      padding-top: calc(80px + 128px);
    }
    @media (max-width: $media_sm) {
      padding-top: calc(40px + 78px);
      padding-bottom: 40px;
    }
  }
</style>
