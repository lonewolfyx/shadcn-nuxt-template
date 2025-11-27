<template>
    <Button
        :class="cn('size-8', props.class)"
        size="icon"

        title="Toggle layout"
        variant="ghost"
        @click="setLayout()"
    >
        <span class="sr-only">Toggle layout</span>
        <Icon
            name="lucide:gallery-horizontal"
            size="16"
        />
    </Button>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()

const { config } = useConfig()

const setLayout = () => {
    config.value.layout = config.value.layout === 'fixed' ? 'full' : 'fixed'
}
</script>
