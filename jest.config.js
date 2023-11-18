module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    esbuild: {
      jsxFactory: 'jsx',
      jsxFragment: 'Fragment',
      jsxInject: `import { jsx, Fragment } from 'react'`,
    },
}
 