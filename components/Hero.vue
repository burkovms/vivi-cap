<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  const isVisible = ref(false);

  onMounted(() => {
    setTimeout(() => {
      isVisible.value = true;
    }, 100);
  });
</script>

<template>
  <section id="main" class="main" :class="{ loaded: isVisible }">
    <div class="container-fluid">
      <h1>ViVi CAP</h1>
      <p class="text-lg">
        Кришка ViVi CAP гідна того, що знаходиться у Вашій чашці.
        <br />Створена для Вашої зручності без компромісів.
      </p>
      <div class="border-text">
        <span>живи тим, що кохаєш</span>
      </div>
    </div>
    <div class="cap-animation">
      <video
        id="myVideo"
        poster=""
        preload=""
        autoplay
        playsinline
        webkit-playsinline=""
        muted
      >
        <source src="/img/animation2.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<style lang="scss">
  .main {
    background-color: $black-100;
    position: relative;
    text-align: center;
    padding-top: 275px;
    min-height: 700px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: $media_xl) {
      padding-top: 185px;
    }
    @media (max-width: $media_sm) {
      padding-bottom: 120px;
      justify-content: flex-end;
    }
    &.loaded {
      h1 {
        transition-delay: 3s;
        opacity: 1;
        transform: translateY(0);
      }
      p {
        transition-delay: 3.15s;
        opacity: 1;
        transform: translateY(0);
      }
      .border-text {
        transition-delay: 3.25s;
        opacity: 1;
        transform: translateY(0);
      }
    }
    h1 {
      position: relative;
      font-family: $font_family_accent;
      font-size: 80px;
      font-weight: 700;
      letter-spacing: 1.6px;
      line-height: 1;
      opacity: 0;
      transform: translateY(-50px);
      text-shadow: 0 0 15px $black-100;
      z-index: 2;

      transition:
        transform 0.35s ease-out,
        opacity 0.5s ease-out;
      @media (max-width: $media_md) {
        font-size: 60px;
      }
    }

    p {
      position: relative;
      margin-top: 30px;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
      opacity: 0;
      transform: translateY(-50px);
      z-index: 2;
      text-shadow: 0 0 15px $black-100;
      transition:
        transform 0.35s ease-out,
        opacity 0.5s ease-out;
      @media (max-width: $media_sm) {
        margin-top: 15px;
        font-size: 18px;
      }
    }

    .border-text {
      position: relative;
      margin-top: 150px;
      z-index: 1;
      opacity: 0;
      transform: translateY(-50px);
      transition:
        transform 0.5s ease-out,
        opacity 0.75s ease-out;
      @media (max-width: $media_xl) {
        margin-top: 100px;
      }
      @media (max-width: $media_sm) {
        margin-top: 30px;
        span {
          padding: 0;
        }
      }
    }
  }

  .cap-animation {
    mix-blend-mode: luminosity;
    max-width: 770px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: $media_xl) {
      max-width: 600px;
    }
    @media (max-width: $media_sm) {
      top: 80px;
      transform: translate(-50%, 0);
    }
    video {
      display: block;
      width: 100%;
      @media (max-width: $media_xs) {
        max-height: 50vh;
      }
    }
  }
</style>
