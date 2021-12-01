import React from "react"
import Heading from "../Reusable/Heading"

function TeamPhotoSection({ heading }) {
  return (
    <div className="container">
      <Heading title={heading} />
      <div className="row my-3">
        <div className="col-10 col-sm-10 mx-auto">
          <div class="card-group">
            <div class="card">
              <img
                src="https://images.pexels.com/photos/761304/pexels-photo-761304.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Lucifer MorningStar</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card">
              <img
                src="https://images.pexels.com/photos/761306/pexels-photo-761306.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">John Wick</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card">
              <img
                src="https://images.pexels.com/photos/761305/pexels-photo-761305.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">TChalla</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPhotoSection
