import { useIntl } from 'react-intl'

/* Message helper fn */
const useTranslate = () => {
  const { formatMessage } = useIntl()
  const formatMessageFn = (id, values) => formatMessage({ id }, values)
  return formatMessageFn
}

export default useTranslate
