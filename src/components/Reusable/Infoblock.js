import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
              natus vitae, ipsa facilis deleniti dicta cumque reiciendis
              reprehenderit nulla fugit distinctio repellat quae possimus amet
              corrupti minima nam vel voluptatibus recusandae voluptates.
              Nostrum ipsam quisquam eaque eveniet, possimus officiis vero
              inventore doloremque deserunt, necessitatibus odio voluptates
              reiciendis molestiae iusto aliquid, totam consequatur consequuntur
              deleniti est a facere dolorem quis.
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Infoblock
