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

function SEO({ description, lang, meta, title, type, url }) {
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
        { name: "og:url", content: `https://justinzhang.ca${url}` },
        { name: "twitter:site", content: "https://justinzhang.ca" },
        { name: "twitter:creator", content: "Justin Zhang" },
        { name: "twitter:title", content: title },
        {
          name: "twitter:image",
          content: "https://doixzan7hf4ti.cloudfront.net/other/headshot.png",
        },
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
          content: "https://doixzan7hf4ti.cloudfront.net/other/headshot.png",
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
  url: "/",
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
}

export default SEO
