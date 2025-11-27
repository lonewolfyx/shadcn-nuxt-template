<template>
    <Button
        :class="cn(
            'bg-surface text-foreground dark:bg-card relative h-8 w-full justify-start pl-3 font-medium shadow-none sm:pr-12 md:w-48 lg:w-56 xl:w-64',
        )"
        variant="secondary"
        @click="open = true"
    >
        <span class="hidden lg:inline-flex">Search documentation...</span>
        <span class="inline-flex lg:hidden">Search...</span>
        <div class="absolute top-1.5 right-1.5 hidden gap-1 sm:flex">
            <KbdGroup>
                <Kbd class="border">{{ isMac ? '⌘' : 'Ctrl' }}</Kbd>
                <Kbd class="border">K</Kbd>
            </KbdGroup>
        </div>
    </Button>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import { useIsMac } from '~/composables/useIsMac'

const isMac = useIsMac()

const open = ref(false)

onKeyStroke('k', (e: KeyboardEvent) => {
    if (['k', '/'].includes(e.key) && (e.metaKey || e.ctrlKey)) {
        alert('自由开发的搜索框')
    }
})
</script>
