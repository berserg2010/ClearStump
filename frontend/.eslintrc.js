module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'comma-dangle': ['error', 'always-multiline'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    semi: [2, 'always'],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 2 }],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-return-assign': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
