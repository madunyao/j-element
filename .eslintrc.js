module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-param-reassign': 'off',
    'linebreak-style': "off",
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    "no-bitwise": 'off', 
  },

};
