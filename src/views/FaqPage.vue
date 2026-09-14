<script setup lang="ts">
import { ref, computed } from 'vue'
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'
import { FAQ_DATA, type FaqItem } from '../content/faq'

const currentLang = ref<'es' | 'en'>('es')
const searchQuery = ref('')
const selectedCategory = ref<string>('all')

const items = computed<FaqItem[]>(() => {
  return FAQ_DATA[currentLang.value] || FAQ_DATA.es
})

const categories = computed(() => {
  const cats = Array.from(new Set(items.value.map(i => i.category).filter(Boolean))) as string[]
  return cats
})

const filteredItems = computed(() => {
  let list = items.value
  if (selectedCategory.value !== 'all') {
    list = list.filter(item => item.category === selectedCategory.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    list = list.filter(
      item =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    )
  }
  return list
})
</script>

<template>
  <NavBar />
  <main id="main" class="faq-page">
    <div class="faq-page__bg" aria-hidden="true" />

    <div class="container faq-page__inner">
      <!-- Header -->
      <header class="faq-page__header">
        <div class="faq-page__badge">
          <span class="icon">help</span>
          <span>{{ currentLang === 'es' ? 'Centro de Ayuda y Soporte' : 'Help & Support Center' }}</span>
        </div>
        <h1 class="faq-page__title">
          {{ currentLang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions' }}
        </h1>
        <p class="faq-page__sub">
          {{ currentLang === 'es'
            ? 'Encuentra respuestas rápidas sobre seguridad, reconocimiento de música, alarmas, permisos y sincronización de cuentas en Rediplays.'
            : 'Quick answers about Rediplays: security, music recognition, alarms, permissions, and account sync.'
          }}
        </p>

        <!-- Meta / Language Toggle -->
        <div class="faq-page__meta">
          <div class="lang-switch" role="group" aria-label="Language selector">
            <button
              :class="['lang-btn', { active: currentLang === 'es' }]"
              @click="currentLang = 'es'; selectedCategory = 'all'"
            >
              Español
            </button>
            <button
              :class="['lang-btn', { active: currentLang === 'en' }]"
              @click="currentLang = 'en'; selectedCategory = 'all'"
            >
              English
            </button>
          </div>
        </div>
      </header>

      <!-- Category filters -->
      <div class="faq-filters" v-if="categories.length > 0">
        <button
          :class="['filter-chip', { active: selectedCategory === 'all' }]"
          @click="selectedCategory = 'all'"
        >
          {{ currentLang === 'es' ? 'Todas' : 'All' }}
        </button>
        <button
          v-for="cat in categories"
          :key="cat"
          :class="['filter-chip', { active: selectedCategory === cat }]"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- FAQ List -->
      <section class="faq-page__list" aria-label="FAQ Accordion">
        <details v-for="item in filteredItems" :key="item.question" class="faq-page__item">
          <summary class="faq-page__q">
            <div class="faq-page__q-wrap">
              <span v-if="item.category" class="faq-category-badge">{{ item.category }}</span>
              <span class="faq-page__q-text">{{ item.question }}</span>
            </div>
            <span class="faq-page__chev icon" aria-hidden="true">arrow_forward</span>
          </summary>
          <div class="faq-page__a">
            <p>{{ item.answer }}</p>
          </div>
        </details>

        <div v-if="filteredItems.length === 0" class="faq-empty">
          <span class="icon">search</span>
          <p>{{ currentLang === 'es' ? 'No se encontraron preguntas coincidentes.' : 'No matching questions found.' }}</p>
        </div>
      </section>

      <!-- Support & Help card -->
      <section class="faq-support-card">
        <div class="support-card-content">
          <span class="icon support-icon">support</span>
          <div>
            <h3>{{ currentLang === 'es' ? '¿Aún tienes dudas o encontraste un fallo?' : 'Still have questions or found an issue?' }}</h3>
            <p>
              {{ currentLang === 'es'
                ? 'Puedes consultar nuestra Política de Privacidad o abrir un reporte en nuestro repositorio oficial de GitHub.'
                : 'You can review our Privacy Policy or submit an issue on our official GitHub repository.'
              }}
            </p>
          </div>
        </div>
        <div class="support-card-actions">
          <RouterLink to="/privacy" class="btn btn-tonal">
            <span class="icon">shield</span>
            {{ currentLang === 'es' ? 'Política de Privacidad' : 'Privacy Policy' }}
          </RouterLink>
          <a href="https://github.com/Hernandez723/rediplaysapp/issues" target="_blank" rel="noopener noreferrer" class="btn btn-outlined">
            <span class="icon">code</span>
            GitHub Issues
          </a>
        </div>
      </section>

      <!-- Back Action -->
      <div class="faq-page__back">
        <RouterLink to="/" class="btn btn-filled btn-lg">
          <span class="icon" aria-hidden="true">arrow_back</span>
          {{ currentLang === 'es' ? 'Volver al Inicio' : 'Back to Home' }}
        </RouterLink>
      </div>
    </div>
  </main>
  <FooterSection />
</template>

<style scoped>
.faq-page {
  position: relative;
  padding: 36px 0 90px;
  overflow-x: hidden;
}

@media (min-width: 480px) {
  .faq-page {
    padding: 52px 0 120px;
  }
}

.faq-page__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse 70% 60% at 80% 10%, var(--md-primary-container) 0%, transparent 58%),
    radial-gradient(ellipse 60% 70% at 15% 85%, var(--md-tertiary-container) 0%, transparent 54%),
    radial-gradient(ellipse 42% 50% at 50% 50%, var(--md-secondary-container) 0%, transparent 60%);
  pointer-events: none;
}

.faq-page__inner {
  position: relative;
  z-index: 1;
  max-width: 920px;
}

.faq-page__header {
  text-align: center;
  margin-bottom: 32px;
}

.faq-page__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: var(--r-full);
  background: color-mix(in srgb, var(--md-primary-container) 70%, transparent);
  border: 1px solid var(--md-primary);
  color: var(--md-primary);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.faq-page__badge .icon {
  font-size: 1.125rem;
}

.faq-page__title {
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  letter-spacing: -0.03em;
  margin-bottom: 14px;
  color: var(--md-on-background);
}

.faq-page__sub {
  font-size: 1.0625rem;
  color: var(--md-on-surface-variant);
  max-width: 66ch;
  margin: 0 auto 20px;
  line-height: 1.7;
}

.faq-page__meta {
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 5px 16px;
  border-radius: var(--r-full);
  cursor: pointer;
  transition: background var(--t-fast), color var(--t-fast);
}

.lang-btn.active {
  background: var(--md-primary);
  color: var(--md-on-primary);
}

/* Category Filter Chips */
.faq-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 28px;
}

.filter-chip {
  background: color-mix(in srgb, var(--md-sc-low) 80%, transparent);
  border: 1px solid var(--md-outline-variant);
  color: var(--md-on-surface-variant);
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: var(--r-full);
  cursor: pointer;
  transition: background var(--t-fast), color var(--t-fast), border-color var(--t-fast);
}

.filter-chip:hover {
  background: color-mix(in srgb, var(--md-surface-variant) 50%, transparent);
  color: var(--md-on-surface);
}

.filter-chip.active {
  background: var(--md-primary-container);
  color: var(--md-on-primary-container);
  border-color: var(--md-primary);
}

/* FAQ List */
.faq-page__list {
  border-radius: var(--r-2xl);
  background: color-mix(in srgb, var(--md-sc-lowest) 75%, transparent);
  border: 1px solid var(--md-outline-variant);
  overflow: hidden;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: var(--el-2);
}

.faq-page__item {
  border-bottom: 1px solid var(--md-outline-variant);
  transition: background var(--t-fast);
}

.faq-page__item:last-of-type {
  border-bottom: none;
}

.faq-page__item[open] {
  background: color-mix(in srgb, var(--md-sc-low) 50%, transparent);
}

.faq-page__q {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 22px;
  color: var(--md-on-surface);
  user-select: none;
}

.faq-page__q::-webkit-details-marker {
  display: none;
}

.faq-page__q-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.faq-category-badge {
  display: inline-block;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 8px;
  border-radius: var(--r-xs);
  background: var(--md-sc-high);
  color: var(--md-primary);
}

.faq-page__q-text {
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 1.0625rem;
  letter-spacing: -0.01em;
  line-height: 1.4;
}

.faq-page__chev {
  pointer-events: none;
  transform: rotate(0deg);
  transition: transform var(--t-std), opacity var(--t-fast);
  opacity: 0.7;
  color: var(--md-primary);
}

.faq-page__item[open] .faq-page__chev {
  transform: rotate(90deg);
  opacity: 1;
}

.faq-page__a {
  padding: 0 22px 22px;
  color: var(--md-on-surface-variant);
}

.faq-page__a p {
  margin: 0;
  line-height: 1.8;
  font-size: 0.9375rem;
  max-width: 80ch;
}

.faq-empty {
  padding: 48px 24px;
  text-align: center;
  color: var(--md-on-surface-variant);
}

.faq-empty .icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
  opacity: 0.5;
}

/* Support Card */
.faq-support-card {
  margin-top: 32px;
  padding: 24px 28px;
  border-radius: var(--r-xl);
  background: color-mix(in srgb, var(--md-sc-low) 70%, transparent);
  border: 1px solid var(--md-outline-variant);
  display: flex;
  flex-direction: column;
  gap: 20px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

@media (min-width: 680px) {
  .faq-support-card {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.support-card-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.support-icon {
  font-size: 2.2rem;
  color: var(--md-primary);
  flex-shrink: 0;
}

.support-card-content h3 {
  font-size: 1.0625rem;
  font-weight: 800;
  margin-bottom: 4px;
  color: var(--md-on-surface);
}

.support-card-content p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--md-on-surface-variant);
  line-height: 1.5;
}

.support-card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-shrink: 0;
}

/* Back Action */
.faq-page__back {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
</style>
