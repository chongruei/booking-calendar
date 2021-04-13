module.exports = {
  moduleNameMapper: {
    '@/i18n': '<rootDir>/__mocks__/i18nMock.js',
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|scss|less)$': 'identity-obj-proxy',
    'next/config': '<rootDir>/__mocks__/next/config.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '/public/', '.next'],
}
