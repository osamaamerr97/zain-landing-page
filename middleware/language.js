export default function ({ isHMR, app, route, params, error, redirect }) {

      const lang = app.i18n.locale ||'en'
      if(route.fullPath == '/landing-page/PrivacyPolicy'){
        return redirect(`/${lang}/landing-page/PrivacyPolicy`)
      }else if(route.fullPath == '/landing-page'){
        
        return redirect(`/${lang}/landing-page`)
      }

  }