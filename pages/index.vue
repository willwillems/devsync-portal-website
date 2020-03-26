<template>
  <div>
    <header class="header"></header>
    <main class="main">
      <section class="section section-hero">
        <img src="/img/logo-fill.svg" alt="logo" class="header-logo" />
        <h1 class="section-hero__title"> {{ t.headerTitle }} </h1>
        <p class="section-hero__sub-title"> {{ t.headerSubtitle }} </p>
        <div class="header-button-group">
          <button class="button">
            <img src="/icon/code-24px.svg" class="button__icon" alt="">
            Demo</button>
          <button class="button button--prim">
            <img src="/icon/monetization_on-24px.svg" class="button__icon" alt="">
            Pre-order</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import TheHeroBackground from '~/components/TheHeroBackground.vue'

export default {
  components: {
    TheHeroBackground
  },
  data () {
    return {
      t: {
        headerTitle: "Speed up your workflow",
        headerSubtitle: "Stop switching environments, quickly make code adjustments.",
      }
    }
  }
}
</script>

<style lang="postcss">
.header {

}

.main {

}

.section {
  @apply min-h-screen relative p-2;
}

.section-hero {
  @apply flex flex-col justify-center items-center;
  text-align: center;

  &__title {
    @apply text-5xl leading-none my-2;
    font-family: "Patua One";
  }

  &__sub-title {
    @apply text-2xl font-bold leading-tight text-gray-800 my-2;
  }
}

/* .hero-background {
  @apply relative w-full h-full absolute top-0 left-0;
  z-index: 0;
} */

.header-button-group {
  @apply flex flex-row max-w-xl;
}

.button {
  @apply py-2 px-12 m-2 text-white text-xl font-bold rounded-lg whitespace-no-wrap;
  font-family: "Patua One";
  background-color: #807263;

  &__icon {
    @apply inline;
    margin: 0 .2rem 0 -2rem;
    transform-origin: center;
    transform: rotate(5deg) translateY(0px);
  }

  &--prim {
    background-color: #8c67de;
    transition: transform ease-out .2s;

    &:hover {
      transform: scale(1.05);
    }
  }
}

.header-logo {
  /* animation: rotate 10s linear infinite;

  @keyframes rotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(-180deg);}
  } */
}
</style>
