<script setup lang="ts">
  import { onMounted } from 'vue';

  import { useGsapTitles } from '@/composables/useGsapTitles';
  useHead({
    titleTemplate: '',
  });

  const { animate } = useGsapTitles();

  onMounted(() => {
    animate();
  });
</script>

<template>
  <Hero />
  <Originality />
  <Advantage />
  <Comfort />
  <ColorPicker />
  <BlockInformation />
</template>

<style lang="scss"></style>
