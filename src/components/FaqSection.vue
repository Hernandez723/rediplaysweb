<script setup lang="ts">
import { ref, computed } from 'vue'
import { FAQ_DATA } from '../content/faq'

const currentLang = ref<'es' | 'en'>('es')
const topItems = computed(() => (FAQ_DATA[currentLang.value] || FAQ_DATA.es).slice(0, 5))
</script>

<template>
  <section id="faq" class="faq">
    <div class="container">
      <header class="faq__header">
        <h2 class="faq__title">
          {{ currentLang === 'es' ? 'Preguntas Frecuentes.' : 'Quick answers.' }}
        </h2>
        <p class="faq__sub">
          {{ currentLang === 'es' ? '¿Tienes dudas? Te ayudamos a resolverlas.' : "Got questions? We've got you covered." }}
        </p>

        <!-- Inline mini toggle -->
        <div class="faq__lang-toggle">
          <div class="lang-switch" role="group" aria-label="Language selector">
            <button
              :class="['lang-btn', { active: currentLang === 'es' }]"
              @click="currentLang = 'es'"
            >
              Español
            </button>
            <button
              :class="['lang-btn', { active: currentLang === 'en' }]"
              @click="currentLang = 'en'"
            >
              English
            </button>
          </div>
        </div>
      </header>

      <div class="faq__card" role="region" aria-label="Frequently asked questions">
        <details v-for="item in topItems" :key="item.question" class="faq__item">
          <summary class="faq__q">
            <span class="faq__q-text">{{ item.question }}</span>
            <span class="faq__chev icon" aria-hidden="true">arrow_forward</span>
          </summary>
          <div class="faq__a">
            <p>{{ item.answer }}</p>
          </div>
        </details>

        <div class="faq__cta">
          <RouterLink to="/faq" class="btn btn-tonal btn-lg">
            {{ currentLang === 'es' ? '¿Más preguntas? Ver todo el FAQ' : 'Got more questions? View full FAQ' }}
            <span class="icon" aria-hidden="true" style="font-size: 1.125rem">arrow_forward</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  padding: 80px 0;
}

.faq__header {
  text-align: center;
  margin-bottom: 28px;
}

.faq__title {
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 2.75rem);
  letter-spacing: -0.025em;
  color: var(--md-on-background);
  margin-bottom: 10px;
}

.faq__sub {
  font-size: 1.0625rem;
  color: var(--md-on-surface-variant);
  max-width: 60ch;
  margin: 0 auto 16px;
}

.faq__lang-toggle {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}

/* Language selector */
.lang-switch {
  display: inline-flex;
  background: var(--md-sc-low);
  border: 1px solid var(--md-outline-variant);
  border-radius: var(--r-full);
  padding: 3px;
}

.lang-btn {
  background: transparent;
  border: none;
  color: var(--md-on-surface-variant);
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 4px 14px;
  border-radius: var(--r-full);
  cursor: pointer;
  transition: background var(--t-fast), color var(--t-fast);
}

.lang-btn.active {
  background: var(--md-primary);
  color: var(--md-on-primary);
}

.faq__card {
  max-width: 900px;
  margin: 0 auto;
  border-radius: var(--r-2xl);
  background: var(--md-sc);
  overflow: hidden;
}

.faq__item {
  border-bottom: 1px solid var(--md-outline-variant);
}

.faq__item:last-of-type {
  border-bottom: none;
}

.faq__q {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 18px 20px;
  color: var(--md-on-surface);
  user-select: none;
}

.faq__q::-webkit-details-marker {
  display: none;
}

.faq__q-text {
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: 1.0625rem;
  letter-spacing: -0.01em;
}

.faq__chev {
  pointer-events: none;
  transform: rotate(0deg);
  transition: transform var(--t-std), opacity var(--t-fast);
  opacity: 0.7;
}

.faq__item[open] .faq__chev {
  transform: rotate(90deg);
  opacity: 1;
}

.faq__a {
  padding: 0 20px 18px;
  color: var(--md-on-surface-variant);
}

.faq__a p {
  margin: 0;
  line-height: 1.75;
  font-size: 0.9375rem;
  max-width: 76ch;
}

.faq__cta {
  display: flex;
  justify-content: center;
  padding: 20px;
  background: color-mix(in srgb, var(--md-sc) 75%, var(--md-secondary-container));
}

@media (min-width: 640px) {
  .faq__q {
    padding: 20px 28px;
  }

  .faq__a {
    padding: 0 28px 22px;
  }

  .faq__cta {
    padding: 26px;
  }
}
</style>
