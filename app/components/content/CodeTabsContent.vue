<template>
    <TabsContent :class="cn('relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-medium *:[figure]:first:mt-0 [&>.steps]:mt-6', props.class)">
        <slot />
    </TabsContent>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>
