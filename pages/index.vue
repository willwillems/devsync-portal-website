<template>
  <div>
    <!-- toggle portal element on and off -->
    <style v-html="portalAppStyle"></style>
    <header class="header"></header>
    <main class="main">
      <section class="section section-hero">
        <img src="/img/logo-title-outline.svg" alt="logo" class="header-logo" />
        <!-- <h1 class="section-hero__title"> {{ t.headerTitle }} </h1> -->
        <p class="section-hero__sub-title"> {{ t.headerSubtitle }} </p>
        <div class="header-button-group">
          <button class="button" @click="toggleDemo" id="portal-demo-button">
            <img src="/icon/code-24px.svg" class="button__icon" alt="">
            Demo</button>
          <button class="button button--prim" @click="buyItem" >
            <img src="/icon/monetization_on-24px.svg" class="button__icon" alt="">
            Pre-order</button>
        </div>
        <div class="gumroad-modal-wrapper" :class="{'gumroad-modal-wrapper--hidden': !showBuyOverlay}">
          <div class="gumroad-product-embed" data-gumroad-product-id="kMMfsm"><a href="https://gumroad.com/l/kMMfsm">Loading...</a></div>
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
        headerSubtitle: "Stay focused. Make quick & visual adjustments.",
      },
      demoIsActive: false,
      showBuyOverlay: false
    }
  },
  computed: {
    portalAppStyle () {
      return `.portal-app { visibility: ${ this.demoIsActive ? 'visible' : 'hidden'}; }`
    }
  },
  methods: {
    toggleDemo () {
      this.demoIsActive = !this.demoIsActive
    },
    buyItem () {
      this.showBuyOverlay = true
      window.setTimeout(() => document.addEventListener('click', this.hideBuyOverlay, { once: true }), 100)
    },
    hideBuyOverlay () {
      this.showBuyOverlay = false
      console.log('hideing')
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
  color: red;
}

.section-hero {
  @apply flex flex-col justify-center items-center;
  text-align: center;
  background-image: radial-gradient(100% 100% at bottom, #24253DBB 0%, rgba(0,0,0,0.00) 100%);
  transition: background-image .3s linear;

  &__title {
    @apply text-5xl leading-none my-2;
    font-family: "Patua One";
  }

   &__sub-title {
    @apply text-3xl leading-tight my-1 max-w-5xl;
    font-family: "Audiowide", Arial;
    letter-spacing: 1.5px;
    font-weight: 500;
    color: #eeeeee;
  }
}

/* .hero-background {
  @apply relative w-full h-full absolute top-0 left-0;
  z-index: 0;
} */

.header-button-group {
  @apply flex flex-row flex-wrap justify-center max-w-xl;
}

.button {
  @apply p-4 px-16 m-2 mx-6 text-white text-xl font-bold whitespace-no-wrap;
  font-family: "Audiowide";
  border-radius: 50%;
  border: 3px solid #fff;

  &__icon {
    @apply inline;
    margin: 0 .5rem 0 -2rem;
    transform-origin: center;
    transform: rotate(2deg) scale(1.6);
  }

  &:hover {
    animation: bouncy-castle .5s infinite;

    @keyframes bouncy-castle {
      0% { transform: scale(1); }
      10% { transform: scale(1.1); }
      20% { transform: scale(1.1); }
      30% { transform: scale(1.1); }
      40% { transform: scale(1); }
      50% { transform: scale(1); }
      60% { transform: scale(1); }
      70% { transform: scale(1); }
      80% { transform: scale(1); }
      90% { transform: scale(1); }
      100% { transform: scale(1); }
    }
  }

  &--prim {
    background-image: linear-gradient(45deg, #212140, #3333ff);
    transition: transform ease-out .2s;

    &:hover {
      transform: scale(1.5) rotate(8deg);
      animation: spacecake .5s infinite;

      @keyframes spacecake {
        0% { border-color: red; }
        10% { border-color: blue; }
        20% { border-color: yellow; }
        30% { border-color: violet; }
        40% { border-color: greenyellow; }
        50% { border-color: crimson; }
        60% { border-color: paleturquoise; }
        70% { border-color: orchid; }
        80% { border-color: orange; }
        90% { border-color: fuchsia; }
        100% { border-color: green; }
      }
    }
  }
}

.header-logo {
  @apply m-2;
}

@media (max-width: 480px) {
  #portal-demo-button {
    display: none;
  }
}


.gumroad-modal-wrapper {
  @apply visible fixed max-h-full max-w-full;
  width: 720px;

  &--hidden {
    @apply invisible
  }
}
</style>
