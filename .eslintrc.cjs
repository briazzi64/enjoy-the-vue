module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-var': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'prefer-template': 'error',
    'no-useless-return': 'warn',
    'no-unneeded-ternary': 'error',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'smart'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/multi-word-component-names': ['off'],
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        endOfLine: 'auto',
        trailingComma: 'none',
        semi: true
      }
    ]
  }
};
