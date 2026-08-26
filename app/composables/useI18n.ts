import { onMounted } from 'vue'

export type Locale = 'pl' | 'en'

export const useI18n = () => {
  const locale = useState<Locale>('locale', () => 'pl')

  onMounted(() => {
    const saved = localStorage.getItem('fz_locale') as Locale | null
    if (saved && (saved === 'pl' || saved === 'en')) {
      locale.value = saved
    }
  })

  const setLocale = (newLocale: Locale) => {
    locale.value = newLocale
    if (import.meta.client) {
      localStorage.setItem('fz_locale', newLocale)
    }
  }

  const toggleLocale = () => {
    setLocale(locale.value === 'pl' ? 'en' : 'pl')
  }

  return {
    locale,
    setLocale,
    toggleLocale
  }
}
