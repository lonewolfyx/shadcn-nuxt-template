<template>
    <Body
        :class="cn(
            'group/body overscroll-none antialiased',
            '[--footer-height:calc(var(--spacing)*14)]',
            '[--header-height:calc(var(--spacing)*14)]',
            'xl:[--footer-height:calc(var(--spacing)*24)]',

            isLayoutFull ? 'layout-full' : 'layout-fixed',
        )"
    >
        <slot />
    </Body>
</template>

<script lang="ts" setup>
import { cn } from '~/lib/utils.js'

const { isLayoutFull } = useConfig()
</script>
