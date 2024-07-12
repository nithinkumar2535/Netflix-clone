import React from 'react'
import '../SectionTwo/SectionTwo.css'

function SectionTwo() {
  return (
    <div className="section2 mt-2">
      <div className="row">
        <div className="col-lg-6 col-12 image-col">
          <div className='images'>
            <img
              className='mobile-img'
              src="./mobile.png"
              alt=""
            />
            <div className="download-box">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt=""
                height={"auto"}
                width={"60px"}
              />
              <div className="me-5 text-align-center">
                <h6 className="mt-4">Stranger Things</h6>
                <p className="text-primary">Downloading...</p>
              </div>
              <div className="me-4">
                <i class="fa-solid fa-arrow-down"></i>
              </div>
            </div>
          </div> 
        </div>
        <div className="col-lg-6 col-12 txt-col align-items-lg-start">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo