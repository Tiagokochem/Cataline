module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'aff',
    'vue/no-v-html': 'off'

  },
}
