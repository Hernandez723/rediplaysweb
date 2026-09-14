export type FaqItem = {
  question: string
  answer: string
  category?: string
}

export const FAQ_DATA = {
  es: [
    {
      question: '1. ¿Cómo se distribuye la app?',
      answer:
        'Rediplays se distribuye exclusivamente a través de Google Play Store para garantizar la seguridad, integridad y actualizaciones automáticas de todos los usuarios.',
      category: 'Distribución'
    },
    {
      question: '2. ¿Cómo funciona el reconocimiento musical y qué pasa con el audio?',
      answer:
        'Cuando presionas el botón de reconocimiento, la app escucha únicamente unos segundos en tiempo real. El audio se procesa en la memoria volátil del dispositivo para generar la huella acústica y buscar la canción. El audio nunca se graba, no se guarda en el teléfono y nunca se envía a servidores privados.',
      category: 'Funciones'
    },
    {
      question: '3. ¿Cómo funciona la alarma musical?',
      answer:
        'Puedes programar alarmas para despertar con tus canciones o playlists favoritas. La app utiliza el permiso de alarmas exactas de Android (SCHEDULE_EXACT_ALARM) para garantizar que la música empiece a sonar puntualmente a la hora fijada, incluso con la pantalla apagada.',
      category: 'Funciones'
    },
    {
      question: '4. ¿Puedo sincronizar mi cuenta y listas de reproducción?',
      answer:
        'Sí. Rediplays permite iniciar sesión de forma opcional para sincronizar tus listas de reproducción, suscripciones y biblioteca personal en la nube directamente con los servidores del servicio de forma cifrada y segura.',
      category: 'Sincronización'
    },
    {
      question: '5. ¿Mis listas locales o historial se suben a algún servidor?',
      answer:
        'No. Todas tus listas de reproducción locales, favoritos, descargas e historial de reproducción se almacenan exclusivamente de forma local en la memoria protegida (sandbox) de tu dispositivo.',
      category: 'Privacidad'
    },
    {
      question: '6. ¿Cómo se actualiza la app?',
      answer:
        'Las actualizaciones se descargan e instalan automáticamente de forma segura a través de Google Play Store.',
      category: 'Actualizaciones'
    },
    {
      question: '7. ¿Está disponible para PC o escritorio?',
      answer:
        'Actualmente Rediplays está optimizada exclusivamente para dispositivos Android. Para escuchar en ordenadores o escritorio puedes utilizar cualquier navegador web moderno.',
      category: 'Plataformas'
    },
    {
      question: '8. ¿Cómo puedo obtener soporte o reportar un problema?',
      answer:
        'Puedes ponerte en contacto directamente con nuestro equipo de soporte a través de nuestro correo electrónico oficial de contacto: contacto@rediplays.com.',
      category: 'Soporte'
    }
  ],
  en: [
    {
      question: '1. How is the application distributed?',
      answer:
        'Rediplays is distributed exclusively through the Google Play Store to guarantee the security, integrity, and automatic updates for all users.',
      category: 'Distribution'
    },
    {
      question: '2. How does music recognition work and what happens with audio?',
      answer:
        'When tapping the recognition button, the app listens strictly in real time for a few seconds. Audio is processed solely in volatile memory to compute the acoustic signature. Audio is never saved, recorded to disk, or transmitted to private servers.',
      category: 'Features'
    },
    {
      question: '3. How does the music alarm work?',
      answer:
        'You can set alarms to wake up with your favorite tracks or playlists. The app uses Android exact alarms (SCHEDULE_EXACT_ALARM) to ensure music plays right on time, even when the screen is turned off.',
      category: 'Features'
    },
    {
      question: '4. Can I sync my account and playlists?',
      answer:
        'Yes. Rediplays allows optional login to synchronize your playlists, subscriptions, and personal cloud library directly with service endpoints over encrypted HTTPS connections.',
      category: 'Sync'
    },
    {
      question: '5. Are my local playlists or history uploaded to remote servers?',
      answer:
        'No. All local playlists, favorites, downloads, and playback history remain exclusively stored within your device isolated sandbox storage.',
      category: 'Privacy'
    },
    {
      question: '6. How is the app updated?',
      answer:
        'Updates are downloaded and installed automatically and securely through the Google Play Store.',
      category: 'Updates'
    },
    {
      question: '7. Is there a PC or Desktop version available?',
      answer:
        'Currently Rediplays is exclusively optimized for Android devices. To listen on PC or desktop, you can use any modern web browser.',
      category: 'Platforms'
    },
    {
      question: '8. How can I get support or report an issue?',
      answer:
        'You can contact our support team directly via our official email address: contacto@rediplays.com.',
      category: 'Support'
    }
  ]
}

export const FAQ_ITEMS = FAQ_DATA.en
