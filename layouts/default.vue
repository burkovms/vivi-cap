<template>
  <div class="app">
    <Header />
    <main class="page">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
  .app {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    > .page {
      flex-grow: 1;
    }
  }
</style>
