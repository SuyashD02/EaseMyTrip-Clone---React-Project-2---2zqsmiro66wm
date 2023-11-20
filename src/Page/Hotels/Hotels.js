import React,{useState} from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import Classes from "./Hotels.module.css";
import Navbar from "../../components/NavBar/Navbar";
import "react-datepicker/dist/react-datepicker.css";

import { Box, Divider, Modal } from "@mui/material";

function Hotels(){
  const [isSelectedDay,setSelectedDay]=useState("");
  const [location, setLocation] = useState("");
  const [searchHotelResults, setSearchHotelResults] = useState([]);
  const [hotelErrorPost, setHotelErrorPost] = useState("");
  const CustomInput = ({ value, onClick }) => (
    <input type="text" value={moment(value).format('dddd')} onClick={onClick} readOnly />
    );
    async function handleHotelSearch() {
      console.log("Hotel Search Function Called")
      try {
        const projectID = 'f104bi07c490';
        const formattedDate = moment(isSelectedDay).format('dddd');      
        const apiUrlHotel = `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${location}"}&day="${formattedDate}"`;
        const response = await fetch(apiUrlHotel, {
          method: 'GET',
          headers: {
            'projectID': projectID,
          },
        });
        if (response.ok) {
          console.log("Hotel data :")
          const hotelData = await response.json();
          console.log(hotelData);
          setSearchHotelResults(hotelData);
        }else{
          const errorData = await response.json();
          setHotelErrorPost(errorData.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setHotelErrorPost("An error occurred. Please try again.");
      }
    }
    const handleSetLocation = (e) => {
      setLocation(e.target.value);
    };

    return(
        <div>
            <Navbar/>
            <div className={Classes.searchBarHotelHeaders}>
            <div className={Classes.searchBarHotel}>
          <div className={Classes.searchBHedersHotel}>
            <div className={Classes.searchFromHotel}>
              <p className={Classes.headingInputHotel}>Enter City name,Location or Specific hotel</p>
              <div className={Classes.inputFormSectionHotel}>
              <input
                      className={Classes.formSearchBoxHotel}
                      placeholder="Enter City name,Location"
                      value={location}
                      onChange={handleSetLocation}
                    ></input>
              </div>
            </div>
          </div>
          <Divider orientation="vertical" />
          <div className={Classes.searchCheckIn}
          >
            <div className={Classes.searchCheckInClick}>
              <p>Check-in</p>
              <DatePicker
                selected={isSelectedDay}
                onChange={(date)=>setSelectedDay(date)}
                // dateFormat={"dddd"}
                customInput={<CustomInput/>}
                // onChange={(date) => setDepartureDate(moment(date).format('dddd'))}
                
                // dateFormat={(date) => moment(date).format('dddd')}
              />
            </div>
            
          </div>
          <Divider orientation="vertical" />
          <div className={Classes.searchCheckOut}>
            <div className={Classes.searchCheckOutClick}>
              <p>Check-out</p>
              
            </div>
          </div>
          <Divider orientation="vertical" />
          <div className={Classes.searchRooms}>
            <div className={Classes.searchRoomsClick}>
              <p>Rooms & Guests</p>
            </div>
          </div>

          <div className={Classes.searchButtonHotel} onClick={handleHotelSearch}>
            <h3>SEARCH</h3>
          </div>
        </div>
        </div>
        </div>
    )
}
export default Hotels;