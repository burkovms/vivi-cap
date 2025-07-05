<script setup lang="ts">
  import { colorsData } from '@/data/colors';

  const colors = colorsData;

  const selectedCap = ref('2b2b2b');
  const selectedCup = ref('2b2b2b');

  const selectCap = (color: string) => {
    selectedCap.value = color;
  };

  const selectCup = (color: string) => {
    selectedCup.value = color;
  };

  const currentCups = computed(() => {
    const found = colors.find((c) => c.color === selectedCup.value);
    return found ? found.cups : [];
  });

  const activeCup = computed(() => {
    const found = currentCups.value.find((cup) => isCupActive(cup.logo));
    return found || null;
  });

  const isCupActive = (logoColor: string) => {
    if (logoColor === 'default') {
      return selectedCup.value === selectedCap.value;
    }
    return logoColor === selectedCap.value;
  };
</script>

<template>
  <section class="color-picker__section">
    <SectionTitles>
      <template #slogan>особливість</template>
      <template #title>Великий вибір кольорів</template>
      <p class="text-after-title text-xl mt30">
        Ви можете використовувати як стандартні кольори кришки, так і замовити
        свій підібраний за зразком або RAL колір
      </p>
    </SectionTitles>

    <div class="container-fluid">
      <div class="row color-picker__row">
        <div class="col-12 col-lg-4 col-xl-3 color-picker__col">
          <div class="color-picker__item">
            <h4 class="title">
              Виберіть колір вашої кришки та склянки та подивіться, як буде
              виглядати поєднання.
            </h4>

            <div class="color-picker__item-colors cap-nav-colors">
              <div
                v-for="(cap, index) in colors"
                :key="index"
                class="color-picker__item-color"
                :class="{ active: cap.color === selectedCap }"
                @click="selectCap(cap.color)"
              >
                <div class="color">
                  <span :style="`background: #${cap.color}`"></span>
                </div>
                <div class="hex-code">{{ cap.name }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4 col-xl-6 color-picker__imgs-wrap">
          <div class="color-picker__imgs">
            <div class="color-picker__caps imgs">
              <NuxtImg
                v-for="(cap, index) in colors"
                :key="index"
                class="img-cap"
                :class="[
                  'cap--' + cap.color,
                  { active: cap.color === selectedCap },
                ]"
                :src="cap.capSrc"
                :alt="cap.name"
                loading="lazy"
                quality="100"
              />
            </div>

            <div class="color-picker__cups imgs">
              <Transition name="cup">
                <NuxtImg
                  v-if="activeCup"
                  :key="activeCup.src"
                  class="img-cup"
                  :src="activeCup.src"
                  alt=""
                  loading="lazy"
                />
              </Transition>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4 col-xl-3 color-picker__col">
          <div class="color-picker__item">
            <h4 class="title">Відмінне поєднання з вашою склянкою</h4>
            <div class="color-picker__item-colors cup-nav-colors">
              <div
                v-for="(cup, index) in colors"
                :key="index"
                class="color-picker__item-color"
                :class="{ active: cup.color === selectedCup }"
                @click="selectCup(cup.color)"
              >
                <div class="color">
                  <span :style="`background: #${cup.color}`"></span>
                </div>
                <div class="hex-code">{{ cup.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .color-picker {
    &__section {
      padding-top: 300px;
      @media (max-width: $media_xl) {
        padding-top: 200px;
      }
      @media (max-width: $media_sm) {
        padding-top: 140px;
      }
      .text-after-title {
        max-width: 850px;
        margin-top: 30px;
        font-size: 26px;
        @media (max-width: $media_lg) {
          max-width: 100%;
          font-size: 20px;
        }
        @media (max-width: $media_sm) {
          font-size: 18px;
        }
      }
    }

    &__row {
      margin-top: 150px;
      align-items: center;
      @media (max-width: $media_xl) {
        margin-top: 90px;
      }
      @media (max-width: $media_md) {
        margin-top: 50px;
      }
    }

    &__col {
      @media (max-width: $media_md) {
        order: 1;
        margin-top: 60px;
      }
    }

    &__item {
      text-align: center;

      .title {
        min-height: 91px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        @media (max-width: $media_xxl) {
          min-height: 75px;
        }
        @media (max-width: $media_md) {
          min-height: auto;
        }
        @media (max-width: $media_xs) {
          display: block;
          text-align: left;
        }
      }
    }

    &__item-colors {
      display: flex;
      flex-wrap: wrap;
      margin: 100px -5px -30px;
      @media (max-width: $media_xl) {
        margin-top: 40px;
      }
      @media (max-width: $media_md) {
        justify-content: center;
      }
      @media (max-width: $media_xs) {
        flex-wrap: nowrap;
        justify-content: flex-start;
        overflow: auto;
        white-space: nowrap;
        margin-bottom: -10px;
      }
    }

    &__item-color {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 5px;
      padding-right: 5px;
      margin-bottom: 30px;
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
      @media (max-width: $media_md) {
        flex: 0 0 auto;
        max-width: none;
        padding-left: 15px;
        padding-right: 15px;
      }
      @media (max-width: $media_xs) {
        display: inline-block;
        margin-bottom: 10px;
      }

      &.active {
        pointer-events: none;
        .color {
          padding: 6px;
          &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 28px;
            height: 28px;
            transform: translate(-50%, -50%);
            background-image: url('/img/check.svg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            @media (max-width: $media_xl) {
              width: 22px;
              height: 22px;
            }
          }
        }
      }

      .color {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        padding: 10px;
        border-radius: 50%;
        position: relative;
        cursor: pointer;
        width: 68px;
        height: 68px;
        background-image: url('/img/border-color-picker.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        transition: $transition;

        @media (max-width: $media_xl) {
          width: 58px;
          height: 58px;
        }

        &:hover {
          @media (min-width: 1025px) {
            padding: 6px;
          }
        }

        span {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: block;
          transition: $transition;
        }
      }
      .hex-code {
        text-transform: uppercase;
        text-align: center;
        padding-top: 10px;
        @media (max-width: $media_xl) {
          font-size: 14px;
        }
      }
    }

    &__imgs {
      position: relative;
      max-width: 570px;
      height: 700px;
      margin-left: auto;
      margin-right: auto;
      @media (max-width: $media_lg) {
        max-width: 280px;
        height: 362px;
      }
      @media (max-width: $media_sm) {
        max-width: 325px;
        height: 400px;
      }

      &:before {
        content: '';
        position: absolute;
        top: 30px;
        left: 30px;
        width: 380px;
        height: 380px;
        border-radius: 50%;
        background: radial-gradient(
          62.11% 62.11% at 50% 50%,
          #ffdc22 0%,
          #161616 100%
        );
        filter: blur(150px);
        mix-blend-mode: color-dodge;
        z-index: 1;
        pointer-events: none;
        @media (max-width: $media_lg) {
          width: 280px;
          height: 280px;
        }
      }

      &:after {
        content: '';
        position: absolute;
        bottom: 30px;
        right: 30px;
        width: 320px;
        height: 320px;
        border-radius: 50%;
        background: radial-gradient(
          71.96% 71.96% at 50% 50%,
          rgba(34, 255, 56, 0.7) 0%,
          rgba(255, 74, 34, 0) 100%
        );
        filter: blur(150px);
        mix-blend-mode: color-dodge;
        pointer-events: none;
        @media (max-width: $media_lg) {
          width: 220px;
          height: 220px;
        }
      }

      .imgs {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;

          // &.img-cup {
          //   transform: translateY(20px);
          // }
        }
      }
    }

    &__caps {
      z-index: 3;
      &.imgs {
        img {
          opacity: 0;
          transition: 0.4s ease;

          &.img-cap {
            transform: translateY(-15px);
            &.active {
              transition-delay: 0.4s;
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      }
    }

    &__cups {
      z-index: 2;
    }
  }

  .cup-enter-active {
    transition: 0.4s ease 0.4s;
  }
  .cup-leave-active {
    transition: 0.4s ease;
  }
  .cup-enter-from,
  .cup-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  .cup-enter-to,
  .cup-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
</style>
