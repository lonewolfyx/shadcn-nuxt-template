<template>
    <div class="flex flex-1 flex-col justify-center items-center">
        <PageHeader>
            <PageHeaderHeading class="max-w-4xl">
                {{ title }}
            </PageHeaderHeading>
            <PageHeaderDescription>{{ description }}</PageHeaderDescription>
        </PageHeader>
    </div>
</template>

<script lang="ts" setup>
import { siteConfig } from '~/lib/config'

const title = 'Effortless and Beautiful Docs Template.'
const description = siteConfig.description

useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterCard: 'summary_large_image',
})
</script>
