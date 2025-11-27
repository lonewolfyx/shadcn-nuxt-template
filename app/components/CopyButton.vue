<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { toRefs } from 'vue'
import { useClipboard } from '@vueuse/core'

import { cn } from '@/lib/utils'
import type { ButtonVariants } from '~/components/ui/button'

const props = withDefaults(defineProps<{
    value?: string
    class?: HTMLAttributes['class']
    variant?: ButtonVariants['variant']
    tooltip?: string
}>(), {
    value: '',
    variant: 'ghost',
    tooltip: 'Copy to Clipboard',
})
const { value } = toRefs(props)

const { copy, copied } = useClipboard({ source: value })
</script>

<template>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger as-child>
                <Button
                    :class="cn(
                        'bg-code absolute top-3 right-2 z-10 size-7 hover:opacity-100 focus-visible:opacity-100',
                        props.class,
                    )"
                    :variant="variant"
                    data-slot="copy-button"
                    size="icon"
                    v-bind="$attrs"
                    @click="copy()"
                >
                    <span class="sr-only">Copy</span>
                    <Icon
                        v-if="copied"
                        name="tabler:check"
                    />
                    <Icon
                        v-else
                        name="tabler:copy"
                    />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                {{ copied ? "Copied" : tooltip }}
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>
