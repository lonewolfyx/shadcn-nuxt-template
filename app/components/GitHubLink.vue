<template>
    <Button
        as-child
        class="h-8 shadow-none"
        size="sm"
        variant="ghost"
    >
        <NuxtLink
            :to="siteConfig.links.github"
            rel="noreferrer"
            target="_blank"
        >
            <Icon name="mdi:github" />
            <Skeleton
                v-if="pending"
                class="h-4 w-8"
            />
            <span
                v-else
                class="text-muted-foreground w-8 text-xs tabular-nums"
            >
                {{ stars }}
            </span>
        </NuxtLink>
    </Button>
</template>

<script lang="ts" setup>
import { siteConfig } from '~/lib/config'

const { data, pending } = useLazyFetch('https://ungh.cc/repos/lonewolfyx/shadcn-nuxt-template')

const stars = computed(() => {
    const count = data.value?.repo?.stars
    if (!count)
        return null
    return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toLocaleString()
})
</script>
