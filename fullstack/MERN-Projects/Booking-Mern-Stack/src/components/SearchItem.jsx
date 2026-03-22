import React from 'react'
import { Link } from 'react-router-dom'

const SearchItem = ({ item }) => {
    console.log(item);
    return (
        <>
            <div className='searchItem'>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square240/261707778.webp?k=33621634dada92e85921bb6f35dec74fb6123d58e193940033ed108b7fe9db1e&o="
                    alt=""
                    className='siImg'
                />
                <div className="siDesc">
                    <h1 className="siTitle">{item.name}</h1>
                    <span className="siDistance">{item.distance}m from center</span>
                    <span className='siTaxiOp'>Free airport taxi</span>
                    <span className="siSubtitle">
                        Studio Apartment with Air conditioning
                    </span>
                    <span className="siFeatures">
                        {item.desc}
                    </span>
                    <span className="siCancelOp">Free cancellation</span>
                    <span className="siCancelOpSubtitle">
                        You can cancel later, so lock in this great price today!
                    </span>
                </div>
                <div className="siDetails">
                    {item.rating && <div className="siRating">
                        <span>Excellent</span>
                        <button>8.9</button>
                    </div>}
                    <div className="siDetailTexts">
                        <span className='siPrice'>${item.cheapestPrice}</span>
                        <span className="siTaxOp">Includes taxes and fees</span>
                        <div className="siRating">
                            <span>Excellent</span>
                            <button>8.9</button>
                        </div>
                        <Link to={`/hotels/${item._id}`}>
                            <button className="siCheckButton">See availability</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchItem