<script lang="ts" setup>
import { Tabs } from '@/components/ui/tabs'

const props = defineProps<{
    variant: string
}>()

const variant = ref(props.variant ?? 'account')
</script>

<template>
    <Tabs
        v-model="variant"
        class="relative mt-6 w-full"
    >
        <!--        <TabsList> -->
        <!--            <TabsTrigger value="account"> -->
        <!--                Account -->
        <!--            </TabsTrigger> -->
        <!--            <TabsTrigger value="password"> -->
        <!--                Password -->
        <!--            </TabsTrigger> -->
        <!--        </TabsList> -->
        <!--        <TabsContent value="account"> -->
        <!--            Make changes to your account here. -->
        <!--        </TabsContent> -->
        <!--        <TabsContent value="password"> -->
        <!--            Change your password here. -->
        <!--        </TabsContent> -->
        <slot />
    </Tabs>
</template>
