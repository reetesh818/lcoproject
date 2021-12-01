import * as React from "react"
import { graphql } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Contact from "../components/contact/Contact"

const ContactPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      title="Contact us"
      subtitle=""
      heroclass="contact-background"
      image={data.img.childImageSharp.fluid}
    />
    <Infoblock heading="How can we help?" />
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ContactPage
