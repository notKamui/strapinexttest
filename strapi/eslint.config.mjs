import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: false,
  react: true,
  ignores: [
    'node_modules/**/*',
    'dist/**/*',
  ],
  rules: {
    'curly': ['error', 'multi-line'],
    'brace-style': 'off',
    'antfu/if-newline': 'off',
    'antfu/generic-spacing': 'off',
    'react/prop-types': 'off',
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'style/jsx-one-expression-per-line': 'off',
    'ts/ban-types': 'off',
  },
})
