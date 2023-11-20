import React, { useState } from "react";
import moment from "moment";
import Classes from "./Flights.module.css";
import Navbar from "../../components/NavBar/Navbar";
import Divider from "@mui/material/Divider";
import DatePicker from "react-datepicker";
import { Avatar, Box, ListItemButton, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Settings, Style } from "@mui/icons-material";
function Flights() {
  const [open, setOpen] = useState(false);
  const [openToModal, setOpenToModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedToCity, setSelectedToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [errorPost, setErrorPost] = useState("");

  const CustomInput = ({ value, onClick }) => (
    <input type="text" value={moment(value).format('dddd')} onClick={onClick} readOnly />
    );
  async function handleSearch() {
    try {
      const projectID = 'f104bi07c490';
      const dayAbbreviation = moment(departureDate).format('dddd');      
      const apiUrl = `https://academics.newtonschool.co/api/v1/bookingportals/flight/?search={"source":"${selectedCity}","destination":"${selectedToCity}"}&day="${dayAbbreviation}"`;
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'projectID': projectID,
        },
      });
      if (response.ok) {
        console.log("Flight Function called")
        const data = await response.json();
        console.log(data);
        setSearchResults(data);
      }else{
        const errorData = await response.json();
        setErrorPost(errorData.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorPost("An error occurred. Please try again.");
    }
  }
 


  return (
    <div className={Classes.flightsSection}>
      <Navbar />
      <div className={Classes.flightBooking}>
        <div className={Classes.headSearchbar}>
          <div className={Classes.buttonFlightWay}>
            <button>One Way</button>
            <button>Round Trip</button>
            <button>Multicity</button>
          </div>
          <div>
            <h1 className={Classes.searchLowestH1}>Search Lowest Price</h1>
          </div>
        </div>
        <div className={Classes.searchBar}>
          <div className={Classes.searchFrom}>
            <div>
              <p>FROM</p>
              <div className={Classes.inputFormSection}>
              <input
                      className={Classes.formSearchBox}
                      placeholder="FROM"
                      value={selectedCity}
                      onChange={(e)=>setSelectedCity(e.target.value)}
                    ></input>
              </div>
            </div>
          </div>
          <Divider orientation="vertical" />
          <img
            className={Classes.swapIcon}
            src="https://www.easemytrip.com/Content/img/swipe_icon.svg"
          />
          <div className={Classes.searchTo}>
            <div>
              <p>TO</p>
              <div className={Classes.inputToSection}>
              <input
                      className={Classes.toSearchBox}
                      placeholder="TO"
                      value={selectedToCity}
                      onChange={(e)=>setSelectedToCity(e.target.value)}
                    ></input>
              </div>
              
            </div>
          </div>
          <Divider orientation="vertical" />
          <div className={Classes.searchDeparture}>
            <div>
              <p>DEPARTURE DATE</p>
              <DatePicker
                selected={departureDate}
                onChange={(date)=>setDepartureDate(date)}
                // dateFormat={"dddd"}
                customInput={<CustomInput/>}
                // onChange={(date) => setDepartureDate(moment(date).format('dddd'))}
                
                // dateFormat={(date) => moment(date).format('dddd')}
              />
              
            </div>
          </div>
          <Divider orientation="vertical" />
          <div className={Classes.searchReturn}>
            <div>
              <p>RETURN DATE</p>
              <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            dateFormat={(date) => moment(date).format('dddd')}
          />
            </div>
          </div>
          <Divider orientation="vertical" />
          <div className={Classes.searchTraveller}>
            <div>
              <p>TRAVELLER & CLASS</p>
            </div>
          </div>

          <div className={Classes.searchButton} onClick={handleSearch}>
            <h3>SEARCH</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Flights;
