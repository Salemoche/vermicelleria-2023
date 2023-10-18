export default async function sitemap() {
    const routes = [''].map((route) => ({
        url: `https://vermicelleria.ch/${route}`,
        lastModified: new Date().toISOString()
    }))

    return [...routes]
}