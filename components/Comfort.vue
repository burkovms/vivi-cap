<script setup lang="ts">
  import { onMounted } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  const comfort = [
    {
      imgSrc: '/img/img-originality-1.png',
      text: `<ul>
              <li>
                Надійно закривається з характерним звуком, забезпечуючи
                безпеку напою.
              </li>
              <li>
                Зручний клапан з парковкою зберігає температуру напою та
                запобігає випадковому проливанню.
              </li>
              <li>
                Елегантний зовнішній вигляд з унікальним декором додає
                вашому напою преміальності.
              </li>
              <li>
                Можливість переносити кілька стаканів в одній руці завдяки
                штабелюванню — це не лише зручно для ваших клієнтів, але й
                сприяє збільшенню продажів напоїв.
              </li>
              <li>
                Приємне пиття, подібне до пиття з відкритого стакана,
                підвищує лояльність клієнтів.
              </li>
              <li>
                Унікальна конструкція кришки дозволяє безпечно пити гарячі
                напої.
              </li>
              <li>
                Має ексклюзивні патенти по всьому світу, які не мають
                аналогів.
              </li>
            </ul>`,
    },
    {
      imgSrc: '/img/img-originality-2.png',
      text: `<h3>Спеціальна форма кришки дозволяє надійно переносити кілька стаканів в одній руці, а також поставити у заглиблення кекс або печиво</h3>`,
    },
  ];

  onMounted(() => {
    gsap.fromTo(
      '.comfort-slogan',
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        duration: 5,
        scrollTrigger: {
          trigger: '.comfort-slogan',
          start: 'top 90%',
          end: 'top 50%',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      '.comfort-title',
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 5,
        scrollTrigger: {
          trigger: '.comfort-title',
          start: 'top 90%',
          end: 'top 50%',
          scrub: 1,
        },
      }
    );
  });
</script>

<template>
  <section class="comfort">
    <div class="container-fluid">
      <div class="row comfort__slogan-wrap">
        <div class="col-12 col-md-6">
          <div class="border-text comfort-slogan">
            <span>Комфорт</span>
          </div>
        </div>
      </div>

      <h2 class="text-center comfort-title">
        нашою кришкою зручно <br />користуватися, тому що:
      </h2>

      <div class="comfort__container">
        <div
          v-for="(item, index) in comfort"
          :key="index"
          class="row comfort__item"
        >
          <div class="col-12 col-lg-6 comfort__img">
            <NuxtImg :src="item.imgSrc" alt="Cap" loading="lazy" />
          </div>
          <div class="col-12 col-lg-6 comfort__text">
            <div class="text-block">
              <div class="block-content" v-html="item.text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .comfort {
    margin-top: 450px;
    position: relative;
    overflow: hidden;
    @media (max-width: $media_lg) {
      margin-top: 250px;
    }
    @media (max-width: $media_sm) {
      margin-top: 140px;
      .comfort-title {
        text-align: left;
      }
    }
    &__slogan-wrap {
      justify-content: flex-end;
    }

    &__container {
      margin-top: 140px;
      @media (max-width: $media_md) {
        margin-top: 90px;
      }
      @media (max-width: $media_xs) {
        margin-top: 50px;
      }
    }

    &__item {
      align-items: center;
      &:nth-child(2n) {
        flex-direction: row-reverse;
        .comfort__text {
          .text-block {
            padding-right: 0;
            padding-left: 150px;
            @media (max-width: $media_xxl) {
              padding-left: 80px;
            }
            @media (max-width: $media_xl) {
              padding-left: 50px;
            }
            @media (max-width: $media_md) {
              padding-left: 0;
            }
          }
        }
      }
      + * {
        margin-top: 80px;
      }
    }

    &__img {
      display: flex;
      justify-content: center;
      @media (max-width: $media_lg) {
        padding-left: 30px;
        padding-right: 30px;
      }
      @media (max-width: $media_md) {
        padding-left: 15px;
        padding-right: 15px;
      }
      img {
        max-width: 550px;
        width: 100%;
        @media (max-width: $media_md) {
          max-width: 400px;
        }
        @media (max-width: $media_xs) {
          max-width: 290px;
        }
      }
    }

    &__text {
      @media (max-width: $media_md) {
        transform: none !important;
        will-change: auto;
        margin-top: 40px;
        order: 1;
      }
      .text-block {
        padding-right: 150px;
        @media (max-width: $media_xxl) {
          padding-right: 80px;
        }
        @media (max-width: $media_xl) {
          padding-right: 50px;
        }
        @media (max-width: $media_md) {
          padding-right: 0;
        }
      }
      .block-content {
        margin-top: 40px;
        font-size: 18px;
        ul > li:after {
          top: 0;
        }
      }
    }
  }
</style>
