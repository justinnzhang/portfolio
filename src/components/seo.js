/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../images/favicon.ico"
import publicImage from "../images/headshot.jpg"

function SEO({ description, lang, meta, title, type }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "author",
          content: "Justin Zhang",
        },
        { name: "image", content: publicImage },
        { name: "twitter:site", content: "justinzhang.ca" },
        { name: "twitter:creator", content: "Justin Zhang" },
        { name: "twitter:title", content: title },
        { name: "twitter:image", content: publicImage },
        {
          property: "og:title",
          content: title,
        },
        { property: "og:site_name", content: "Justin Zhang's Portfolio" },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: type,
        },
        {
          property: "og:image",
          content: publicImage,
        },
      ].concat(meta)}
    >
      <link rel="icon" href={favicon} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
