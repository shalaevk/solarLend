import React from "react";
import { Helmet } from "react-helmet"

const Head = (props) => {
    let lang = props.lang;
    console.log(lang)
    return (
        <Helmet htmlAttributes={{
            lang: `${lang}`,
        }}>
            <meta charSet="utf-8" />
            <title>Solar Lend</title>
        </Helmet>
    )
}

export default Head