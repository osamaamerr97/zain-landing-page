export default function ({ isHMR, app, route, params, error, redirect }) {

      if(route.fullPath == '/PrivacyPolicy'){
        return redirect(`/${app.i18n.locale}/PrivacyPolicy`)
      }else if(route.fullPath == '/'){
        
        return redirect(`/${app.i18n.locale}/`)
      }

  }