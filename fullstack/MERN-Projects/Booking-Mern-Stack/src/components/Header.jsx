import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faCar, faLandmark, faTaxi, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from "date-fns"

const Header = () => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    return (
        <div className='header'>
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faLandmark} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>

                <h1 className="headerTitle">A lifetime of discounts? It's Awesome.</h1>
                <p className="headerDesc">
                    Get rewardes for your travels - unlock instant savings of 10% or more with a free HotelBooking account.
                </p>
                <button className="headerBtn">Sign in / Register</button>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input
                            type="text"
                            placeholder="where are you going?"
                            className="headerSeachInput" />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon
                            onClick={() => setOpenDate(!openDate)}
                            icon={faCalendarDays}
                            className='headerIcon'
                        />
                        <span
                            className='headerSearchText'
                        >
                            {`${format(date[0].startDate, "MM/dd/yyyy")} 
                            to 
                          ${format(date[0].endDate, "MM/dd/yyyy")}`
                            }
                        </span>
                        {
                            openDate &&
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date'
                            />
                        }

                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span className='headerSearchText'>2 adults 2 children 1 room</span>
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header