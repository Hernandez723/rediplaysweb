export type FaqItem = {
  question: string
  answer: string
  category?: string
}

export const FAQ_DATA = {
  es: [
    {
      question: '¿Es seguro usar Rediplays?',
      answer:
        'Sí, absolutamente. Rediplays es un proyecto de código abierto bajo licencia GPL-3.0. El código fuente es público, transparente y auditable por cualquier usuario o desarrollador en GitHub.',
      category: 'Seguridad'
    },
    {
      question: '¿Cómo funciona el Reconocedor de Música con el Micrófono?',
      answer:
        'Cuando presionas el botón de reconocimiento, la app escucha únicamente unos segundos en tiempo real. El audio se procesa en la memoria volátil del dispositivo para generar la huella acústica y buscar la canción. El audio nunca se graba, no se guarda en el teléfono y nunca se envía a servidores privados.',
      category: 'Funciones'
    },
    {
      question: '¿Cómo funciona la Alarma Musical / Despertador?',
      answer:
        'Puedes programar alarmas para despertar con tus canciones o playlists favoritas. La app utiliza el permiso de alarmas exactas de Android (SCHEDULE_EXACT_ALARM) para garantizar que la música empiece a sonar puntualmente a la hora fijada, incluso con la pantalla apagada.',
      category: 'Funciones'
    },
    {
      question: '¿Puedo iniciar sesión con mi cuenta de Google / YouTube Music?',
      answer:
        'Sí. Rediplays permite iniciar sesión de forma opcional para sincronizar tus listas de reproducción, suscripciones y biblioteca personal directamente con los servidores de YouTube Music.',
      category: 'Cuentas'
    },
    {
      question: '¿Mis datos, listas y favoritos se guardan en servidores externos?',
      answer:
        'No. Todas tus listas de reproducción locales, favoritos, descargas e historial de reproducción se almacenan exclusivamente de forma local en la memoria protegida (sandbox) de tu dispositivo.',
      category: 'Privacidad'
    },
    {
      question: '¿Cómo se actualiza la aplicación?',
      answer:
        'Puedes actualizarla utilizando el actualizador integrado dentro de la app o descargando la versión más reciente del archivo APK directamente desde la sección de Releases en nuestro repositorio oficial de GitHub.',
      category: 'Actualizaciones'
    },
    {
      question: '¿Existe una versión para iOS o PC (Escritorio)?',
      answer:
        'Actualmente Rediplays está optimizada exclusivamente para Android. Para escritorio puedes utilizar YouTube Music en tu navegador o clientes alternativos de la comunidad.',
      category: 'Plataformas'
    },
    {
      question: '¿Cómo puedo reportar un error o solicitar una nueva función?',
      answer:
        'Puedes abrir un reporte de error (Issue) o proponer una idea en la pestaña de Issues de nuestro repositorio de GitHub en github.com/Hernandez723/rediplaysapp.',
      category: 'Soporte'
    }
  ],
  en: [
    {
      question: 'Is Rediplays safe to use?',
      answer:
        'Yes, absolutely. Rediplays is open-source under the GPL-3.0 license. The source code is publicly auditable and transparent on GitHub.',
      category: 'Security'
    },
    {
      question: 'How does the Music Recognizer with Microphone work?',
      answer:
        'When you tap the recognizer button, the app listens in real time for a few seconds. The audio is processed entirely in volatile memory to calculate the acoustic fingerprint. Audio is never saved, recorded to disk, or sent to private servers.',
      category: 'Features'
    },
    {
      question: 'How does the Music Alarm / Clock work?',
      answer:
        'You can set alarms to wake up with your favorite tracks or playlists. The app uses Android exact alarms (SCHEDULE_EXACT_ALARM) to guarantee that music starts on time, even if your phone screen is turned off.',
      category: 'Features'
    },
    {
      question: 'Can I log in with my Google / YouTube Music account?',
      answer:
        'Yes. Rediplays supports optional login to sync your personal playlists, library, and subscriptions directly with YouTube Music servers.',
      category: 'Accounts'
    },
    {
      question: 'Are my playlists and favorites stored on remote servers?',
      answer:
        'No. All local playlists, favorites, downloads, and playback history are stored strictly within the private sandbox memory of your Android device.',
      category: 'Privacy'
    },
    {
      question: 'How do I update the application?',
      answer:
        'You can update via the built-in in-app updater or by downloading the latest APK release directly from the GitHub Releases page.',
      category: 'Updates'
    },
    {
      question: 'Is there an iOS or Desktop version?',
      answer:
        'Currently Rediplays is exclusively built for Android. For desktop, you can use YouTube Music in your browser or community desktop wrappers.',
      category: 'Platforms'
    },
    {
      question: 'How can I report a bug or request a feature?',
      answer:
        'You can open an issue or feature request on our official GitHub repository at github.com/Hernandez723/rediplaysapp.',
      category: 'Support'
    }
  ]
}

// Backward compatibility export for components importing FAQ_ITEMS
export const FAQ_ITEMS = FAQ_DATA.en
