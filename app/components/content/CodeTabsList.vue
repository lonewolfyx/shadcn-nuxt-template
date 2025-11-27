<template>
    <TabsList :class="cn('justify-start gap-4 rounded-none bg-transparent px-0', props.class)">
        <slot />
    </TabsList>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>
