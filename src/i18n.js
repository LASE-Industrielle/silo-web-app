/* eslint-disable max-len */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Move them to separate file if translations become too big
const resources = {
  de: {
    translation: {
      'Search by name or address...': 'Suche nach Name oder Adresse...',

      'Sign In': 'Einloggen',
      'Email': 'Email',
      'Password': 'Passwort',
      'Forgot Password': 'Passwort vergessen',
      'LOG IN': 'EINLOGGEN',
      'Don\'t have an account?': 'Sie haben noch keinen Account?',
      'Sign up': 'Anmelden',

      'Silos': 'Silos',
      'Content': 'Inhalt',
      'Capacity': 'Kapazität',
      'Average': 'Durchschnittlich',
      'ANALYTICS': 'ANALYTIK',
      'Analytics': 'Analytiks',
      'Configuration': 'Konfiguration',

      'Width': 'Breite',
      'Height': 'Höhe',
      'Location': 'Ort',
      'Serial Number': 'Seriennummer',
      'Type': 'Typ',
      'full': 'voll',

      'Sign out': 'Ausloggen',
      'Profile': 'Profil',
      'Notifications': 'Benachrichtigungen',
      'Mark all as read': 'Markiere alle als gelesen',
      'Clear all': 'Alles löschen',
      'Read notifications': 'Benachrichtigung gelesen',

      unreadNotifications: 'Sie haben ({{unreadCount}}) ungelesene Benachrichtigungen',
      'Read': 'Gelesen',

      'Last hour': 'Letzte Stunde',
      'Last day': 'Letzter Tag',
      'Last week': 'Letzte Woche',
      'Last month': 'Letzten Monat',

      'Select start date & time': 'Wählen Sie Startdatum und -zeit',
      'Select end date & time': 'Wählen Sie Enddatum und -zeit',
      'Apply custom dates': 'Zeitraum auswählen',
      'Export data to csv': 'Daten nach CSV exportieren',
      'Graph Data':"Grafikdaten",

      timeAgo: "vor {{timeAgo}}",
      "Time":"Zeit"
    },
  },

}

i18n.use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'de',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
