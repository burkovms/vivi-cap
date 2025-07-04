<script setup lang="ts">
  const props = defineProps<{
    social: {
      name: string;
      icon: string;
      link: string;
    }[];
  }>();
</script>

<template>
  <ul class="social">
    <li v-for="item in props.social" :key="item.name">
      <a :href="item.link" target="_blank">
        <img :src="item.icon" :alt="item.name" />
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .social {
    display: flex;
    align-items: center;
    @media (max-width: $media_lg) {
      margin-top: 40px;
    }
    li {
      + li {
        margin-left: 38px;
        @media (max-width: 1860px) {
          margin-left: 15px;
        }
      }

      a {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        &:hover {
          &:before {
            width: 100%;
            height: 100%;
          }
        }
        img {
          position: relative;
          z-index: 1;
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
          width: 48px;
          height: 48px;
          border: 1px solid $accent;
          border-radius: 50%;
          transition: $transition;
        }
        &:after {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-image: url('/img/border-dotted-64x64.svg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
      }
    }
  }
</style>
