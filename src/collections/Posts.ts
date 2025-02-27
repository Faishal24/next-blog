import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'title',
        type: 'text',
    },
    {
        name: 'description',
        type: 'textarea',
    },
    {
        name: 'date',
        type: 'date',
    },
    {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
    },
    {
        name: 'slug',
        type: 'text',
    },
    {
        name: 'content',
        type: 'richText',
    },
  ],
}