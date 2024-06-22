import { browser } from '$app/environment'
import { init, register, getLocaleFromNavigator } from 'svelte-i18n'

const defaultLocale = 'ro'

register('en', () => import('./locales/en.json'))
register('ro', () => import('./locales/ro.json'))

init({
  fallbackLocale: defaultLocale,
  initialLocale: browser ? (getLocaleFromNavigator() ? getLocaleFromNavigator() : defaultLocale) : defaultLocale,
})