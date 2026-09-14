<template>
  <section class="download">
    <div class="container">
      <div class="download__card">

        <div class="download__copy">
          <h2 class="download__title">¿Listo para escuchar?</h2>
          <p class="download__sub">
            Disfruta de streaming fluido, sin anuncios molestos y con la máxima calidad en tu dispositivo Android.
          </p>
        </div>

        <div class="download__actions">
          <div class="btn btn-filled btn-lg download__btn-soon">
            <span class="icon" aria-hidden="true">android</span>
            Próximamente
          </div>
          <RouterLink to="/faq" class="download__faq-link">
            Preguntas Frecuentes
            <span class="icon" style="font-size: 1rem" aria-hidden="true">arrow_forward</span>
          </RouterLink>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.download {
  padding: 40px 0 100px;
}

.download__card {
  background: var(--md-primary-container);
  border-radius: var(--r-2xl);
  padding: 60px 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}

.download__title {
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  letter-spacing: -0.025em;
  color: var(--md-on-primary-container);
  margin-bottom: 10px;
}

.download__sub {
  font-size: 1rem;
  color: color-mix(in srgb, var(--md-on-primary-container) 72%, transparent);
  max-width: 44ch;
  line-height: 1.65;
}

.download__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
}

.download__btn-soon {
  background: var(--md-primary);
  color: var(--md-on-primary);
  box-shadow: var(--el-1);
  cursor: default;
  opacity: 0.95;
  pointer-events: none;
}

.download__faq-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--md-on-primary-container);
  text-decoration: none;
  opacity: 0.85;
  transition: opacity var(--t-fast);
}

.download__faq-link:hover {
  opacity: 1;
  text-decoration: underline;
}

@media (max-width: 700px) {
  .download__card {
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 28px;
  }
}
</style>
