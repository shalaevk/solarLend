import React from "react";
import { Helmet } from "react-helmet"

import favicon from "../images/favicon-32x32.png"
import logo from "../static/logo.png"

const Head = (props) => {
    let lang = props.lang;
    // console.log(lang)
    return (
        <Helmet htmlAttributes={{
            lang: `${lang}`,
        }}

        >
            <meta charSet="utf-8" />
            <title>{lang === "uk" ? "Сонячні електростанції в Україні | Solarland" : "Солнечные электростанции в Украине | Solarland"}</title>
            <link rel="icon" href={favicon} />
            <meta name="description" content={lang === "uk" ? "Сонячні електростанції в Україні" : "Солнечные электростанции в Украине"} />
            <meta property="og:image" content="https://solarland.s-tet.top/wp-content/uploads/2021/07/logo-1.jpg" />
        </Helmet>
    )
}

export default Head