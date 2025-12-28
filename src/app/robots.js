export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://ramadan-count-down-wheat.vercel.app/sitemap.xml',
    }
}
