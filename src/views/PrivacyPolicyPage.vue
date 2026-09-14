<script setup lang="ts">
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'

const currentLang = ref<'es' | 'en'>('es')

const lastUpdated = {
  es: '14 de septiembre de 2026',
  en: 'September 14, 2026'
}
</script>

<template>
  <NavBar />
  <main id="main" class="privacy-page">
    <div class="privacy-page__bg" aria-hidden="true" />

    <div class="container privacy-page__inner">
      <!-- Header -->
      <header class="privacy-page__header">
        <div class="privacy-page__badge">
          <span class="icon">verified_user</span>
          <span>{{ currentLang === 'es' ? 'Cumplimiento y Privacidad' : 'Compliance & Privacy' }}</span>
        </div>
        <h1 class="privacy-page__title">
          {{ currentLang === 'es' ? 'Cumplimiento y Política de Privacidad' : 'Compliance & Privacy Policy' }}
        </h1>
        <p class="privacy-page__subtitle">
          {{ currentLang === 'es'
            ? 'En Rediplays valoramos y respetamos tu privacidad. Esta política detalla de manera transparente cómo tratamos la información al usar nuestra aplicación y nuestros servicios.'
            : 'At Rediplays, we value and respect your privacy. This policy transparently details how data is handled when using our application and services.'
          }}
        </p>
        <div class="privacy-page__meta">
          <span class="meta-item">
            <span class="icon">description</span>
            <span>{{ currentLang === 'es' ? 'Última actualización: ' + lastUpdated.es : 'Last updated: ' + lastUpdated.en }}</span>
          </span>
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

      <!-- Highlights cards -->
      <section class="privacy-highlights" aria-label="Privacy Highlights">
        <div class="highlight-card">
          <div class="highlight-icon">
            <span class="icon">shield</span>
          </div>
          <h3>{{ currentLang === 'es' ? 'Privacidad y Control' : 'Privacy & Control' }}</h3>
          <p>{{ currentLang === 'es' ? 'No recopilamos datos personales identificables (PII) ni vendemos tu información.' : 'No personally identifiable information (PII) is collected or sold.' }}</p>
        </div>

        <div class="highlight-card">
          <div class="highlight-icon">
            <span class="icon">lock</span>
          </div>
          <h3>{{ currentLang === 'es' ? 'Almacenamiento Local' : 'Local Storage' }}</h3>
          <p>{{ currentLang === 'es' ? 'Tus listas de reproducción, favoritos, historial y descargas permanecen en tu teléfono.' : 'Your playlists, favorites, history, and downloads stay strictly on your device.' }}</p>
        </div>

        <div class="highlight-card">
          <div class="highlight-icon">
            <span class="icon">security</span>
          </div>
          <h3>{{ currentLang === 'es' ? 'Comunicaciones Seguras' : 'Secure Transmissions' }}</h3>
          <p>{{ currentLang === 'es' ? 'Todas las solicitudes de red se realizan mediante conexiones cifradas (HTTPS/TLS).' : 'All network requests operate over encrypted (HTTPS/TLS) channels.' }}</p>
        </div>
      </section>

      <!-- Spanish Content -->
      <article class="privacy-content" v-if="currentLang === 'es'">
        <section class="policy-section">
          <h2>1. Información General y Alcance</h2>
          <p>
            <strong>Rediplays</strong> es una aplicación cliente multimedia para dispositivos Android, diseñada para permitir la navegación, búsqueda y reproducción de contenido de audio, podcasts y música de fuentes públicas en línea y archivos locales.
          </p>
          <p>
            Esta Política de Privacidad aplica a todos los usuarios que utilicen la aplicación móvil Rediplays y a los visitantes de este sitio web.
          </p>
        </section>

        <section class="policy-section">
          <h2>2. Información que NO Recopilamos</h2>
          <p>
            Nuestro principio fundamental es la mínima retención de datos:
          </p>
          <ul>
            <li><strong>No recopilamos datos personales:</strong> No solicitamos nombre, correo electrónico, número de teléfono ni dirección.</li>
            <li><strong>No rastreamos hábitos personales:</strong> No almacenamos historiales de escucha en servidores propios.</li>
            <li><strong>No vendemos datos:</strong> Ninguna información es comercializada con terceros bajo ninguna circunstancia.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>3. Datos Procesados Localmente en el Dispositivo</h2>
          <p>
            Para brindar una experiencia óptima, Rediplays almacena ciertos datos exclusivamente de forma local en la memoria aislada (<em>sandbox</em>) de tu dispositivo:
          </p>
          <ul>
            <li><strong>Caché de audio e imágenes:</strong> Portadas y fragmentos temporales para permitir reproducción rápida y sin cortes.</li>
            <li><strong>Listas de reproducción y favoritos:</strong> Listas creadas por el usuario dentro de la app.</li>
            <li><strong>Historial de búsqueda y reproducción local:</strong> Guardado únicamente en el dispositivo para facilitar la navegación.</li>
            <li><strong>Preferencias y configuración:</strong> Ajustes visuales, ecualizador e idioma.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>4. Permisos de Android y su Justificación Técnica</h2>
          <div class="permissions-table-wrap">
            <table class="permissions-table">
              <thead>
                <tr>
                  <th>Permiso</th>
                  <th>Propósito / Justificación Técnica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>INTERNET</code> &amp; <code>ACCESS_NETWORK_STATE</code></td>
                  <td>Conexión con servidores de streaming para reproducir contenido, descargar carátulas y verificar el estado de red (Wi-Fi o datos móviles).</td>
                </tr>
                <tr>
                  <td><code>FOREGROUND_SERVICE</code> &amp; <code>FOREGROUND_SERVICE_MEDIA_PLAYBACK</code></td>
                  <td>Requerido por Android para mantener la reproducción continua de música en segundo plano y con la pantalla apagada.</td>
                </tr>
                <tr>
                  <td><code>POST_NOTIFICATIONS</code></td>
                  <td>Mostrar controles multimedia (pausar, cambiar pista, carátula) en la barra de notificaciones y pantalla de bloqueo (Android 13+).</td>
                </tr>
                <tr>
                  <td><code>RECORD_AUDIO</code> &amp; <code>FOREGROUND_SERVICE_MICROPHONE</code> (Opcional)</td>
                  <td>Se utiliza <strong>únicamente en tiempo real</strong> cuando el usuario pulsa el botón del Reconocedor de Música (<em>Music Recognizer</em>). El audio se procesa en memoria volátil para generar la firma acústica y <strong>nunca se almacena ni se graba en el dispositivo</strong>.</td>
                </tr>
                <tr>
                  <td><code>SCHEDULE_EXACT_ALARM</code></td>
                  <td>Utilizado exclusivamente para la función de Alarma Musical / Despertador programada por el usuario.</td>
                </tr>
                <tr>
                  <td><code>READ_MEDIA_AUDIO</code> / <code>READ_EXTERNAL_STORAGE</code> (Opcional)</td>
                  <td>Solicitado únicamente si el usuario desea reproducir archivos de audio locales almacenados en el teléfono.</td>
                </tr>
                <tr>
                  <td><code>WAKE_LOCK</code></td>
                  <td>Evita que el procesador entre en suspensión profunda mientras se reproduce una pista de audio.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="policy-section">
          <h2>5. Servicios de Terceros y Publicidad</h2>
          <ul>
            <li>
              <strong>Google Mobile Ads (AdMob):</strong> La aplicación puede mostrar anuncios publicitarios o de recompensa proporcionados por Google AdMob. AdMob puede utilizar identificadores de publicidad del dispositivo (<code>Advertising ID</code>) para servir anuncios de acuerdo con las políticas de Google. Consulta la 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="link-external">
                Política de Privacidad de Google
                <span class="icon">open_in_new</span>
              </a>.
            </li>
            <li>
              <strong>Servicios de Streaming y Metadatos:</strong> Las solicitudes de reproducción y búsqueda se comunican directamente y de forma cifrada (HTTPS) con los proveedores públicos de contenido correspondientes.
            </li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>6. Derechos del Usuario y Eliminación de Datos</h2>
          <ul>
            <li><strong>Borrado de caché e historial:</strong> Puedes limpiar la caché y el historial de búsqueda en cualquier momento desde el menú de Ajustes dentro de la app.</li>
            <li><strong>Eliminación total e irreversible:</strong> Al desinstalar la aplicación o limpiar los datos desde <em>Ajustes del Sistema &gt; Aplicaciones &gt; Rediplays &gt; Borrar datos</em>, se elimina el 100% de la información local de forma inmediata.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>7. Privacidad de Menores</h2>
          <p>
            Rediplays no está dirigida deliberadamente a menores de 13 años. No recopilamos conscientemente ningún tipo de información personal de menores.
          </p>
        </section>

        <section class="policy-section">
          <h2>8. Contacto y Soporte</h2>
          <p>
            Si tienes dudas o consultas sobre esta Política de Privacidad, puedes contactarnos a través de:
          </p>
          <div class="contact-card">
            <span class="icon">code</span>
            <div>
              <strong>Repositorio Oficial:</strong>
              <p>
                <a href="https://github.com/Hernandez723/rediplaysapp" target="_blank" rel="noopener noreferrer">
                  GitHub - Rediplays Project (Hernandez723/rediplaysapp)
                </a>
              </p>
            </div>
          </div>
        </section>
      </article>

      <!-- English Content -->
      <article class="privacy-content" v-else>
        <section class="policy-section">
          <h2>1. Overview &amp; Scope</h2>
          <p>
            <strong>Rediplays</strong> is a media client application for Android devices designed to browse, search, and stream audio, podcast, and music content from public online sources and local storage.
          </p>
          <p>
            This Privacy Policy applies to all users of the Rediplays mobile application and visitors to this website.
          </p>
        </section>

        <section class="policy-section">
          <h2>2. Information We DO NOT Collect</h2>
          <p>
            Our core architecture is built around user privacy and data minimization:
          </p>
          <ul>
            <li><strong>No personal data collection:</strong> We do not request your name, email, phone number, or physical address.</li>
            <li><strong>No tracking of personal listening habits:</strong> We do not store or log listening history on remote proprietary servers.</li>
            <li><strong>No data selling:</strong> No user data is sold, rented, or shared with third parties under any circumstances.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>3. Data Processed Locally on the Device</h2>
          <p>
            To deliver an optimal experience, Rediplays stores certain data strictly within your device's isolated application sandbox:
          </p>
          <ul>
            <li><strong>Audio and image cache:</strong> Cover artwork and temporary audio buffers for smooth, uninterrupted playback.</li>
            <li><strong>Playlists and favorites:</strong> User-curated playlists created within the app.</li>
            <li><strong>Search and playback history:</strong> Stored locally to allow easy navigation and resuming songs.</li>
            <li><strong>Preferences &amp; settings:</strong> UI theme, audio equalizer presets, and language choices.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>4. Android Permissions &amp; Technical Justification</h2>
          <div class="permissions-table-wrap">
            <table class="permissions-table">
              <thead>
                <tr>
                  <th>Permission</th>
                  <th>Purpose / Technical Justification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>INTERNET</code> &amp; <code>ACCESS_NETWORK_STATE</code></td>
                  <td>Connecting to streaming servers to stream content, download album artwork, and verify active network status (Wi-Fi or cellular).</td>
                </tr>
                <tr>
                  <td><code>FOREGROUND_SERVICE</code> &amp; <code>FOREGROUND_SERVICE_MEDIA_PLAYBACK</code></td>
                  <td>Required by Android to maintain continuous audio playback in the background and with the screen locked/off.</td>
                </tr>
                <tr>
                  <td><code>POST_NOTIFICATIONS</code></td>
                  <td>Displays playback controls (play, pause, skip, album art) in the notification bar and lock screen (Android 13+).</td>
                </tr>
                <tr>
                  <td><code>RECORD_AUDIO</code> &amp; <code>FOREGROUND_SERVICE_MICROPHONE</code> (Optional)</td>
                  <td>Used <strong>strictly in real-time</strong> when the user taps the Music Recognizer button. Audio is processed solely in volatile memory to generate an acoustic fingerprint and is <strong>never recorded or stored on the device</strong>.</td>
                </tr>
                <tr>
                  <td><code>SCHEDULE_EXACT_ALARM</code></td>
                  <td>Used exclusively for the user-scheduled Music Alarm / Clock feature.</td>
                </tr>
                <tr>
                  <td><code>READ_MEDIA_AUDIO</code> / <code>READ_EXTERNAL_STORAGE</code> (Optional)</td>
                  <td>Requested solely if the user chooses to browse and play local offline audio files on device storage.</td>
                </tr>
                <tr>
                  <td><code>WAKE_LOCK</code></td>
                  <td>Prevents the processor from entering deep sleep while decoding and playing audio tracks.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="policy-section">
          <h2>5. Third-Party Services &amp; Advertising</h2>
          <ul>
            <li>
              <strong>Google Mobile Ads (AdMob):</strong> The app may display banner, interstitial, or rewarded ads provided by Google AdMob. AdMob may utilize device advertising identifiers (<code>Advertising ID</code>) in accordance with Google's policies. See the 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="link-external">
                Google Privacy Policy
                <span class="icon">open_in_new</span>
              </a>.
            </li>
            <li>
              <strong>Streaming &amp; Metadata Services:</strong> Playback and search requests communicate directly and securely (HTTPS) with respective public content servers.
            </li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>6. User Rights &amp; Data Deletion</h2>
          <ul>
            <li><strong>Clear Cache &amp; History:</strong> You can purge your audio cache and search history at any time from the app Settings menu.</li>
            <li><strong>Permanent Deletion:</strong> Uninstalling the application or clearing data via <em>Android Settings &gt; Apps &gt; Rediplays &gt; Clear Storage</em> immediately and irreversibly erases 100% of locally stored app data.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>7. Children's Privacy</h2>
          <p>
            Rediplays is not directed at children under the age of 13. We do not knowingly collect or solicit personal information from children.
          </p>
        </section>

        <section class="policy-section">
          <h2>8. Contact &amp; Support</h2>
          <p>
            If you have questions or inquiries regarding this Privacy Policy, feel free to contact us via:
          </p>
          <div class="contact-card">
            <span class="icon">code</span>
            <div>
              <strong>Official Repository:</strong>
              <p>
                <a href="https://github.com/Hernandez723/rediplaysapp" target="_blank" rel="noopener noreferrer">
                  GitHub - Rediplays Project (Hernandez723/rediplaysapp)
                </a>
              </p>
            </div>
          </div>
        </section>
      </article>

      <!-- Back / Actions -->
      <div class="privacy-page__actions">
        <RouterLink to="/" class="btn btn-filled btn-lg">
          <span class="icon" aria-hidden="true">arrow_back</span>
          {{ currentLang === 'es' ? 'Volver al Inicio' : 'Back to Home' }}
        </RouterLink>
        <RouterLink to="/faq" class="btn btn-outlined btn-lg">
          <span class="icon" aria-hidden="true">help</span>
          {{ currentLang === 'es' ? 'Preguntas Frecuentes (FAQ)' : 'Frequently Asked Questions' }}
        </RouterLink>
      </div>
    </div>
  </main>
  <FooterSection />
</template>

<style scoped>
.privacy-page {
  position: relative;
  padding: 36px 0 90px;
  overflow-x: hidden;
}

@media (min-width: 480px) {
  .privacy-page {
    padding: 52px 0 120px;
  }
}

.privacy-page__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse 70% 60% at 85% 10%, var(--md-primary-container) 0%, transparent 58%),
    radial-gradient(ellipse 60% 70% at 15% 85%, var(--md-tertiary-container) 0%, transparent 54%),
    radial-gradient(ellipse 45% 50% at 50% 50%, var(--md-secondary-container) 0%, transparent 60%);
  pointer-events: none;
}

.privacy-page__inner {
  position: relative;
  z-index: 1;
  max-width: 920px;
}

/* Header */
.privacy-page__header {
  text-align: center;
  margin-bottom: 40px;
}

.privacy-page__badge {
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

.privacy-page__badge .icon {
  font-size: 1.125rem;
}

.privacy-page__title {
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  letter-spacing: -0.03em;
  margin-bottom: 14px;
  color: var(--md-on-background);
}

.privacy-page__subtitle {
  font-size: 1.0625rem;
  color: var(--md-on-surface-variant);
  max-width: 68ch;
  margin: 0 auto 24px;
  line-height: 1.7;
}

.privacy-page__meta {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  color: var(--md-on-surface-variant);
}

.meta-item .icon {
  font-size: 1.125rem;
  color: var(--md-primary);
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
  padding: 5px 14px;
  border-radius: var(--r-full);
  cursor: pointer;
  transition: background var(--t-fast), color var(--t-fast);
}

.lang-btn.active {
  background: var(--md-primary);
  color: var(--md-on-primary);
}

/* Highlights */
.privacy-highlights {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 40px;
}

@media (min-width: 680px) {
  .privacy-highlights {
    grid-template-columns: repeat(3, 1fr);
  }
}

.highlight-card {
  background: color-mix(in srgb, var(--md-sc) 80%, transparent);
  border: 1px solid var(--md-outline-variant);
  border-radius: var(--r-xl);
  padding: 24px 20px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: transform var(--t-fast), border-color var(--t-fast);
}

.highlight-card:hover {
  transform: translateY(-2px);
  border-color: var(--md-primary);
}

.highlight-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--r-md);
  background: var(--md-primary-container);
  color: var(--md-on-primary-container);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}

.highlight-card h3 {
  font-size: 1.125rem;
  font-weight: 900;
  margin-bottom: 8px;
  color: var(--md-on-surface);
}

.highlight-card p {
  font-size: 0.875rem;
  color: var(--md-on-surface-variant);
  line-height: 1.6;
  margin: 0;
}

/* Content */
.privacy-content {
  background: color-mix(in srgb, var(--md-sc-lowest) 70%, transparent);
  border: 1px solid var(--md-outline-variant);
  border-radius: var(--r-2xl);
  padding: 32px 24px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: var(--el-2);
}

@media (min-width: 640px) {
  .privacy-content {
    padding: 44px 40px;
  }
}

.policy-section {
  margin-bottom: 36px;
}

.policy-section:last-child {
  margin-bottom: 0;
}

.policy-section h2 {
  font-size: 1.375rem;
  font-weight: 900;
  color: var(--md-primary);
  margin-bottom: 14px;
  letter-spacing: -0.01em;
}

.policy-section p {
  font-size: 0.95rem;
  color: var(--md-on-surface);
  line-height: 1.8;
  margin-bottom: 14px;
}

.policy-section p:last-child {
  margin-bottom: 0;
}

.policy-section strong {
  color: var(--md-on-background);
}

.policy-section ul {
  list-style: none;
  padding: 0;
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.policy-section li {
  position: relative;
  padding-left: 24px;
  font-size: 0.9375rem;
  color: var(--md-on-surface-variant);
  line-height: 1.7;
}

.policy-section li::before {
  content: "•";
  position: absolute;
  left: 8px;
  color: var(--md-primary);
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1;
}

.link-external {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--md-primary);
  text-decoration: none;
  font-weight: 600;
  word-break: break-all;
}

.link-external:hover {
  text-decoration: underline;
}

.link-external .icon {
  font-size: 1rem;
}

/* Permissions Table */
.permissions-table-wrap {
  overflow-x: auto;
  margin: 18px 0;
  border-radius: var(--r-lg);
  border: 1px solid var(--md-outline-variant);
}

.permissions-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.875rem;
}

.permissions-table th {
  background: var(--md-sc-high);
  color: var(--md-on-surface);
  font-weight: 700;
  padding: 14px 16px;
  border-bottom: 1px solid var(--md-outline-variant);
}

.permissions-table td {
  padding: 14px 16px;
  border-bottom: 1px solid color-mix(in srgb, var(--md-outline-variant) 40%, transparent);
  color: var(--md-on-surface-variant);
  line-height: 1.6;
  vertical-align: top;
}

.permissions-table tr:last-child td {
  border-bottom: none;
}

.permissions-table code {
  background: var(--md-sc-highest);
  color: var(--md-primary);
  padding: 2px 8px;
  border-radius: var(--r-xs);
  font-family: monospace;
  font-size: 0.8125rem;
}

/* Contact Card */
.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--md-sc-low);
  border: 1px solid var(--md-outline-variant);
  border-radius: var(--r-lg);
  padding: 18px 20px;
  margin-top: 14px;
}

.contact-card .icon {
  color: var(--md-primary);
  font-size: 2rem;
  flex-shrink: 0;
}

.contact-card strong {
  display: block;
  font-size: 0.9375rem;
  color: var(--md-on-surface);
  margin-bottom: 4px;
}

.contact-card p {
  margin: 0;
}

.contact-card a {
  color: var(--md-primary);
  text-decoration: none;
  font-weight: 600;
}

.contact-card a:hover {
  text-decoration: underline;
}

/* Actions */
.privacy-page__actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 36px;
}
</style>
