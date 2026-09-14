export type FaqItem = {
  question: string
  answer: string
  category?: string
}

export const FAQ_DATA = {
  es: [
    {
      question: '1. ¿Es Rediplays una app de código abierto?',
      answer:
        'Sí, absolutamente. Rediplays es un proyecto de código abierto bajo licencia GPL-3.0. El código fuente es público, transparente y auditable por cualquier usuario o desarrollador en GitHub.',
      category: 'Código Abierto'
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
      question: '6. ¿Cómo se actualiza la aplicación?',
      answer:
        '• Usuarios de Google Play Store: La aplicación se actualizará de forma automática y segura a través de Google Play Store.\n• Usuarios de versiones independientes / GitHub: Puedes obtener las versiones más recientes directamente desde la sección de Releases en nuestro repositorio oficial de GitHub.',
      category: 'Actualizaciones'
    },
    {
      question: '7. ¿Está disponible para PC o escritorio?',
      answer:
        'Actualmente Rediplays está optimizada exclusivamente para dispositivos Android. Para escuchar en ordenadores o escritorio puedes utilizar cualquier navegador web moderno.',
      category: 'Plataformas'
    },
    {
      question: '8. ¿Cómo puedo reportar un error o sugerir una función?',
      answer:
        'Puedes abrir un reporte de error (Issue) o proponer una idea directamente en la pestaña de Issues de nuestro repositorio oficial de GitHub: github.com/Hernandez723/rediplaysapp.',
      category: 'Soporte'
    }
  ],
  en: [
    {
      question: '1. Is Rediplays an open-source application?',
      answer:
        'Yes, absolutely. Rediplays is an open-source project licensed under GPL-3.0. The source code is public, transparent, and auditable by anyone on GitHub.',
      category: 'Open Source'
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
      question: '6. How does the app update?',
      answer:
        '• Google Play Store users: The app will update automatically and securely through the Google Play Store.\n• Independent / GitHub users: You can grab the latest releases directly from the Releases tab on our official GitHub repository.',
      category: 'Updates'
    },
    {
      question: '7. Is there a PC or Desktop version available?',
      answer:
        'Currently Rediplays is exclusively optimized for Android devices. To listen on PC or desktop, you can use any modern web browser.',
      category: 'Platforms'
    },
    {
      question: '8. How can I report a bug or suggest a new feature?',
      answer:
        'You can open an issue or submit suggestions directly on the Issues tab of our official GitHub repository: github.com/Hernandez723/rediplaysapp.',
      category: 'Support'
    }
  ]
}

export const FAQ_ITEMS = FAQ_DATA.en
