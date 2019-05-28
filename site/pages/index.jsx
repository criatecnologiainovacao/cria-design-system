export default {
  documents: {
    'quick-start': require('./quick-start/index.jsx')
  },
  components: {
    'Básicos': {
      'layout': require('../../src/components/layout/docs'),
      'button': require('../../src/components/button/docs')
    },
    'Dados': {
      'tag': require('../../src/components/tag/docs')
    },
      'Especificos': {
        'step-bar': require('../../src/components/step-bar/docs')
      }
  }
}
