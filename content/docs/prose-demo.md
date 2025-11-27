---
title: Prose Demo
description: Prose components are replacements for HTML typography tags. Prose components provide a simple way to customize content UI.
navigation:
  icon: iconamoon:component
---

# Heading

# H1 Heading

## H2 Heading

### H3 Heading

#### H4 Heading

##### H5 Heading

###### H6 Heading

```bash
# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading
```

# Link

[Link](/docs/prose-demo)

```bash
[Link](/docs/prose-demo)
```

# Block quote

> Block quote

```bash
> Block quote
```

# Code

```js [file.js]{2} showLineNumbers
export default () => {
    console.log('Code block')
}
```

```vue [tabs.vue] showLineNumbers

<script setup lang="ts">
    import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
</script>

<template>
    <Tabs default-value="account">
        <TabsList>
            <TabsTrigger value="account">
                Account
            </TabsTrigger>
            <TabsTrigger value="password">
                Password
            </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
            Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">
            Change your password here.
        </TabsContent>
    </Tabs>
</template>
```

```bash
    ```vue [tabs.vue] showLineNumbers
    <script setup lang="ts">
        import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
    </script>
    
    <template>
        <Tabs default-value="account">
            <TabsList>
                <TabsTrigger value="account">
                    Account
                </TabsTrigger>
                <TabsTrigger value="password">
                    Password
                </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
                Change your password here.
            </TabsContent>
        </Tabs>
    </template>
    ```
```

# Image

![A Cool Image](https://nuxt.com/assets/design-kit/icon-green.png)

```bash
![A Cool Image](https://nuxt.com/assets/design-kit/icon-green.png)
```

# ul

- Just
- An
- Unordered
- List

```bash
- Just
- An
- Unordered
- List
```

# li

- List element
- List element
- List element
- List element

```bash
- List element
- List element
- List element
- List element
```

# ol

1. Foo
2. Bar
3. Baz

```bash
1. Foo
2. Bar
3. Baz
```

# strong

**Just a strong paragraph.**

```bash
**Just a strong paragraph.**
```

# em

_Just an italic paragraph._

```bash
_Just an italic paragraph._
```

# table

| Key | Type      | Description |
|-----|-----------|-------------|
| 1   | Wonderful | Table       |
| 2   | Wonderful | Data        |
| 3   | Wonderful | Website     |

```bash
| Key | Type      | Description |
|-----|-----------|-------------|
| 1   | Wonderful | Table       |
| 2   | Wonderful | Data        |
| 3   | Wonderful | Website     |
```

# steps

::steps

### Initialize Shadcn Vue

Following [Shadcn Vue](https://shadcn-vue.com/docs/installation.html){target="_blank"} Installation guide, installation
configuration `shadcn-vue`。

### Add namespaces with components.json

The components. json file holds configuration for your project, and allow easy installation of any components.

::

```bash
::steps

### Initialize Shadcn Vue

Following [Shadcn Vue](https://shadcn-vue.com/docs/installation.html){target="_blank"} Installation guide, installation
configuration `shadcn-vue`。

### Add namespaces with components.json

The components. json file holds configuration for your project, and allow easy installation of any components.
::
```

# tabs

::code-tabs{variant="cli"}

::code-tabs-list
  ::code-tabs-trigger{value="cli"}
  Cli
  ::
  ::code-tabs-trigger{value="manual"}
  Manual
  ::
::

::code-tabs-content{value="cli"}
Cli content
::
::code-tabs-content{value="manual"}

  ::steps
  
  ### Initialize Shadcn Vue
  
  Following [Shadcn Vue](https://shadcn-vue.com/docs/installation.html){target="_blank"} Installation guide, installation
  configuration `shadcn-vue`。
  
  ### Add namespaces with components.json
  
  The components. json file holds configuration for your project, and allow easy installation of any components.
  
  ::

::

::

```bash
::code-tabs{variant="cli"}

::code-tabs-list
  ::code-tabs-trigger{value="cli"}
  Cli
  ::
  ::code-tabs-trigger{value="manual"}
  Manual
  ::
::

::code-tabs-content{value="cli"}
Cli content
::
::code-tabs-content{value="manual"}

  ::steps
  
  ### Initialize Shadcn Vue
  
  Following [Shadcn Vue](https://shadcn-vue.com/docs/installation.html){target="_blank"} Installation guide, installation
  configuration `shadcn-vue`。
  
  ### Add namespaces with components.json
  
  The components. json file holds configuration for your project, and allow easy installation of any components.
  
  ::

::

::
```