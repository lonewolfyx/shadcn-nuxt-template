export const getIconForLanguageExtension = (language: string) => {
    switch (language) {
        case 'json':
            return 'devicon:json'
        case 'css':
            return 'bi:css'
        case 'js':
        case 'jsx':
            return 'ph:file-js'
        case 'ts':
        case 'tsx':
        case 'typescript':
            return 'ph:file-ts'
        case 'vue':
            return 'logos:vue'
        default:
            return 'solar:file-broken'
    }
}
