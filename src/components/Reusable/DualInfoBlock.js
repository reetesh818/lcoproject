// import { Link } from "gatsby"
import React from "react"
import Heading from "./Heading"

function DualInfoBlock({ heading }) {
  return (
    <section className="my-4 py-4 bg-theme ">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
              natus vitae, ipsa facilis deleniti dicta cumque reiciendis
              reprehenderit nulla fugit distinctio repellat quae possimus amet
              corrupti minima nam vel voluptatibus recusandae voluptates.
              Nostrum ipsam quisquam eaque eveniet, possimus officiis vero
              inventore doloremque deserunt, necessitatibus odio voluptates
              reiciendis molestiae iusto aliquid, totam consequatur consequuntur
              deleniti est a facere dolorem quis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Odio non natus vitae, ipsa facilis
              deleniti dicta cumque reiciendis reprehenderit nulla fugit
              distinctio repellat quae possimus amet corrupti minima nam vel
              voluptatibus recusandae voluptates. Nostrum ipsam quisquam eaque
              eveniet, possimus officiis vero inventore doloremque deserunt,
              necessitatibus odio voluptates reiciendis molestiae iusto aliquid,
              totam consequatur consequuntur deleniti est a facere dolorem quis.
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <img
                src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="image goes here"
              />
              <div className="card-body">
                <h5 className="card-title text-white">Just Click Photos</h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  non natus vitae, ipsa facilis deleniti dicta cumque reiciendis
                  reprehenderit nulla fugit distinctio repellat quae possimus
                  amet corrupti minima nam vel voluptatibus recusandae
                  voluptates.
                </p>
                <a href="#" className="btn btn-primary btn-block">
                  {heading}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DualInfoBlock
