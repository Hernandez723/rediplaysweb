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
          {{ currentLang === 'es' ? 'Política de Privacidad' : 'Privacy Policy' }}
        </h1>
        <p class="privacy-page__subtitle">
          {{ currentLang === 'es'
            ? 'En Rediplays valoramos y respetamos tu privacidad. Esta política detalla de manera transparente cómo tratamos la información al usar nuestra aplicación.'
            : 'At Rediplays, we value and respect your privacy. This policy transparently details how data is handled when using our application.'
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
          <h3>{{ currentLang === 'es' ? 'Sin Rastreadores' : 'Zero Trackers' }}</h3>
          <p>{{ currentLang === 'es' ? 'No incluimos herramientas de telemetría invasiva, analítica de terceros ni publicidad.' : 'No invasive telemetry, third-party analytics trackers, or ad SDKs included.' }}</p>
        </div>

        <div class="highlight-card">
          <div class="highlight-icon">
            <span class="icon">lock</span>
          </div>
          <h3>{{ currentLang === 'es' ? 'Almacenamiento Local' : 'Local Storage' }}</h3>
          <p>{{ currentLang === 'es' ? 'Tus favoritos, historial y descargas permanecen en la memoria privada de tu teléfono.' : 'Your favorites, history, and downloads stay strictly within your device.' }}</p>
        </div>

        <div class="highlight-card">
          <div class="highlight-icon">
            <span class="icon">security</span>
          </div>
          <h3>{{ currentLang === 'es' ? 'Conexión Directa' : 'Direct Connection' }}</h3>
          <p>{{ currentLang === 'es' ? 'Las solicitudes de reproducción se comunican directamente y cifradas (HTTPS) con YouTube/Google.' : 'Media streams connect directly and securely (HTTPS) to YouTube/Google servers.' }}</p>
        </div>
      </section>

      <!-- Policy Content -->
      <article class="privacy-content" v-if="currentLang === 'es'">
        <section class="policy-section">
          <h2>1. Información General y Alcance</h2>
          <p>
            <strong>Rediplays</strong> es una aplicación cliente multimedia de código abierto para dispositivos Android, diseñada para permitir la navegación, búsqueda y reproducción de contenido de audio y música.
          </p>
          <p>
            Esta Política de Privacidad aplica a todos los usuarios que instalen y utilicen la aplicación móvil Rediplays y a los visitantes de este sitio web. El uso de la aplicación implica la aceptación de los términos descritos en este documento.
          </p>
        </section>

        <section class="policy-section">
          <h2>2. Información que NO Recopilamos</h2>
          <p>
            Nuestro principio fundamental es la mínima retención de datos. Nosotros (los desarrolladores de Rediplays):
          </p>
          <ul>
            <li><strong>No recopilamos ni almacenamos datos personales identificables (PII):</strong> No requerimos nombre, número de teléfono, dirección postal ni identificación personal.</li>
            <li><strong>No vendemos ni compartimos datos con terceros:</strong> No comerciamos con ninguna información del usuario bajo ninguna circunstancia.</li>
            <li><strong>No poseemos servidores intermedios de registro:</strong> No enviamos tus búsquedas ni hábitos de escucha a servidores propietarios de telemetría.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>3. Datos Procesados Localmente en el Dispositivo</h2>
          <p>
            Para brindar una experiencia óptima y fluida, Rediplays almacena ciertos datos exclusivamente de forma local en la memoria aislada (sandbox) de tu dispositivo:
          </p>
          <ul>
            <li><strong>Caché de audio e imágenes:</strong> Portadas de álbumes y segmentos de audio para permitir reproducción rápida y sin cortes.</li>
            <li><strong>Listas de reproducción locales y favoritos:</strong> Playlists personalizadas creadas por el usuario en la aplicación.</li>
            <li><strong>Historial de búsqueda y reproducción local:</strong> Guardado únicamente para facilitar la navegación y reanudación de canciones.</li>
            <li><strong>Preferencias y configuración:</strong> Ajustes de ecualizador, tema visual, calidad de transmisión seleccionada e idioma.</li>
            <li><strong>Sesión de cuenta (Opcional):</strong> Si decides iniciar sesión en tu cuenta de YouTube Music, las cookies o tokens de autenticación se almacenan cifradas localmente en tu terminal y solo se envían directamente a los servidores oficiales de Google para sincronizar tus suscripciones y listas de reproducción.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>4. Permisos de Android y su Justificación</h2>
          <p>
            En cumplimiento estricto con las políticas de desarrolladores de Google Play, a continuación se desglosan los permisos requeridos por la aplicación y su finalidad técnica:
          </p>
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
                  <td>Requerido para conectarse a los servidores de streaming, descargar carátulas, buscar canciones y verificar si el dispositivo está conectado a Wi-Fi o datos móviles.</td>
                </tr>
                <tr>
                  <td><code>FOREGROUND_SERVICE</code> &amp; <code>FOREGROUND_SERVICE_MEDIA_PLAYBACK</code></td>
                  <td>Obligatorio en Android para mantener la reproducción continua de música en segundo plano y cuando la pantalla está apagada.</td>
                </tr>
                <tr>
                  <td><code>POST_NOTIFICATIONS</code></td>
                  <td>Permite mostrar los controles multimedia (pausa, siguiente, anterior, carátula) en la barra de notificaciones y pantalla de bloqueo (Android 13+).</td>
                </tr>
                <tr>
                  <td><code>READ_MEDIA_AUDIO</code> / <code>READ_EXTERNAL_STORAGE</code> (Opcional)</td>
                  <td>Únicamente se solicita si el usuario desea reproducir archivos de música locales almacenados en el almacenamiento del teléfono.</td>
                </tr>
                <tr>
                  <td><code>WAKE_LOCK</code></td>
                  <td>Evita que el procesador entre en suspensión profunda mientras se decodifica y reproduce una pista de audio.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="policy-section">
          <h2>5. Servicios de Terceros y APIs</h2>
          <p>
            Al utilizar Rediplays para buscar y reproducir música, la aplicación realiza solicitudes directas a los puntos de enlace públicos de YouTube y Google.
          </p>
          <p>
            Dichas solicitudes están sujetas a los Términos de Servicio y a la Política de Privacidad de Google. Te recomendamos consultar sus políticas oficiales en:
          </p>
          <p>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="link-external">
              Política de Privacidad de Google (https://policies.google.com/privacy)
              <span class="icon">open_in_new</span>
            </a>
          </p>
        </section>

        <section class="policy-section">
          <h2>6. Seguridad y Retención de la Información</h2>
          <p>
            Todas las comunicaciones de red hacia los servicios de audio se realizan mediante protocolos seguros y cifrados <strong>HTTPS (TLS/SSL)</strong>.
          </p>
          <p>
            Los datos locales se mantienen en el almacenamiento protegido de la aplicación provisto por el sistema operativo Android, impidiendo el acceso de otras aplicaciones no autorizadas.
          </p>
        </section>

        <section class="policy-section">
          <h2>7. Derechos del Usuario y Eliminación de Datos</h2>
          <p>
            Tienes el control total sobre tus datos en cualquier momento:
          </p>
          <ul>
            <li><strong>Borrado de caché e historial:</strong> Puedes limpiar la caché de audio y el historial de búsqueda directamente desde el menú de Ajustes dentro de la aplicación.</li>
            <li><strong>Cierre de sesión:</strong> Si vinculaste tu cuenta, puedes desconectarla en cualquier momento, lo cual eliminará instantáneamente cualquier token de sesión guardado.</li>
            <li><strong>Eliminación completa:</strong> Al desinstalar la aplicación de tu dispositivo Android o borrar los datos desde <em>Ajustes del Sistema &gt; Aplicaciones &gt; Rediplays &gt; Almacenamiento &gt; Borrar datos</em>, se eliminarán de forma irreversible e inmediata el 100% de los datos locales asociados.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>8. Privacidad de Menores</h2>
          <p>
            Rediplays no está dirigida deliberadamente a menores de 13 años (o la edad mínima legal en tu jurisdicción). No recopilamos conscientemente información personal de niños. Si eres padre o tutor y tienes inquietudes sobre el uso de la app por parte de un menor, puedes contactarnos.
          </p>
        </section>

        <section class="policy-section">
          <h2>9. Modificaciones a esta Política</h2>
          <p>
            Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en la aplicación, nuevas características o requerimientos regulatorios de Google Play Console. Cualquier cambio sustancial será publicado en esta página con la fecha de revisión actualizada.
          </p>
        </section>

        <section class="policy-section">
          <h2>10. Contacto y Soporte</h2>
          <p>
            Si tienes dudas, sugerencias o comentarios acerca de esta Política de Privacidad o las prácticas de seguridad de Rediplays, puedes abrir una consulta o reporte en nuestro repositorio oficial:
          </p>
          <div class="contact-card">
            <span class="icon">code</span>
            <div>
              <strong>Repositorio y Soporte Comunitario:</strong>
              <p>
                <a href="https://github.com/MetrolistGroup/Metrolist/issues" target="_blank" rel="noopener noreferrer">
                  GitHub Issues - Rediplays Project
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
            <strong>Rediplays</strong> is an open-source media client application for Android devices designed to enable users to browse, search, and stream audio and music content.
          </p>
          <p>
            This Privacy Policy applies to all users who install and use the Rediplays mobile application as well as visitors to this website. By using the application, you agree to the terms described herein.
          </p>
        </section>

        <section class="policy-section">
          <h2>2. Information We DO NOT Collect</h2>
          <p>
            Our core architecture is built around user privacy and data minimization. We (the Rediplays developers):
          </p>
          <ul>
            <li><strong>Do not collect personally identifiable information (PII):</strong> We never ask for your name, phone number, physical address, or national ID.</li>
            <li><strong>Do not sell or monetize personal data:</strong> We do not sell, rent, or trade your data with advertising networks or data brokers.</li>
            <li><strong>Do not operate telemetry or tracking servers:</strong> We do not log your search queries or playback history on private remote servers.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>3. Data Processed Locally on Your Device</h2>
          <p>
            To deliver smooth audio playback and user interface functionality, Rediplays stores certain data strictly within your device's isolated application sandbox:
          </p>
          <ul>
            <li><strong>Audio and image cache:</strong> Artwork thumbnails and audio buffer chunks to speed up loading and reduce bandwidth consumption.</li>
            <li><strong>Local playlists and favorites:</strong> Playlists created locally by you inside the application.</li>
            <li><strong>Local search &amp; playback history:</strong> Stored on-device to allow resuming songs and quick search completions.</li>
            <li><strong>Preferences &amp; settings:</strong> Theme selections, audio equalizer presets, streaming audio quality preferences, and language.</li>
            <li><strong>Account authentication (Optional):</strong> If you choose to log in with your YouTube Music account, auth tokens/cookies are stored securely and encrypted on your device and sent only directly to official Google endpoints.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>4. Android Permissions &amp; Technical Justification</h2>
          <p>
            In accordance with Google Play Developer Policy requirements, the following table details the device permissions requested by Rediplays and their technical justification:
          </p>
          <div class="permissions-table-wrap">
            <table class="permissions-table">
              <thead>
                <tr>
                  <th>Permission</th>
                  <th>Technical Justification / Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>INTERNET</code> &amp; <code>ACCESS_NETWORK_STATE</code></td>
                  <td>Required to communicate with streaming servers, fetch cover art, search songs, and check if network connectivity is active (Wi-Fi vs Cellular).</td>
                </tr>
                <tr>
                  <td><code>FOREGROUND_SERVICE</code> &amp; <code>FOREGROUND_SERVICE_MEDIA_PLAYBACK</code></td>
                  <td>Required by Android to maintain continuous music playback in the background and when the screen is locked/turned off.</td>
                </tr>
                <tr>
                  <td><code>POST_NOTIFICATIONS</code></td>
                  <td>Enables media player controls (play, pause, next, previous, artwork) inside the notification shade and lock screen (Android 13+).</td>
                </tr>
                <tr>
                  <td><code>READ_MEDIA_AUDIO</code> / <code>READ_EXTERNAL_STORAGE</code> (Optional)</td>
                  <td>Requested solely if the user chooses to browse and play local offline music files stored on device storage.</td>
                </tr>
                <tr>
                  <td><code>WAKE_LOCK</code></td>
                  <td>Prevents CPU sleep while actively decoding and streaming audio content.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="policy-section">
          <h2>5. Third-Party Services &amp; APIs</h2>
          <p>
            When searching or streaming media through Rediplays, network requests are routed directly to public Google / YouTube endpoints.
          </p>
          <p>
            Those interactions are governed by Google's Privacy Policy. You can review their privacy practices at:
          </p>
          <p>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="link-external">
              Google Privacy Policy (https://policies.google.com/privacy)
              <span class="icon">open_in_new</span>
            </a>
          </p>
        </section>

        <section class="policy-section">
          <h2>6. Data Security &amp; Encryption</h2>
          <p>
            All network transmissions for metadata, streams, and API interactions use industry-standard <strong>HTTPS (TLS/SSL) encryption</strong> in transit.
          </p>
          <p>
            Local application state is stored inside the Android private sandbox, isolating it from unauthorized third-party apps.
          </p>
        </section>

        <section class="policy-section">
          <h2>7. User Control &amp; Data Deletion Rights</h2>
          <p>
            You have full autonomy over your data at any time:
          </p>
          <ul>
            <li><strong>Clear Cache and History:</strong> You can purge your audio cache, search history, and saved data from inside the App Settings menu.</li>
            <li><strong>Account Sign-Out:</strong> If logged in, signing out immediately wipes all stored session tokens and authentication cookies from your device.</li>
            <li><strong>Complete Permanent Deletion:</strong> Uninstalling the app or wiping app storage via <em>Android Settings &gt; Apps &gt; Rediplays &gt; Storage &gt; Clear Storage</em> permanently deletes 100% of locally stored data.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>8. Children's Privacy</h2>
          <p>
            Rediplays is not directed at children under the age of 13 (or under the minimum age specified by applicable laws in your jurisdiction). We do not knowingly collect or solicit personal information from children.
          </p>
        </section>

        <section class="policy-section">
          <h2>9. Changes to this Policy</h2>
          <p>
            We may revise this Privacy Policy periodically to accommodate updates to the application or changes in regulatory standards. Any revisions will be published on this page with an updated modification date.
          </p>
        </section>

        <section class="policy-section">
          <h2>10. Contact &amp; Support</h2>
          <p>
            If you have questions, inquiries, or feedback regarding this Privacy Policy or Rediplays data practices, please reach out through our official repository:
          </p>
          <div class="contact-card">
            <span class="icon">code</span>
            <div>
              <strong>Community Repository &amp; Issue Tracker:</strong>
              <p>
                <a href="https://github.com/MetrolistGroup/Metrolist/issues" target="_blank" rel="noopener noreferrer">
                  GitHub Issues - Rediplays Project
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
  font-size: clamp(2.2rem, 5vw, 3.4rem);
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
