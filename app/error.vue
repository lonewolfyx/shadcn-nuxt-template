<template>
    <SiteBody>
        <ConfigProvider>
            <NuxtLayout
                :use-id="useIdFunction"
                name="default"
            >
                <div class="flex flex-col items-center justify-center gap-6 text-center min-h-[80vh]">
                    <PageHeader>
                        <PageHeaderHeading>{{ error.statusCode }}</PageHeaderHeading>
                        <PageHeaderDescription>{{ error.message }}</PageHeaderDescription>
                        <Button
                            as-child
                            class="w-fit mt-6"
                        >
                            <NuxtLink to="/">
                                Go back home
                            </NuxtLink>
                        </Button>
                    </PageHeader>
                </div>
            </NuxtLayout>
        </ConfigProvider>
    </SiteBody>
</template>

<script lang="ts" setup>
import { ConfigProvider } from 'reka-ui'
import type { NuxtError } from '#app'

defineProps<{
    error: NuxtError
}>()

const useIdFunction = () => useId()
</script>
