export const defHeader = {
  'Content-Type': 'application/json',
}

/**
 * @description  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * @param {string} url
 * @param {requestOptions} config
 */
const apiClient = async (url, config) => {
  const response = await fetch(`/api/${url}`, {
    headers: defHeader,
    ...config,
  })

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.')
    error.info = await response.json()
    error.status = response.status
    throw error
  }

  return response.json()
}

export default apiClient
