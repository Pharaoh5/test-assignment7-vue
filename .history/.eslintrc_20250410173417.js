module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
    ],
    rules: {
      'vue/no-unused-vars': 'warn',
      'vue/require-v-for-key': 'error',
      'import/no-unresolved': 'error',
    },
  }
  