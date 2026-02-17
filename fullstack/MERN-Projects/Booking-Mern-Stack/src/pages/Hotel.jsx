import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MailList from '../components/MailList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708023796.jpg?k=d79697947d2fe632284da8df1f1e9477ccd8a6c1f668cf63c5c38ba4ffe5e2a1&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708023834.jpg?k=5b01826303e968ff175ef9ee1881ebced087b233df2ff7eec0d52b9874335f36&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708023797.jpg?k=22f6854a2d9498188dbab6ae9cfcfe88c0cbf0e1ff26a39b6f077d4566b238ed&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708023755.jpg?k=7ef3de94cdf6e1408096b6325a37edca2bbdf64bc7f0ae1c279d37e14d15cef1&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/708023835.jpg?k=567ec087f76b4d16212e39374941f2d463de44ed17eb05fc3fe354be5c9cbfe5&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/799018741.jpg?k=9d16b420de819894907c3dae5a0a13a2e4ab298cf85620d0252308985e18b7ff&o="
    },
  ]

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">

          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTittle">Grand Hotel</h1>

          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>

          <span className='hotelDistance'>
            Excellent location - 500m from center
          </span>

          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>

          <div className="hotelImages">
            {
              photos.map((photo, key) => (
                <div className="hotelImgWrapper" key={key}>
                  <img src={photo.src} alt="" className="hotelImg" />
                </div>
              ))
            }
          </div>

          <div className="hotelDetails">

            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow,
                Tower Street Apartments has accommodations with air conditioning and free WiFi.
                The units come with hardwood floors and feature a fully equipped kitchenette with a microwave,
                a flat-screen TV, and a private bathroom with shower and a hairdryer.
                A fridge is also offered, as well as an electric tea pot and a coffee machine.
                Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.
                The nearest airport is John Paul II International Kraków–Balice, 16.1 km from Tower Street Apartments,
                and the property offers a paid airport shuttle service.
              </p>
            </div>

            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel