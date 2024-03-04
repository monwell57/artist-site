import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'artist-site-two',

  projectId: '4hglk3si',
  dataset: 'artist-site-march',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
