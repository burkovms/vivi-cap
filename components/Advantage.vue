<script setup lang="ts">
  const advantages = [
    {
      id: 1,
      img: '/img/advantage-icon-1.svg',
      title: 'якщо ви дбаєте про якість свого продукту',
    },
    {
      id: 2,
      img: '/img/advantage-icon-2.svg',
      title: 'якщо ви хочете, щоб ваші гості поверталися',
    },
    {
      id: 3,
      img: '/img/advantage-icon-3.svg',
      title: 'якщо ви готові виділятися серед інших',
    },
    {
      id: 4,
      img: '/img/advantage-icon-4.svg',
      title: 'якщо ви хочете, щоб клієнти вас запам’ятали',
    },
  ];
</script>

<template>
  <section class="advantage">
    <NuxtImg class="img-rotate" src="/img/text-round.svg" loading="lazy" />
    <div class="border-text section-slogan">
      <span>Перевага</span>
    </div>
    <div class="container-fluid">
      <h2 class="section-title">інформація для клієнтів</h2>
    </div>

    <div class="container-fluid">
      <div class="row row30 advantage__row">
        <div class="col-3" v-for="item in advantages" :key="item.id">
          <div class="advantage__item">
            <div class="icon custom-icon">
              <NuxtImg :src="item.img" alt="Icon" loading="lazy" />
            </div>
            <div class="advantage__item-content">
              <h4 class="title">
                {{ item.title }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .advantage {
    margin-top: 250px;
    padding-top: 200px;
    position: relative;
    overflow: hidden;
    @media (max-width: $media_lg) {
      margin-top: 150px;
      padding-top: 140px;
    }
    .img-rotate {
      position: absolute;
      top: 0;
      right: -100px;
      animation: rotate-text 50s linear infinite;
      z-index: -1;
      @media (max-width: $media_lg) {
        max-width: 280px;
        right: -70px;
      }
      @media (max-width: $media_sm) {
        max-width: 220px;
      }
    }

    &__row {
      margin-top: 210px;
      @media (max-width: $media_lg) {
        margin-top: 140px;
        > div {
          flex: 0 0 50%;
          max-width: 50%;
        }
      }
      @media (max-width: $media_xs) {
        margin-top: 50px;
        > div {
          flex: 0 0 100%;
          max-width: 100%;
        }
      }
    }

    &__item {
      @media (max-width: $media_xs) {
        display: flex;
        align-items: center;
        .icon {
          width: 65px;
          height: 65px;
          flex-shrink: 0;
          margin-right: 16px;
          &:before {
            width: 50px;
            height: 50px;
          }
          img {
            max-width: 26px;
            max-height: 26px;
          }
        }
      }
      .title {
        margin-top: 20px;
      }
      p {
        margin-top: 13px;
      }
    }
  }

  @keyframes rotate-text {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
