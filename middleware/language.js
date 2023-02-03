export default function ({ isHMR, app, route, params, error, redirect }) {

      const lang = ''
      if(route.fullPath == '/landing-page/PrivacyPolicy'){
        return redirect(`/${app.i18n.locale}/landing-page/PrivacyPolicy`)
      }else if(route.fullPath == '/landing-page'){
        
        return redirect(`/${app.i18n.locale}/landing-page`)
      }

  }