import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PrimaryLayout from '../components/layouts/PrimaryLayout'



const Privacy = () => {





   const data = useStaticQuery(graphql`
   query About ($lang: String!) {
      allWpMenu(filter: {language: {eq: $lang}}) {
          edges {
              node {
                  slug
                  menuItems {
                      nodes {
                          path
                          label
                      }
                  }
              }
          }
      }
   }
 `)
   console.log(data)

   return (

      <PrimaryLayout >


         <section className="privacy">

            IT WORKS

         </section>

      </PrimaryLayout>


   )
}

export default Privacy;

