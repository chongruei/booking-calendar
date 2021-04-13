import { createIntl, createIntlCache } from 'react-intl'

/**
 * Generate IntlShape object
 * @param {Object} props
 * @param {String} props.locale - User specified language
 * @param {String} props.defaultLocale - User defaultLocale language
 * @param {Object} props.messages - Messages
 * @returns {Object}
 */
const generateIntl = props => {
  const cache = createIntlCache()
  const intl = createIntl(props, cache)
  return intl
}

export { generateIntl }
