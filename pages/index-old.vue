<template>
  <div>
    <!-- toggle portal element on and off -->
    <!-- <style v-html="portalAppStyle"></style> -->
    <header class="header"></header>
    <main class="main">
      <section class="section section-hero">
        <!-- <img src="/img/logo-title-outline.svg" alt="logo" class="header-logo" /> -->
        <div class="hero-demo-video" :class="{'hero-demo-video--playing': videoIsPlaying}" @click="startVideo" @keydown.space="startVideo" @keydown.esc="stopVideo" tabindex="0">
          <video src="/vid/demo.mov" ref="video" ></video>
        </div>
        <h1 class="section-hero__title"> {{ t.headerTitle }} </h1>
        <p class="section-hero__sub-title"> {{ t.headerSubtitle }} </p>
        <div class="header-button-group">
          <button class="button button--prim" @click="buyItem" >
            <!-- <img src="/icon/monetization_on-24px.svg" class="button__icon" alt=""> -->
            <span class="button__value"> <span class="button__value__unit">$</span>13,99</span>
            <span class="button__title"> Pre-order </span>
          </button>
          <button class="button" @click="toggleDemo" id="portal-demo-button">
            <img src="/icon/play-button.svg" class="button__icon" alt="">
            <span class="button__title"> Activate Live Demo</span>
          </button>
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
        headerSubtitle: "Portal provides a CSS editor that applies your edits live and syncs them with your editor.",
      },
      demoIsActive: false,
      showBuyOverlay: false,
      videoIsPlaying: false
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
    },
    startVideo () {
      this.$refs.video.play()
      this.videoIsPlaying = true;
    },
    stopVideo () {
      this.$refs.video.pause()
      this.videoIsPlaying = false;
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
  /* background-image: radial-gradient(100% 100% at bottom, #24253DBB 0%, rgba(0,0,0,0.00) 100%);
  transition: background-image .3s linear; */

  &__title {
    @apply leading-none my-2;
    font-size: 5rem;
    font-family: "Quantico";
  }

   &__sub-title {
    @apply text-2xl font-bold leading-snug my-2 max-w-3xl;
    font-family: "Cousine", Arial;
    letter-spacing: 1px;
    color: #eeeeee;
  }
}

.hero-demo-video {
  @apply relative overflow-hidden;
  /* height: 360px; */
  max-width: 720px;
  border: 3px solid white;
  transition: transform .3s ease-out;
  filter: grayscale(.5) brightness(.8);

  &--playing {
    filter: none;
    transform-origin: top center;
    transform: scale(1.5);
  }

  &::after {
    @apply absolute bg-no-repeat bg-contain;
    content: "";
    height: 80px;
    width: 80px;
    bottom: -3px;
    right: -3px;
    background-image: url('/icon/play-tag.svg');
  }

  &:hover {
    &::after {
      transform: scale(1.1);
      transform-origin: 75% 75%;
    }
  }
}

/* .hero-background {
  @apply relative w-full h-full absolute top-0 left-0;
  z-index: 0;
} */

.header-button-group {
  @apply flex flex-row flex-wrap justify-center max-w-4xl;
}

.button {
  @apply relative m-2 mx-4 text-white text-2xl font-bold whitespace-no-wrap uppercase;
  font-family: "Quantico";

  &__icon {
    @apply inline h-12 w-12;
    border: 3px solid #fff;

    & + .button__title {
      margin-left: -.5rem;
    }
  }

  &__value {
    @apply absolute bg-black text-white p-1 px-3;
    height: calc(100% - 6px);
    top: 3px;
    right: 3px;
    margin: 0px;
    clip-path: polygon(
      0% 0%,
      1000% 0%,
      100% calc(100% - 8px),  /* bottom right */
      calc(100% - 8px) 100%,  /* bottom right */
      0% 100%               /* bottom left */
    );

    &__unit {
      @apply text-orange-500;
    }

    & + .button__title {
      margin-right: 7rem;
    }
  }

  &__title {
    @apply p-2 px-4;
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
    /* background-image: linear-gradient(45deg, #212140, #3333ff); */
    background-color: white;
    color: black;
    clip-path: polygon(
      0% 0%,
      1000% 0%,
      100% calc(100% - 10px),  /* bottom right */
      calc(100% - 10px) 100%,  /* bottom right */
      0% 100%               /* bottom left */
    );

    &:hover {
      animation: none;
      transform: scale(1.05);
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
