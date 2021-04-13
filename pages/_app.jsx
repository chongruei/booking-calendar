import AppProvider from '@/context/AppProvider'

import '@/styles/reset.css'

function WebApp({ Component }) {
  return (
    <AppProvider>
      <Component />
    </AppProvider>
  )
}

export default WebApp
