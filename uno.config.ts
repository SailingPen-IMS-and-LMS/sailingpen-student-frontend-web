import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  safelist: ['block'],
  presets: [
    presetUno(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
