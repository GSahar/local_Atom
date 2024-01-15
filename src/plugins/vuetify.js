/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import theme from './theme'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
          colors: {
            primary: '#4caf50',
            secondary: '#4caf50',
            tertiary: '#495057',
            accent: '#82B1FF',
            error: '#f55a4e',
            info: '#00d3ee',
            success: '#5cb860',
            warning: '#ffa21a',
            general: '#2196F3'
          }
      },
    },
  },
})
