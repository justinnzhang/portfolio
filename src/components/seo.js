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

function SEO({ description, lang, meta, title, type, url, image, keywords }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            image
          }
        }
      }
    `
  )

  const metaURL = url || ""
  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const metaKeywords = keywords || site.siteMetadata.keywords
  const displayImage = image || site.siteMetadata.image

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
        { name: "keywords", content: metaKeywords },
        { name: "og:url", content: `https://justinzhang.ca/${metaURL}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "https://justinzhang.ca" },
        { name: "twitter:creator", content: "@justinnzhang" },
        { name: "twitter:author", content: "@justinnzhang" },
        { name: "twitter:title", content: metaTitle },
        {
          name: "twitter:image",
          content: displayImage,
        },
        {
          name: "twitter:image:alt",
          content:
            "A colorful representation of myself with the text: Hi! I'm Justin Zhang :wave:, Computer Science & Business Student. Learning Software Engineering & Product Management. Previously Designer & Videographer",
        },
        {
          property: "og:title",
          content: metaTitle,
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
          property: "og:image:url",
          content: displayImage,
        },
        {
          property: "og:image:alt",
          content:
            "A colorful representation of myself with the text: Hi! I'm Justin Zhang :wave:, Computer Science & Business Student. Learning Software Engineering & Product Management. Previously Designer & Videographer",
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
