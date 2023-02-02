export default function ({ isHMR, app, route, params, error, redirect }) {
    const language = params.lang || 'en'
    console.log(language,route.fullPath);

      if(route.fullPath == '/PrivacyPolicy'){
        return redirect(`/${language}/PrivacyPolicy`)
      }else if(route.fullPath == '/'){
        
        return redirect(`/${language}/`)
      }

    // app.i18n.locale = language
    // if (isHMR) return
  
    // // If the route does not exist for the current language, redirect to the default language
    // const routeWithLanguage = `/${language}${route.fullPath}`
    // if (!app.i18n.routes.includes(routeWithLanguage)) {
    //   return redirect(`/${app.i18n.defaultLocale}${route.fullPath}`)
    // }
  }