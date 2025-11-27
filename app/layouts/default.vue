<template>
    <div
        class="bg-background relative z-10 flex min-h-svh flex-col"
        data-slot="layout"
    >
        <SiteHeader />
        <main class="flex flex-1 flex-col">
            <slot />
        </main>
        <SiteFooter />
    </div>
</template>

<script lang="ts" setup>
import { siteConfig } from '~/lib/config'

useSeoMeta({
    title: siteConfig.name,
    titleTemplate: `%s - ${siteConfig.name}`,
    description: siteConfig.description,
})

defineOgImageComponent('Custom')
</script>
