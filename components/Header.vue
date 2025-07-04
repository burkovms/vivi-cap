<script setup lang="ts">
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
  import { useScrollAnchor } from '~/composables/useScrollAnchor';

  const isOpenMenu = ref(false);
  const { scrollAnchor } = useScrollAnchor();
  const scrollDirection = ref<'up' | 'down' | null>(null);

  const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value;
    document.body.classList.toggle('no-scroll');
  };

  let lastScroll = 0;

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 150) {
      scrollDirection.value = null;
      return;
    }

    if (currentScroll > lastScroll) {
      scrollDirection.value = 'down';
    } else if (currentScroll < lastScroll) {
      scrollDirection.value = 'up';
    }

    lastScroll = currentScroll;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const headerClass = computed(() => {
    return {
      'header--scroll-up': scrollDirection.value === 'up',
      'header--scroll-down': scrollDirection.value === 'down',
    };
  });
</script>

<template>
  <header class="header" :class="headerClass">
    <div class="container-fluid">
      <div class="header__wrap">
        <button
          class="nav-btn"
          :class="{ active: isOpenMenu }"
          @click="toggleMenu"
        >
          <div class="nav-btn__burger"></div>
        </button>
        <NuxtLink to="/" class="logo logo-mobile">
          <NuxtImg src="/img/logo.svg" alt="Logotype mobile" />
        </NuxtLink>
        <nav class="nav-menu" :class="{ active: isOpenMenu }">
          <ul class="nav-list menu">
            <li class="anchor-link">
              <a
                class="link-animate"
                href="#originality"
                @click.prevent="scrollAnchor('originality')"
              >
                Переваги
              </a>
            </li>
            <li class="logo-menu">
              <NuxtLink to="/" class="logo">
                <NuxtImg
                  src="/img/logo.svg"
                  alt="Logotype"
                  width="80"
                  preload
                />
              </NuxtLink>
            </li>
            <li class="anchor-link">
              <a
                class="link-animate"
                href="#footer"
                @click.prevent="scrollAnchor('footer')"
              >
                Контакти
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  .header {
    background: transparent;
    min-height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 10;
    transition: 0.3s ease;
    padding-top: 44px;
    padding-bottom: 44px;
    @media (max-width: $media_xl) {
      padding-top: 24px;
      padding-bottom: 24px;
    }
    @media (max-width: $media_sm) {
      padding-top: 14px;
      padding-bottom: 14px;
    }
    &--scroll-up {
      transform: translateY(0);
      background-color: rgba($black, 0.5);
      backdrop-filter: blur(10px);
      padding-top: 14px;
      padding-bottom: 14px;
    }
    &--scroll-down {
      transform: translateY(-100%);
      background-color: rgba($black, 0.5);
      backdrop-filter: blur(10px);
      padding-top: 14px;
      padding-bottom: 14px;
    }
    &.header-secondary {
      background-color: rgba($black, 1);
    }

    &__wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .logo {
      @media (max-width: $media_sm) {
        max-width: 50px;
      }
    }
  }

  .nav-menu {
    width: 260px;
    padding: 120px 25px;
    height: 100vh;
    left: -100%;
    opacity: 0;
    top: -10px;
    z-index: 3;
    background-color: rgba($black-100, 0.98);
    backdrop-filter: blur(30px);
    pointer-events: none;
    position: absolute;
    transition:
      left 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
    &.active {
      pointer-events: auto;
      left: -25px;
      opacity: 1;
    }
  }

  .nav-list {
    overflow: hidden;
    overflow-y: auto;
    max-height: 100%;
    gap: 110px;
    @media (max-width: $media_lg) {
      gap: 60px;
    }
    li {
      display: block;
      position: relative;
      @media (max-width: $media_sm) {
        + li {
          margin-top: 12px;
        }
        &.logo-menu {
          display: none !important;
        }
      }
      a {
        font-family: $font_family_accent;
        font-size: 18px;
        line-height: 1.8;
        position: relative;
        text-transform: uppercase;
        text-decoration: none;
        display: inline-block;
        color: #fff;
        &:hover {
          color: $accent;
        }
      }
    }
    .logo {
      display: flex;
    }
  }

  @media (min-width: 768px) {
    .nav-menu {
      margin-top: 0;
      display: block !important;
      width: auto !important;
      position: relative;
      left: auto;
      top: auto;
      background-color: transparent;
      backdrop-filter: none;
      z-index: 0;
      height: auto;
      opacity: 1;
      padding: 0;
      pointer-events: auto;
    }
    .nav-list {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: visible;
      max-height: none;
    }
  }

  // Burger
  .nav-btn {
    position: absolute;
    left: 0;
    top: 50%;
    width: 30px;
    height: 30px;
    z-index: 15;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex: 0 0 auto;
    padding: 0;
    background-color: transparent;
    border: none;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    @media (min-width: 768px) {
      display: none;
    }
    &__burger {
      width: 30px;
      height: 2px;
      background-color: #fff;
      border-radius: 5px;
      position: relative;
      transition: all 0.3s ease;
      &:before,
      &:after {
        content: '';
        position: absolute;
        width: 30px;
        height: 2px;
        background: #fff;
        border-radius: 5px;
        transition: all 0.3s ease;
        left: 0;
      }
      &:before {
        transform: translate(0, -8px);
      }
      &:after {
        z-index: 1;
        transform: translate(0, 8px);
      }
    }
    &.active {
      .nav-btn__burger {
        background-color: transparent;
        transition: none;
        &:before {
          top: 50%;
          left: 50%;
          z-index: 1;
          transform: translate(-50%, -50%) rotate(45deg);
        }
        &:after {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }
    }
  }

  .page-header {
    padding-top: calc(80px + 175px);
    padding-bottom: 80px;
    background-color: rgba($black, 0.5);
    @media (max-width: $media_xl) {
      padding-top: calc(80px + 135px);
    }
    @media (max-width: $media_sm) {
      padding-top: calc(80px + 78px);
    }
  }
</style>
