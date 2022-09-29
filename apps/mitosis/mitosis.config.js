const seedrandom = require('seedrandom')
const rng = seedrandom('vue-sdk-seed')
const ifPlugin = require('./plugins/if-plugin');
const vueComputedProxy = require('./plugins/vueProxy');
const removeVueAttrs = require('./plugins/removeVueAttrs');

const getSeededId = () => {
  const rngVal = rng()
  return Number(String(rngVal).split('.')[1]).toString(36)
}

module.exports = {
  files: 'src/**',
  targets: ['react', 'vue3'],
  options: {
    vue3: {
      cssNamespace: getSeededId,
      typescript: true,
      transpiler: { format: 'esm' },
      plugins: [
        ifPlugin({ type: ['vue', 'vue3'] }),
        vueComputedProxy({ type: ['vue', 'vue3'] }),
        removeVueAttrs({ type: ['vue', 'vue3'] })
      ],
    },
    // vue2: {
    //   cssNamespace: getSeededId,
    //   typescript: true,
    //   transpiler: { format: 'esm' },
    //   plugins: [
    //     ifPlugin({ type: ['vue', 'vue2'] }),
    //     vueComputedProxy({ type: ['vue', 'vue2'] }),
    //     removeVueAttrs({ type: ['vue', 'vue2'] })
    //   ],
    // },
    react: {
      plugins: [
        ifPlugin({ type: 'react' }),
        vueComputedProxy({ type: 'react' }),
        removeVueAttrs({ type: 'react' })
      ],
      typescript: true,
    },
  },
}
