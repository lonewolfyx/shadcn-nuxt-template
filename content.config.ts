import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: {
                include: 'docs/**/*.{md,yml}',
            },
        }),
    },
})
