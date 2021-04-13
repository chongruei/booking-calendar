import { RawIntlProvider } from 'react-intl'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'

import dicEn from '@/i18n/en/en.json'
import dicTw from '@/i18n/zh-TW/zh-TW.json'
import { generateIntl } from '@/utils/i18n/intl'

const dictionaries = {
  en: dicEn,
  'zh-TW': dicTw,
}

// i18n trigger
const AppProvider = ({ defaultLocale, children }) => {
  const router = useRouter()
  const { locale, locales } = router

  const intlValue = generateIntl({
    locale: locales,
    defaultLocale,
    messages: dictionaries[locale],
  })

  return (
    <SWRConfig
      value={{
        shouldRetryOnError: false,
        revalidateOnFocus: false,
      }}
    >
      <RawIntlProvider value={intlValue}>{children}</RawIntlProvider>
    </SWRConfig>
  )
}

export default AppProvider
