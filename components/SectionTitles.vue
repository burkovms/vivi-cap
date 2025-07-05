<script setup lang="ts"></script>

<template>
  <div class="border-text section-slogan">
    <span><slot name="slogan"></slot></span>
  </div>
  <div class="container-fluid">
    <h2 class="section-title"><slot name="title"></slot></h2>
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .section-title {
    text-transform: uppercase;
  }

  .border-text {
    overflow: hidden;
    user-select: none;
    @media (max-width: $media_sm) {
      height: auto;
      + * {
        margin-top: 4px;
      }
    }
    span {
      font-size: 5.46875vw;
      line-height: 1;
      font-weight: 700;
      opacity: 0.1;
      display: block;
      font-family: $font_family_accent;
      background: linear-gradient(0deg, #fff, #fff 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-stroke: 2px transparent;
      color: $black-100;
      text-transform: uppercase;
      @media (max-width: $media_sm) {
        font-size: 9.2vw;
        padding-left: 25px;
        padding-right: 25px;
      }
    }
  }
</style>
