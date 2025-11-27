import type { ContentNavigationItem } from '@nuxt/content'

const sortChildrenByTitle = (data: ContentNavigationItem): ContentNavigationItem => {
    if (!data.children) return data

    // 对当前层级 children 排序
    data.children = data.children.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })

    // 递归排序子层级
    data.children = data.children.map(child => sortChildrenByTitle(child))

    return data
}

export const useNavigation = async () => {
    const { data } = await useAsyncData('navigation', () => {
        return queryCollectionNavigation('content')
    }, {
        default: () => ([]),
        transform: (data) => {
            const doc = data.find(i => i.stem === 'docs')!

            return [
                {
                    ...sortChildrenByTitle(doc),
                },
            ]
        },
    })

    return {
        data,
    }
}
