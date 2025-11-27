<template>
    <SiteBody>
        <ConfigProvider>
            <TooltipProvider>
                <NuxtLayout>
                    <NuxtPage />
                </NuxtLayout>
            </TooltipProvider>
        </ConfigProvider>
    </SiteBody>
</template>

<script lang="ts" setup>
import { ConfigProvider, TooltipProvider } from 'reka-ui'
</script>
