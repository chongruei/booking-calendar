export const padding2Zero = value => {
  if (typeof value === 'string') return value.padStart(2, '0')
  return value.toString().padStart(2, '0')
}
