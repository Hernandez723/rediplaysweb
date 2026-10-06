<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, computed, onMounted } from 'vue'

const route = useRoute()

const videoId = computed(() => {
  const v = route.query.v || route.params.id
  return typeof v === 'string' ? v : ''
})

const playlistId = computed(() => {
  const l = route.query.list
  return typeof l === 'string' ? l : ''
})

const title = ref(playlistId.value && !videoId.value ? 'Playlist en Rediplays' : 'Canción compartida')
const artist = ref('Rediplays')
const thumbnailUrl = ref(
  videoId.value
    ? `https://i.ytimg.com/vi/${videoId.value}/hqdefault.jpg`
    : 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500'
)
const loading = ref(true)

const openInAppUrl = computed(() => {
  if (videoId.value) {
    return `intent://rediplays.com/watch?v=${encodeURIComponent(videoId.value)}#Intent;scheme=https;package=com.rediplays.app;end`
  }
  if (playlistId.value) {
    return `intent://rediplays.com/playlist?list=${encodeURIComponent(playlistId.value)}#Intent;scheme=https;package=com.rediplays.app;end`
  }
  return 'intent://rediplays.com#Intent;scheme=https;package=com.rediplays.app;end'
})

const webPlayUrl = computed(() => {
  if (videoId.value) {
    return `https://www.youtube.com/watch?v=${encodeURIComponent(videoId.value)}`
  }
  if (playlistId.value) {
    return `https://www.youtube.com/playlist?list=${encodeURIComponent(playlistId.value)}`
  }
  return '#'
})

function triggerOpenInApp() {
  if (typeof window === 'undefined') return
  if (/Android/i.test(navigator.userAgent)) {
    window.location.href = openInAppUrl.value
  } else {
    // En PC o navegador de escritorio, abrir enlace web
    if (webPlayUrl.value && webPlayUrl.value !== '#') {
      window.open(webPlayUrl.value, '_blank')
    } else {
      window.location.href = openInAppUrl.value
    }
  }
}

onMounted(async () => {
  if (videoId.value) {
    try {
      const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${encodeURIComponent(videoId.value)}&format=json`)
      if (res.ok) {
        const data = await res.json()
        if (data.title) title.value = data.title
        if (data.author_name) {
          artist.value = data.author_name.replace(/ - Topic$/i, '').replace(/VEVO$/i, '')
        }
        if (data.thumbnail_url) {
          thumbnailUrl.value = data.thumbnail_url
        }
      }
    } catch {
      // Fallback
    } finally {
      loading.value = false
    }

    // Si es un dispositivo Android, intentamos abrir la app automáticamente
    if (/Android/i.test(navigator.userAgent)) {
      setTimeout(() => {
        triggerOpenInApp()
      }, 500)
    }
  } else {
    loading.value = false
  }
})
</script>

<template>
  <main id="main" class="watch">
    <!-- Ambient Dynamic Glow using artwork -->
    <div
      class="watch__bg-glow"
      :style="{ backgroundImage: `url(${thumbnailUrl})` }"
      aria-hidden="true"
    />
    <div class="watch__bg-overlay" aria-hidden="true" />

    <div class="container watch__inner">
      <RouterLink to="/" class="watch__back">
        <span class="icon" aria-hidden="true">arrow_back</span>
        Volver al inicio
      </RouterLink>

      <!-- Main Shared Card -->
      <article class="watch__card">
        <div class="watch__badge">
          <span class="icon" aria-hidden="true">music_note</span>
          <span>{{ playlistId && !videoId ? 'Playlist Compartida' : 'Canción Compartida' }}</span>
        </div>

        <div class="watch__cover-wrapper">
          <img
            :src="thumbnailUrl"
            :alt="title"
            class="watch__cover-img"
            loading="eager"
          />
          <div class="watch__cover-shadow" :style="{ backgroundImage: `url(${thumbnailUrl})` }" />
        </div>

        <div class="watch__meta">
          <h1 class="watch__title">{{ title }}</h1>
          <p class="watch__artist">{{ artist }}</p>
        </div>

        <!-- Prominent Call to Action Buttons -->
        <div class="watch__actions">
          <a
            :href="openInAppUrl"
            class="btn btn-filled btn-lg watch__btn-primary"
            @click.prevent="triggerOpenInApp"
          >
            <span class="icon" aria-hidden="true">open_in_new</span>
            <span>Abrir con la app</span>
          </a>

          <a
            href="https://github.com/Hernandez723/rediplaysapp/releases"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-tonal btn-lg watch__btn-secondary"
          >
            <span class="icon" aria-hidden="true">download</span>
            <span>Descargar Rediplays</span>
          </a>

          <a
            v-if="videoId"
            :href="webPlayUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outlined btn-sm watch__btn-web"
          >
            <span class="icon" aria-hidden="true">play_arrow</span>
            <span>Escuchar en el navegador</span>
          </a>
        </div>

        <div class="watch__features">
          <span class="watch__pill">
            <span class="icon" aria-hidden="true">block</span>
            Sin Anuncios
          </span>
          <span class="watch__pill">
            <span class="icon" aria-hidden="true">headphones</span>
            Audio de Alta Calidad
          </span>
          <span class="watch__pill">
            <span class="icon" aria-hidden="true">music_note</span>
            Letras Sincronizadas
          </span>
        </div>
      </article>

      <!-- Explanation Card -->
      <div class="watch__info-card">
        <h2 class="watch__info-title">¿Tienes la app instalada?</h2>
        <p class="watch__info-text">
          Toca <strong>"Abrir con la app"</strong> para escuchar directamente en Rediplays con fondo dinámico estilo Canvas, letras en tiempo real y sonido sin cortes.
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.watch {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 24px 0 60px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 480px) {
  .watch {
    padding: 40px 0 80px;
  }
}

/* Ambient glow with blur */
.watch__bg-glow {
  position: fixed;
  inset: -15%;
  background-size: cover;
  background-position: center;
  filter: blur(80px) saturate(1.8) brightness(0.35);
  opacity: 0.6;
  z-index: 0;
  pointer-events: none;
  transform: scale(1.1);
}

.watch__bg-overlay {
  position: fixed;
  inset: 0;
  background: radial-gradient(circle at 50% 30%, rgba(28, 27, 31, 0.4) 0%, rgba(28, 27, 31, 0.95) 100%);
  z-index: 0;
  pointer-events: none;
}

.watch__inner {
  position: relative;
  z-index: 1;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.watch__back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  padding: 8px 16px;
  border-radius: var(--r-full);
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--md-primary);
  background: rgba(43, 41, 48, 0.6);
  backdrop-filter: blur(12px);
  text-decoration: none;
  transition: background var(--t-fast), color var(--t-fast);
}

.watch__back:hover {
  background: color-mix(in srgb, var(--md-primary) 20%, rgba(43, 41, 48, 0.8));
  color: var(--md-on-primary-container);
}

.watch__card {
  background: rgba(36, 33, 41, 0.85);
  border: 1px solid rgba(208, 188, 255, 0.15);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(24px);
  border-radius: var(--r-2xl);
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
}

@media (min-width: 480px) {
  .watch__card {
    padding: 44px 36px;
  }
}

.watch__badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--md-primary-container);
  color: var(--md-on-primary-container);
  padding: 6px 14px;
  border-radius: var(--r-full);
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 24px;
}

.watch__badge .icon {
  font-size: 1.1rem;
}

.watch__cover-wrapper {
  position: relative;
  width: 220px;
  height: 220px;
  margin-bottom: 24px;
}

@media (min-width: 480px) {
  .watch__cover-wrapper {
    width: 260px;
    height: 260px;
  }
}

.watch__cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--r-xl);
  position: relative;
  z-index: 2;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
}

.watch__cover-shadow {
  position: absolute;
  inset: 12px;
  background-size: cover;
  background-position: center;
  filter: blur(20px) saturate(2);
  opacity: 0.7;
  z-index: 1;
  border-radius: var(--r-xl);
}

.watch__meta {
  margin-bottom: 28px;
  width: 100%;
}

.watch__title {
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: clamp(1.4rem, 4vw, 1.85rem);
  line-height: 1.25;
  color: var(--md-on-background);
  margin-bottom: 8px;
  word-break: break-word;
}

.watch__artist {
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--md-primary);
}

.watch__actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 380px;
  margin-bottom: 28px;
}

.watch__btn-primary {
  width: 100%;
  font-size: 1.0625rem;
  font-weight: 700;
  padding: 16px 28px;
  box-shadow: 0 8px 24px rgba(108, 75, 204, 0.4);
  gap: 10px;
}

.watch__btn-primary .icon {
  font-size: 1.35rem;
}

.watch__btn-secondary {
  width: 100%;
  font-weight: 600;
}

.watch__btn-web {
  width: 100%;
  margin-top: 4px;
  color: var(--md-on-surface-variant);
  border-color: rgba(208, 188, 255, 0.2);
}

.watch__features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.watch__pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--md-on-surface-variant);
  background: rgba(73, 67, 94, 0.4);
  padding: 6px 12px;
  border-radius: var(--r-full);
}

.watch__pill .icon {
  font-size: 1rem;
  color: var(--md-primary);
}

.watch__info-card {
  background: rgba(43, 41, 48, 0.5);
  border-radius: var(--r-xl);
  padding: 20px 24px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.watch__info-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--md-on-background);
  margin-bottom: 6px;
}

.watch__info-text {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--md-on-surface-variant);
}
</style>
