<script setup lang="ts"></script>

<template>
  <section class="block-video">
    <NuxtImg
      loading="lazy"
      class="bg-img block-video__img-top-left"
      src="/img/cap-video-1.png"
      alt="background image"
    />
    <NuxtImg
      loading="lazy"
      class="bg-img block-video__img-top-right"
      src="/img/cap-video-2.png"
      alt="background image"
      quality="100"
    />
    <NuxtImg
      loading="lazy"
      class="bg-img block-video__img-bottom-right"
      src="/img/cap-video-3.png"
      alt="background image"
      quality="100"
    />

    <div class="container-fluid">
      <h2 class="text-center">ViVi CAP - Зручність без компромісів</h2>
      <div class="block-content">
        <p>
          Як і ви, ми небайдужі до кави та чаю. Тим не менш, усі ми знаємо, як
          звичайні кришки псують враження від напою з собою. Ми розробили кришку
          ViVi CAP, з якої вам і вашим клієнтам сподобається пити — кришку,
          гідну того, що знаходиться у вашому стакані:
        </p>
        <ul>
          <li>дозволяє пити як з відкритого стакана, не закидаючи голову</li>
          <li>розкриває смак і усуває дратівливі бризки</li>
          <li>
            дозволяє легко переносити кілька повних стаканів, надійно
            закривається на стакані.
          </li>
        </ul>
        <p>
          Ми зрозуміли, що зробили все правильно, коли почали забувати, що п’ємо
          через кришку.
        </p>
        <h4 style="text-align: center">
          Компанія ViVi Cap — ЦЕ ПОВНІСТЮ АВТОМАТИЗОВАНЕ Й СУЧАСНЕ ВИРОБНИЦТВО.
          ПЕРШІ РУКИ, ЯКІ ДОТОРКНУТЬСЯ ДО КРИШКИ — ЦЕ РУКИ ВАШОГО КЛІЄНТА.
        </h4>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .block-video {
    position: relative;
    padding-top: 500px;
    padding-bottom: 400px;
    @media (max-width: $media_xxl) {
      padding-top: 300px;
      padding-bottom: 200px;
    }
    @media (max-width: $media_lg) {
      padding-top: 200px;
      padding-bottom: 160px;
    }
    @media (max-width: $media_sm) {
      padding-top: 140px;
      padding-bottom: 140px;
      margin-bottom: -40px;
      overflow: hidden;
    }
    .bg-img {
      position: absolute;
      max-width: 50%;
      pointer-events: none;
      @media (max-width: $media_sm) {
        max-width: 100%;
      }
    }
    &__img-top-left {
      top: 0;
      left: -410px;
      width: 940px;
      filter: blur(10px);
      @media (max-width: $media_lg) {
        left: -300px;
      }
      @media (max-width: $media_sm) {
        display: none;
      }
    }

    &__img-top-right {
      top: 5%;
      right: -600px;
      width: 940px;
      @media (max-width: $media_xxl) {
        right: -440px;
      }
      @media (max-width: $media_lg) {
        right: -390px;
      }
      @media (max-width: $media_sm) {
        display: none;
      }
    }

    &__img-bottom-right {
      bottom: -100px;
      right: 5%;

      @media (max-width: $media_lg) {
        right: 0;
      }
      @media (max-width: $media_sm) {
        bottom: 0;
        width: 380px;
        right: -100px;
      }
    }

    .container-fluid {
      position: relative;
      z-index: 1;
    }

    .block-content {
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 100px;
      border-radius: 40px;
      padding: 60px;
      backdrop-filter: blur(25px);
      background-color: rgba($black-100, 0.1);
      @media (max-width: $media_lg) {
        margin-top: 70px;
        border-radius: 24px;
        padding: 40px;
      }
      @media (max-width: $media_md) {
        margin-top: 50px;
      }
      @media (max-width: $media_sm) {
        margin-top: 30px;
        padding: 36px 20px;
        backdrop-filter: blur(5px);
      }
    }

    .play {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      cursor: pointer;
      @media (max-width: $media_sm) {
        width: 94px;
        height: 94px;
      }
      &:hover {
        &:before {
          width: 100%;
          height: 100%;
        }
      }
      svg,
      img {
        position: relative;
        z-index: 1;
      }

      svg {
        fill: $accent;
      }

      &:after,
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &:before {
        width: 80px;
        height: 80px;
        border: 1px solid $accent;
        border-radius: 50%;
        transition: $transition;
        @media (max-width: $media_sm) {
          width: 70px;
          height: 70px;
        }
      }
      &:after {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-image: url('/img/border-dotted-120x120.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }
</style>
