import './styles/quasar.scss'
import iconSet from 'quasar/icon-set/mdi-v4.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/mdi-v4/mdi-v4.css'

import { Notify, Dialog, LoadingBar } from 'quasar'

// To be used on app.use(Quasar, { ... })
export default {
  plugins: [
    Notify,
    Dialog,
    LoadingBar
  ],
  config: {
    dark: true,
    notify: {
      color: 'info',
      closeBtn: false,
      timeout: 5000,
      position: 'bottom-right'
    },
    loadingBar: {
      color: 'primary'
    }
  },
  iconSet: iconSet
}
