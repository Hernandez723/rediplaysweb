<template>
  <footer class="footer">
    <div class="container footer__inner">

      <!-- Brand & Description -->
      <div class="footer__brand">
        <RouterLink to="/" class="footer__logo-link" aria-label="Rediplays inicio">
          <img src="/logo.svg" alt="" width="30" height="30" loading="lazy" />
          <span class="footer__wordmark">Rediplays</span>
        </RouterLink>
        <p class="footer__tagline">
          Reproductor de música en streaming para Android.
        </p>
      </div>

      <!-- Links -->
      <nav class="footer__nav" aria-label="Enlaces del pie de página">
        <RouterLink to="/privacy" class="footer__link">Política de Privacidad</RouterLink>
        <span class="footer__sep" aria-hidden="true">|</span>
        <RouterLink to="/faq" class="footer__link">Preguntas Frecuentes</RouterLink>
        <span class="footer__sep" aria-hidden="true">|</span>
        <a href="mailto:contacto@rediplays.com" class="footer__link">Soporte</a>
      </nav>

    </div>

    <div class="container">
      <hr class="footer__divider" />
    </div>

    <!-- Bottom: Copyright & Legal Disclaimer -->
    <div class="container footer__bottom">
      <p class="footer__disclaimer">
        © 2026 Rediplays. Todos los derechos reservados. Aplicación independiente no afiliada, autorizada ni respaldada por Google LLC.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  background: var(--md-sc-low);
  border-top: 1px solid var(--md-outline-variant);
  padding: 48px 0 36px;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 24px;
}

/* Brand */
.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer__logo-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.footer__logo-link img {
  width: 30px;
  height: 30px;
  object-fit: contain;
  border-radius: var(--r-xs);
}

.footer__wordmark {
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: 1.2rem;
  color: var(--md-on-surface);
  letter-spacing: -0.025em;
}

.footer__tagline {
  font-size: 0.9rem;
  color: var(--md-on-surface-variant);
}

/* Nav links */
.footer__nav {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.footer__link {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--md-on-surface);
  text-decoration: none;
  transition: color var(--t-fast);
}

.footer__link:hover {
  color: var(--md-primary);
  text-decoration: underline;
}

.footer__sep {
  color: var(--md-outline-variant);
  user-select: none;
}

/* Divider */
.footer__divider {
  border: none;
  border-top: 1px solid var(--md-outline-variant);
  margin-bottom: 20px;
}

/* Bottom text */
.footer__bottom {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer__disclaimer {
  font-size: 0.8125rem;
  color: var(--md-on-surface-variant);
  line-height: 1.6;
  opacity: 0.85;
}

@media (max-width: 640px) {
  .footer__inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
