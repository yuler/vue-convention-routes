import {describe, expect, it} from 'vitest'
import {resolve} from '../src/resolve'

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
const cases = [
  {
    dirname: '_landing.index',
    expected: '/',
  },
  {
    dirname: '_landing.company',
    expected: '/company',
  },
  {
    dirname: '_landing.company.team',
    expected: '/company/team',
  },
  {
    dirname: '_landing.company.careers',
    expected: '/company/careers',
  },
  {dirname: '_landing.docs.doc$', expected: '/docs/*'},
  {dirname: '_auth.login', expected: '/login'},
  {dirname: '_auth.signup', expected: '/signup'},
  {dirname: '_auth.forgot-password', expected: '/forgot-password'},
  {dirname: '_auth.reset-password', expected: '/reset-password'},
  {dirname: 'app_.loading', expected: '/app/loading'},
  {dirname: 'app.', expected: '/app'},
  {dirname: 'app.onboarding.', expected: '/app/onboarding'},
  {
    dirname: 'app.onboarding.first-site',
    expected: '/app/onboarding/first-site',
  },
  {
    dirname: 'app.onboarding.setup-local',
    expected: '/app/onboarding/setup-local',
  },
  {
    dirname: 'app.sites.$site',
    expected: '/app/sites/:site',
  },
]

describe('`src/resolve spec test`', () => {
  for (const item of cases) {
    it(`should resolve ${item.dirname} to ${item.expected}`, () => {
      expect(resolve(item.dirname)).toBe(item.expected)
    })
  }
})
