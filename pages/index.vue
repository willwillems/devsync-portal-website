<template>
  <div>
    <header class="header"></header>
    <main class="main">
      <img src="/img/chalk-arrow.png" alt="chalk arrow" class="chalk-arrow" v-if="demoIsActive">
      <section class="section section-hero" id="hero">
        <h1 class="section-header-title"> {{ t.headerTitle }} </h1>
        <p class="section-sub-title"> {{ t.headerSubtitle }} </p>
        <div class="header-button-group">
          <button class="button button--prim" @click="buyItem" >
            <!-- <img src="/icon/monetization_on-24px.svg" class="button__icon" alt=""> -->
            <span class="button__value"> <span class="button__value__unit">$</span>13,99</span>
            <span class="button__title"> Buy Now </span>
          </button>
          <button class="button" @click="toggleDemo" id="portal-demo-button">
            <img src="/icon/play-button.svg" class="button__icon" alt="">
            <span class="button__title"> Activate Live Demo</span>
          </button>
        </div>
      </section>
      <section class="section section-about" id="about">
        <div class="section-about-icons">
          <img src="/icon/chrome-ok.svg" alt="chrome compatible">
          <img src="/icon/vscode-ok.svg" alt="vs code compatible">
        </div>
        <h1 class="section-title"> Let me explain. </h1>
        <!-- <h2 class="section-sub-title">Stay in you browser yes oh so amazing. Wish I discovered this earlier.</h2> -->
        <p class="section-body">Portal provides a real-time connection with your editor. Stay in your browser and instantly see what your CSS changes are actually doing. Just select elements visually and Portal wil automatically find all the relevant CSS in your editor.</p>
        <!-- <div class="section-about__bg"></div> -->
        <!-- <div class="header-button-group">
          <button class="button" @click="toggleDemo">
            <img src="/icon/play-button.svg" class="button__icon" alt="">
            <span class="button__title"> Watch demo video</span>
          </button>
        </div> -->
      </section>
      <section class="section" id="features">
        <h1 class="section-description"> Compatibily </h1>
        <h1 class="section-title"> Built to work anywhere </h1>
        <h2 class="section-sub-title">Stay in your browser. Even with more complicated CSS workflows.</h2>
        <ul class="section-list">
          <li class="section-list-item">
            <img class="section-list-item__icon" src="/icon/code-blue.svg"/> 
            <span class="section-list-item__title">Live code injection & modification</span>
          </li>
          <li class="section-list-item">
            <img class="section-list-item__icon" src="/icon/ident-blue.svg"/> 
            <span class="section-list-item__title">Compatibility with nested selectors</span>
          </li>
          <li class="section-list-item">
            <img class="section-list-item__icon" src="/icon/tailwind-blue.svg"/>
            <span class="section-list-item__title">Support for tailwind @apply rules</span>
          </li>
        </ul>
      </section>
      <section class="section" id="shortcuts">
        <h3 class="section-description"> Shortcuts </h3>
        <h1 class="section-title"> The mouse is lava</h1>
        <p class="section-sub-title">
          Don't leave your keyboard. Navigate trough your CSS quickly and intuitively.
        </p>
        <table class="shortcut-table">
          <tr class="section-shortcut-item">
            <td><span>Select DOM element:</span></td>
            <td><div class="section-shortcut-item__key">Alt + Click</div></td>
          </tr>
          <tr class="section-shortcut-item">
            <td><span>Navigate through DOM:</span></td>
            <td><div class="section-shortcut-item__key">Alt + W/A/S/D</div></td>
          </tr>
          <tr class="section-shortcut-item">
            <td><span>Select available selectors:</span></td>
            <td><div class="section-shortcut-item__key">Alt + Q/Z</div></td>
          </tr>
          <tr class="section-shortcut-item">
            <td><span>Increase numeric CSS values:</span></td>
            <td><div class="section-shortcut-item__key">Alt + </></div></td>
          </tr>
          <tr class="section-shortcut-item">
            <td><span>Minimize app:</span></td>
            <td><div class="section-shortcut-item__key">Alt + Space</div></td>
          </tr>
        </table>
        <!-- <ul class="section-list">
          <li class="section-shortcut-item">
            <div class="section-shortcut-item__key">Alt + W/A/S/D</div> 
            <span>Navigate through DOM</span>
          </li>
          <li class="section-shortcut-item">
            <div class="section-shortcut-item__key">Alt + Q/Z</div>
            Select available selectors
          </li>
          <li class="section-shortcut-item">
            <div class="section-shortcut-item__key">Alt + </></div>
            Increase numeric CSS values
          </li>
        </ul> -->
      </section>
      <!-- <section class="section">
        <h1 class="section-description"> Sync </h1>
        <h1 class="section-title"> Stay in your editor </h1>
        <h2 class="section-sub-title">Watch the video</h2>
        <img src="/img/editor.png" alt="" class="editor-preview-img">
      </section> -->
      <section class="section section-cta" id="cta">
        <!-- <h1 class="section-description"> Sync </h1>
        <h1 class="section-title"> Stay in your editor </h1> -->
        <div class="cta-card">
          <div class="cta-card__tag">Some slogan</div>
          <h1 class="cta-card__title">Ready to save time?</h1>
          <h2 class="cta-card__sub-title">Don't worry we've got a 30-money back guarantee</h2>
          <div class="header-button-group">
            <button class="button button--prim button--big" @click="buyItem" >
              <!-- <img src="/icon/monetization_on-24px.svg" class="button__icon" alt=""> -->
              <span class="button__value"> <span class="button__value__unit">$</span>13,99</span>
              <span class="button__title"> Buy Now </span>
            </button>
          </div>
          <!-- <button class="cta-card__button">
            <svg class="cta-card__button__pre-icon" viewBox="0 0 58 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-559.000000, -508.000000)">
                        <path d="M617,508 L617,559 L559,559 L559,508 L617,508 Z M609,516 L567,516 L567,551 L609,551 L609,516 Z" id="Combined-Shape" fill="#F37719"></path>
                        <polygon id="$" fill="#FFFFFF" fill-rule="nonzero" points="589.384 544.952 586.504 544.952 586.504 542.12 584.584 542.12 581.8 540.512 581.8 537.32 585.16 537.32 585.16 539.24 590.32 539.24 590.32 535.088 584.824 535.088 582.04 533.48 582.04 526.688 584.824 525.08 586.504 525.08 586.504 522.248 589.384 522.248 589.384 525.08 590.896 525.08 593.68 526.688 593.68 529.88 590.32 529.88 590.32 527.96 585.4 527.96 585.4 531.968 590.896 531.968 593.68 533.576 593.68 540.512 590.896 542.12 589.384 542.12"></polygon>
                    </g>
                </g>
            </svg>
            <span class="cta-card__button__title">I want this</span>
          </button> -->
        </div>
      </section>
      <footer class="section footer">
        <ul class="footer-link-list">
          <li><a href="mailto:will@devsync.com">Contact</a></li>
          <li><a href="https://willwillems.com/twitter">Twitter</a></li>
          <li><a href="https://docs.devsync.com/portal">Docs</a></li>
        </ul>
      </footer>
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
        headerTitle: "Portal",
        headerSubtitle: "Get work done faster. Save time, open a portal to your editor, edit your code the way you designed it. Get visual feedback immediately.",
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
html, body {
  height: 100vh;
  overflow-y: scroll;
  background-image: linear-gradient(135deg, rgba(16,17,70,0.67) 0%, rgba(0,0,0,0.00) 49%, rgba(93,43,4,0.58) 100%);
}

.header {

}

.main {
  /* box-shadow: inset 0 0 0 4px white;
  box-sizing: border-box; */
}

.section {
  @apply min-h-screen relative p-8 flex flex-col justify-center items-start;
  text-align: left;
  padding-left: 560px;
  padding-right: 60px;

  @media (max-width: 600px) {
    padding-left: .5rem;
    padding-right: .5rem;
  }
}

.footer {
  min-height: 20vh;
}

.section-header-title {
  @apply leading-none my-1;
  font-size: 5rem;
  font-family: "Quantico";
}

.section-title {
  @apply text-6xl font-bold leading-none my-2 max-w-3xl;
  font-family: "Quantico";
}

.section-sub-title {
  @apply my-2 max-w-2xl text-2xl font-medium leading-tight;
  font-family: "SF Compact Text", Arial;
  color: #E8ECF3;
  margin: 3px 0px;
}

.section-description {
  @apply py-1 px-4 my-1 text-base leading-normal;
  background-color: #1a0c03;
  color: #986b4e;
  border-radius: 5px;
}

.section-body {
  @apply py-1 my-1 text-2xl font-medium leading-normal max-w-3xl;
  color: #eae9e8;
  line-height: 1.5em;
}

.section-list-item {
  @apply flex flex-row items-center my-6;
  
  &__icon {
    @apply w-16 h-16 mr-6 text-center object-contain;
    border-radius: 9px;
    line-height: 3rem;
    background-color: #0D1D33;
    color: #327EE6;
    transition: transform .3s ease-out;
  }

  &__title {
    @apply text-2xl font-semibold max-w-2xl leading-snug;
    font-family: "SF Compact Text", Arial;
    color: #E8ECF3;
  }

  &:hover {
      .section-list-item__icon {
          transform: scale(1.1);
      }
  }
}

.section-shortcut-item {
  @apply flex flex-row items-center my-4 text-xl;
  width: 530px;
  
  &__key {
    @apply inline-block px-4 mr-4 text-center text-xl;
    border-radius: 9px;
    line-height: 2em;
    background-color: #1d1d1d;
    color: #e0e2e4;
    border: 3px solid #2d2d2d;
    transition: border-color .3s ease-out;
  }

  &:hover {
    .section-shortcut-item__key {
      border-color: #464646;
    }
  }
}

.shortcut-table {
  td {
    &:nth-of-type(1) {
      width: calc(100% - 240px);
    }

    &:nth-of-type(2) {
      width: 240px;
    }
  }
}

.section-hero {
  .section-header-title {
    font-size: 5.5rem;
  }
}

.section-about {
  &__bg {
    @apply absolute top-0 left-0 right-0 bottom-0;
    background-image: url("/img/editor.png");
    background-position: 170% 100%;
    background-size: 800px;
    background-repeat: no-repeat;
    opacity: .7;
    z-index: 0;
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
  @apply flex flex-row flex-wrap justify-start max-w-4xl;
  margin: .5rem -1rem;
}

.button {
  @apply relative h-12 m-2 mx-4 text-white text-2xl font-bold whitespace-no-wrap uppercase;
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

  &--big {
    /* @apply h-16 text-4xl; */
    transform-origin: top left;
    transform: scale(1.2);

    &:hover {
      animation: none;
      transform: scale(1.2) translateY(-2px);
    }
  }
}

#portal-demo-button {
  animation: heartbeat .8s step-end infinite;
}

.header-logo {
  @apply m-2;
}

@media (max-width: 480px) {
  #portal-demo-button {
    display: none;
  }
}

.section-about-icons {
  @apply flex flex-row;
  margin: 0 -0.5rem;

  img {
    @apply m-2;
  }
}

.section-cta {
  min-height: unset;
}

.cta-card {
  @apply p-12 px-0 my-4 w-full;
  /* background-color: black; */
  /* background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(18,18,18,0.60) 100%),
                    linear-gradient(to right, #4568dc, #b06ab3);#ee0979, #ff6a00 linear-gradient(to right, #4776e6, #8e54e9); */
  border-radius: 5px;
  /* box-shadow: 0px 2px 20px 9px #5a3d1969;
  background-image: linear-gradient(180deg, rgba(5, 6, 53, 0.41) 0%, rgba(0, 0, 0, 0.6) 100%);
  box-shadow: 0px 1px 20px 0px #5a3d1933; */

  &__tag {
    @apply inline-block px-3 py-1 my-2 bg-gray-700;
    background-color: white;
    color: black;
    /* border-radius: 3px; */
    font-family: Quantico;
    opacity: 0;
  }

  &__title {
    @apply text-6xl leading-none;
    font-family: Quantico;
  }

  &__sub-title {
    @apply text-2xl font-normal my-2 text-gray-400;
  }

  &__button {
    @apply my-2 flex flex-row text-2xl font-bold text-white;
    font-family: 'Quantico';
    transition: transform .3s ease-out;
    line-height: 2.5em;

    &__pre-icon {
      @apply inline-block;
      height: 2.5em;
    }

    &__title {
      @apply px-6;
      background-color: #F37719;
      text-transform: uppercase;
      margin-left: -1px; /* overlap to hide gutter between el's*/
      padding-left: .5rem;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
}

.footer-link-list {
  margin: -1rem;

  li {
    @apply inline-block m-4 text-xl opacity-75;

    &:hover {
      @apply opacity-100;
    }
  }
}

.editor-preview-img {
  @apply my-4;
  width: 480px;
}

.chalk-arrow {
  @apply fixed;
  left: 260px;
  bottom: 310px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 100% 0%);
  animation: clip .5s linear 1s forwards;

  @media (max-width: 600px) {
    display: none;
  }
}

@keyframes clip {
  0% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 100% 0%);
  }
  30% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 10%);
  }
  60% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 20%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}

@keyframes heartbeat {
  0% {
   transform: scale(1);
  }
  80% {
   transform: scale(1.05);
  }
}
</style>
