import { useContext, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../hooks/userFetch.js"
import { SearchContext } from '../context/SearchContext.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reserve = ({ setOpenBooking, hotelId }) => {
  
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(`/api/hotels/rooms/${hotelId}`);

  // console.log(data);

  const { dates } = useContext(SearchContext);

  const [selectedRooms, setSelectedRooms] = useState([]);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let dateList = []
    while (date <= end) {
      dateList.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dateList;
  }

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) => allDates.includes(new Date(date).getTime()));
    return !isFound;
  }

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)  //removing a room from the selected list when a checkbox is unchecked
    )
  }

  // to update the unavailable dates
  const handleClick = async() => {
      try {
        await Promise.all(
          selectedRooms.map((roomId)=>{
            const res = axios.put(`/api/rooms/availability/${roomId}`,
              {dates:allDates}
            );
            return res.data;
          })
        );
        setOpenBooking(false);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
  }

  console.log(selectedRooms);

  return (
    <div className='reserve'>
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className='rClose'
          onClick={() => setOpenBooking(false)}
        />
        <span>Select your rooms:</span>
        {
          data.map((item) => (
            <div className="rItem" key={item._id}>

              <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.desc}</div>
                <div className="rMax">
                  Max people: <b>{item.maxPeople}</b>
                </div>
                <div className="rPrice">Price: ${item.price}</div>
              </div>

              <div className="rSelectRooms">
                {item.roomNumbers.map((roomNumber) => (
                    <div className="room" key={roomNumber._id}>
                      <label>{roomNumber.number}</label>
                      <input
                        type="checkbox"
                        value={roomNumber._id}
                        onChange={handleSelect}
                        disabled={!isAvailable(roomNumber)} />
                    </div>
                  ))}
              </div>

            </div>
          ))
        }

        <button className='rButton' onClick={handleClick}>Reserve Now!</button>
      </div>
    </div>
  )
}

export default Reserve


// hotel data fetched with useFetch could look like as follows:
// {
//     "_id": "699817bcfca16e6831c70246",
//     "name": "Hotel Paradise",
//     "type": "hotel",
//     "city": "berlin",
//     "address": "sunrise avenue 1",
//     "photos": [],
//     "title": "Best Hotel in the City",
//     "desc": "finest hotel with beautiful view of the city",
//     "rooms": [
//         "69c30a25343aefb38fef7704",
//         "69c30cb646046fccdb4c2c15"
//     ],
//     "cheapestPrice": 200,
//     "featured": false,
//     "distance": 500,
//     "__v": 0
// }