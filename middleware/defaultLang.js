export default function (props) {
  const { app, route, store, redirect } = props;
  console.log('>>> app.i18n', app.i18n.locales)
  console.log('>>> app.i18n', app.i18n)
  console.log('>>> route', route)
  console.log('>>> route.params.lang', route.params.lang)
  console.log('>>> store.state', store.state)
  console.log('>>> store.state.env.lang', store.state.env.lang)
  console.log('>>> store', store.commit)

  console.log('>>> app.i18n.locales', app.i18n.locales)

  // if(!app.i18n.locales.includes(route.params.lang))
  // {
  //   redirect(`/${app.i18n.defaultLocale}${route.path}`)
  // } else {
  //   store.commit('env/SET_LANGUAGE', route.params.lang)
  // }
}