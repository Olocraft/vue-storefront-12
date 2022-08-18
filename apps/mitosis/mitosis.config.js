const seedrandom = require('seedrandom')
const rng = seedrandom('vue-sdk-seed')
const ifPlugin = require('./plugins/if-plugin');
const vueModelPlugin = require('./plugins/vue-model-plugin');

const getSeededId = () => {
  const rngVal = rng()
  return Number(String(rngVal).split('.')[1]).toString(36)
}

module.exports = {
  files: 'src/**',
  targets: ['react', 'vue2', 'vue3'],
  options: {
    vue3: {
      plugins: [
        ifPlugin({ type: ['vue', 'vue3'] }),
        vueModelPlugin
      ],
    },
    vue2: {
      plugins: [
        ifPlugin({ type: ['vue', 'vue2'] }),
        vueModelPlugin
      ],
    },
    vue: {
      cssNamespace: getSeededId,
    },
    react: {
      plugins: [ifPlugin({ type: 'react' })],
      transpiler: {
        languages: 'ts',
      },
    },
  },
}
