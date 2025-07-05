<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
  import { originalityData } from '@/data/originality';

  const originalityleft = originalityData.filter(
    (item) => item.position === 'left'
  );
  const originalityright = originalityData.filter(
    (item) => item.position === 'right'
  );

  const activeTab = ref(1);
  const videoRefs = ref<Record<number, HTMLVideoElement | null>>({});

  const setVideoRef = (
    id: number,
    el: Element | ComponentPublicInstance | null
  ) => {
    if (el instanceof HTMLVideoElement) {
      videoRefs.value[id] = el;
    } else {
      videoRefs.value[id] = null;
    }
  };

  let intervalId: ReturnType<typeof setInterval> | null = null;
  const userInteracted = ref(false);

  const handleUserClick = async (id: number) => {
    userInteracted.value = true;
    await switchTab(id);
  };

  const switchTab = async (id: number) => {
    activeTab.value = id;

    await nextTick();

    const video = videoRefs.value[id];
    if (video) {
      video.currentTime = 0;
      video.play().catch((err) => {
        // console.warn('Не вдалося запустити відео:', err);
      });
    }
  };

  const startAutoSwitch = () => {
    intervalId = setInterval(() => {
      if (userInteracted.value) return;

      const nextId = activeTab.value >= 6 ? 1 : activeTab.value + 1;
      switchTab(nextId);
    }, 5000);
  };

  onMounted(() => {
    startAutoSwitch();
  });

  onBeforeUnmount(() => {
    if (intervalId) clearInterval(intervalId);
  });
</script>

<template>
  <section id="originality" class="originality">
    <SectionTitles>
      <template #slogan>Досконалість</template>
      <template #title>У чому унікальність нашої кришки</template>
    </SectionTitles>

    <div class="container-fluid originality__tabs-container">
      <div class="originality__tabs">
        <div class="row">
          <div class="col-12 col-lg-4 col-xxl-3 originality__tabs-info-block">
            <div
              v-for="item in originalityleft"
              :key="item.id"
              class="originality__item"
              :class="{ active: activeTab === item.id }"
              @click="handleUserClick(item.id)"
            >
              <span class="number">{{ item.id }}</span>
              <h4>{{ item.title }}</h4>
              <p>
                {{ item.text }}
              </p>
            </div>
          </div>

          <div class="col-12 col-lg-4 col-xxl-6 originality__imgs-col">
            <div class="originality__imgs">
              <div
                v-for="video in originalityData"
                :key="video.id"
                class="originality__img"
                :class="{ active: activeTab === video.id }"
              >
                <video
                  class="originality__img-item"
                  poster=""
                  :preload="video.id === 1 ? 'auto' : 'none'"
                  playsinline
                  webkit-playsinline=""
                  muted
                  :ref="(el) => setVideoRef(video.id, el)"
                >
                  <source :src="video.src" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4 col-xxl-3 originality__tabs-info-block">
            <div
              v-for="item in originalityright"
              :key="item.id"
              class="originality__item"
              :class="{ active: activeTab === item.id }"
              @click="handleUserClick(item.id)"
            >
              <span class="number">{{ item.id }}</span>
              <h4>{{ item.title }}</h4>
              <p>
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .originality {
    position: relative;
    margin-top: 100px;
    @media (max-width: $media_sm) {
      margin-top: 50px;
    }

    &__tabs-container {
      position: relative;
      margin-top: 140px;
      @media (max-width: $media_xl) {
        margin-top: 100px;
      }
      @media (max-width: $media_md) {
        margin-top: 50px;
      }
      svg {
        position: absolute;
        max-width: 100%;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: -1;
      }
    }

    &__tabs {
      position: relative;
      z-index: 1;
      .row {
        align-items: center;
      }
    }

    &__imgs-col {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__item {
      min-height: 180px;
      padding: 30px 30px 30px 60px;
      border: 2px solid rgba($accent, 0.2);
      cursor: pointer;
      position: relative;
      user-select: none;
      transition: $transition;
      @media (max-width: $media_xxl) {
        padding: 20px 20px 20px 60px;
      }
      @media (max-width: $media_lg) {
        padding-right: 15px;
        padding-left: 60px;
        min-height: 150px;
        h4 {
          font-size: 16px;
        }
      }

      @media (max-width: $media_md) {
        min-height: auto;
      }

      &.active {
        pointer-events: none;
      }

      &.active,
      &:hover {
        box-shadow: inset 5px 5px 20px rgba($accent, 0.2);
        background-color: $black-100;
      }

      + .originality__item {
        margin-top: 38px;
        @media (max-width: $media_xl) {
          margin-top: 22px;
        }
      }

      h4 {
        color: $accent;
      }

      p {
        margin-top: 10px;
        @media (max-width: $media_lg) {
          font-size: 14px;
          line-height: 1.2;
        }
      }

      .number {
        position: absolute;
        top: 0;
        left: 20px;
        font-size: 140px;
        line-height: 1;
        font-weight: 700;
        font-family: $font_family_accent;
        color: rgba($white, 0.1);
        @media (max-width: $media_xl) {
          font-size: 90px;
        }
        @media (max-width: $media_lg) {
          font-size: 80px;
          width: 45px;
          text-align: center;
        }
        @media (max-width: $media_md) {
          left: 10px;
          top: 12px;
          transform: translateY(-10px);
          transition: 0.35s ease;
        }
      }
    }

    &__imgs {
      pointer-events: none;
      height: 748px;
      width: 748px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      transition: 0.3s ease-out;
      @media (max-width: $media_xxl) {
        width: 660px;
        height: 660px;
      }
      @media (max-width: $media_xl) {
        width: 580px;
        height: 580px;
      }
      @media (max-width: $media_lg) {
        width: 440px;
        height: 440px;
      }
      @media (max-width: $media_sm) {
        width: 320px;
        height: 320px;
      }

      &:after {
        content: '';
        position: absolute;
        top: 18px;
        right: 60px;
        width: 338px;
        height: 338px;
        max-width: 50%;
        max-height: 50%;
        border-radius: 50%;
        background: radial-gradient(
          71.96% 71.96% at 50% 50%,
          rgba(255, 220, 34, 0.5) 0%,
          rgba(255, 220, 34, 0) 100%
        );
        mix-blend-mode: screen;
        filter: blur(75px);
        z-index: 1;
        pointer-events: none;
        opacity: 0.5;
      }
    }

    &__img {
      opacity: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 0.5s linear;
      max-width: 100%;

      &.active {
        opacity: 1;
        transform: translate(-50%, -50%);
      }

      > * {
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
</style>
