import { type SchemaTypeDefinition } from 'sanity'
import { author } from '@/sanity/schemaTypes/author'
import { note } from '@/sanity/schemaTypes/note'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, note],
}
