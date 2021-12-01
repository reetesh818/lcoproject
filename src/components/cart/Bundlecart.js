import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import { GatsbyImage } from "gatsby-plugin-image"

export default class Bundlecart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bundles: props.bundles.edges,
      mybundles: props.bundles.edges,
    }
  }

  render() {
    // console.log(this.state.courses)
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Bundles" />

          <div className="row">
            {this.state.mybundles.map(({ node }) => {
              return (
                <div key={node.id} className="col-11 col-md-6 d-flex mx-auto">
                  <GatsbyImage image={node.image.gatsbyImageData} />
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0 text-capitalize">{node.title}</h6>
                      <h6 className="mb-0 text-success">${node.price}</h6>{" "}
                    </div>

                    <button
                      data-item-id={node.id}
                      data-item-price={node.price}
                      data-item-image={node.image.gatsbyImageData}
                      data-item-name={node.title}
                      data-item-url="https://gatsbylcoproject.netlify.app/"
                      className="btn btn-warning snipcart-add-item"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
