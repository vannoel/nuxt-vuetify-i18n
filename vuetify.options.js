import colors from 'vuetify/es5/util/colors'

export default function (props) {
  const { app } = props;
  return {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
    lang: {
      t: (key, ...params) => app.i18n.t(key, params)
    }
  }
}