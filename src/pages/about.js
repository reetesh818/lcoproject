import * as React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import TeamPhotoSection from "../components/about/TeamPhotoSection"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      title="About LearnCodeOnline"
      subtitle=""
      heroclass="about-background"
      image={data.img.childImageSharp.fluid}
    />
    <DualInfoBlock heading="A message from CEO" />
    <Infoblock heading="About Our Vision" />
    <TeamPhotoSection heading="Our Team" />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default AboutPage
