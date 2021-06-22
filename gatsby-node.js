const path = require(`path`)
const languages = [
    {
        path: "/",
        code: "uk",
        language: "uk"

    },
    {
        path: "/ru",
        code: "ru",
        language: "ru"

    },
]
exports.createPages = async ({ actions: { createPage } }) => {
    const HomepageTemplate = path.resolve("./src/components/layouts/Homepage.jsx")

    languages.forEach(lang => {
        createPage({
            path: lang.path,
            component: HomepageTemplate,
            context: {
                lang: lang.code,
                language: lang.language
            },
        })
    })
}

