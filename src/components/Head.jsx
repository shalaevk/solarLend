import React from "react";
import { Helmet } from "react-helmet"

import favicon from "../images/favicon-32x32.png"
import logo from "../images/logo.svg"

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
            <meta property="og:image" name="image" content={favicon} />
        </Helmet>
    )
}

export default Head