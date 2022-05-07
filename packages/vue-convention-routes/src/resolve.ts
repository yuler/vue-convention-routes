// /_landing./                  -> (layout: _landing.*)
// /_landing.index/             -> /
// /_landing.company/           -> /company
// /_landing.company.team/      -> /company/team
// /_landing.company.careers/   -> /company/careers
// /_landing.docs.doc$/         -> /docs/*
// /_auth./                     -> (layout: _auth.*)
// /_auth.login/                -> /login
// /_auth.signup/               -> /signup
// /_auth.forgot-password/      -> /forgot-password
// /_auth.reset-password/       -> /reset-password
// /app_.loading/               -> /app/loading (does not use app.* layout)
// /app./                       -> (layout: app.*)
// /app.onboarding./            -> (layout: app.onboarding.*)
// /app.onboarding.first-site/  -> /app/onboarding/first-site
// /app.onboarding.setup-local/ -> /app/onboarding/setup-local
// /app.sites.$site/            -> /app/sites/:site

export function resolve(dirname: string) {
  return normalizeRoute(
    dirname
      .split('.')
      .filter(segment => !segment.startsWith('_'))
      .map(segment => {
        // prefix with `$`
        if (segment.startsWith('$')) {
          return `:${segment.slice(1)}`
        }
        // suffix with `_`
        if (segment.endsWith('_')) {
          return segment.slice(0, -1)
        }
        // suffix with `$`
        if (segment.endsWith('$')) {
          return '*'
        }
        if (segment === 'index') {
          return '/'
        }
        return segment
      })
      .join('/'),
  )
}

// Add leading `/` & Remove trailing `/`
function normalizeRoute(route: string) {
  if (!route.startsWith('/')) {
    route = `/${route}`
  }
  if (route.endsWith('/') && route.length > 1) {
    route = route.slice(0, -1)
  }
  return route
}
