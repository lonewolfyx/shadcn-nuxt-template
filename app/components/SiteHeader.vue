<template>
    <header class="bg-background sticky top-0 z-50 w-full">
        <div class="container-wrapper 3xl:fixed:px-0 px-6">
            <div class="3xl:fixed:container flex h-(--header-height) items-center **:data-[slot=separator]:!h-4">
                <Button
                    as-child
                    variant="ghost"
                    size="icon"
                    class="hidden size-8 lg:flex"
                >
                    <NuxtLink to="/">
                        <img
                            src="/logo.svg"
                            class="size-5"
                        >
                        <span class="sr-only">{{ siteConfig.name }}</span>
                    </NuxtLink>
                </Button>

                <MainNav
                    :items="siteConfig.navItems"
                    class="hidden lg:flex"
                />
                <div class="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
                    <div class="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
                        <CommandMenu />
                    </div>
                    <Separator
                        class="ml-2 hidden lg:block"
                        orientation="vertical"
                    />
                    <GitHubLink />
                    <Separator
                        class="3xl:flex hidden"
                        orientation="vertical"
                    />
                    <SiteConfig class="3xl:flex hidden" />
                    <Separator orientation="vertical" />
                    <ModeSwitcher />
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { siteConfig } from '@/lib/config'
</script>
